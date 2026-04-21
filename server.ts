import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Setup Multer for handling file uploads in memory
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email validation helper
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// API Route for Handing Contacts
app.post("/api/contact", upload.array("attachment"), async (req, res) => {
  const { name, phone, email, message, service, _subject } = req.body;
  const files = req.files as Express.Multer.File[];

  console.log("Received contact request:", { name, email, service, _subject });

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Configure Nodemailer
  // If SMTP variables aren't set, we log to console (for development/preview)
  const smtpConfig = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };

  const isConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

  if (!isConfigured) {
    console.warn("SMTP is not configured. Email data logged below:");
    console.log("-----------------------------------");
    console.log(`To: ${process.env.ADMIN_EMAIL || "Land Owner"}`);
    console.log(`Subject: ${service ? `[Service: ${service}] ` : ""}${_subject || "New Inquiry"}`);
    console.log(`Content: Name: ${name}, Phone: ${phone}, Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`Attachments: ${files?.length || 0} files`);
    console.log("-----------------------------------");
    
    // In dev, we return success so user sees the "sent" state
    return res.json({ success: true, message: "Request logged in server console (no SMTP configured)" });
  }

  const transporter = nodemailer.createTransport(smtpConfig);

  const htmlContent = `
    <div style="font-family: serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 24px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #1c1917; padding: 40px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px;">LANDIS</h1>
        <p style="color: #a8a29e; font-size: 12px; margin-top: 10px; text-transform: uppercase; letter-spacing: 1px;">Нова заявка з сайту</p>
      </div>
      <div style="padding: 40px; color: #1c1917;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 20px;">Деталі звернення:</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #78716c; font-size: 12px; text-transform: uppercase;">Клієнт:</td>
            <td style="padding: 10px 0; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #78716c; font-size: 12px; text-transform: uppercase;">Телефон:</td>
            <td style="padding: 10px 0; font-weight: 600;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #78716c; font-size: 12px; text-transform: uppercase;">Email:</td>
            <td style="padding: 10px 0; font-weight: 600;">${email}</td>
          </tr>
          ${service ? `
          <tr>
            <td style="padding: 10px 0; color: #78716c; font-size: 12px; text-transform: uppercase;">Послуга:</td>
            <td style="padding: 10px 0; font-weight: 600; color: #9f1239;">${service}</td>
          </tr>` : ""}
        </table>

        <div style="margin-top: 30px; padding: 20px; background-color: #f8fafc; border-radius: 12px;">
          <p style="color: #78716c; font-size: 12px; text-transform: uppercase; margin-bottom: 10px;">Повідомлення:</p>
          <p style="line-height: 1.6; margin: 0;">${message}</p>
        </div>

        <p style="margin-top: 40px; font-size: 11px; color: #a8a29e; text-align: center;">
          Це автоматичне сповіщення надіслане з вашого веб-сайту LANDIS.
        </p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `LANDIS Site <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `[LANDIS] ${service ? `${service}: ` : ""}${name}`,
      html: htmlContent,
      attachments: files?.map(file => ({
        filename: file.originalname,
        content: file.buffer,
      })),
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
