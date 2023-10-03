import nodemailer from "nodemailer"

// Create a nodemailer transporter with SMTP credentials
const transporter = nodemailer.createTransport({
  service: 'SMTP',
  host: 'your-smtp-server.com',
  port: 587, // Port number may vary depending on your SMTP provider
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password',
  },
});

export const SendEmails= async (req, res) => {
  const { recipients, subject, text } = req.body;

  if (!recipients || !subject || !text) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailOptions = {
    from: 'your-email@example.com',
    to: recipients.join(','), // Join the recipient email addresses with commas
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send emails' });
    } else {
      console.log('Emails sent:', info.response);
      res.status(200).json({ message: 'Emails sent successfully' });
    }
  });
};


