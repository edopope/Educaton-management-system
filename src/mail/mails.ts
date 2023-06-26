// import { EmailNotificationRequest, MailMessenger, SendEmails } from './dto';
// import { MailConfig } from './mailConfig';
// import axios, { AxiosResponse } from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';

// const USER_VERIFICATION_BASE_URL = 'netnaija.com';
// const WELCOME_MAIL_TEMPLATE_LOCATION = 'C:\\Users\\DELL\\Desktop\\medical\\email\\src\\main\\resources\\welcomeNoteForDoctor.html';

// interface DoctorMailServiceProps {
//   mailConfig: MailConfig;
// }

// class DoctorMailServiceImpl {
//   private mailConfig: MailConfig;

//   constructor(props: DoctorMailServiceProps) {
//     this.mailConfig = props.mailConfig;
//   }

//   private sendHtmlMail(request: EmailNotificationRequest): Promise<string> {
//     const headers = {
//       'Content-Type': 'application/json',
//       'api-key': this.mailConfig.getApiKey(),
//     };

//     return axios
//       .post(this.mailConfig.getMailUrl(), request, { headers })
//       .then((response: AxiosResponse<string>) => response.data)
//       .catch((error: any) => {
//         console.error('Error sending HTML mail:', error);
//         throw error;
//       });
//   }

//   private generateVerificationLink(): string {
//     return USER_VERIFICATION_BASE_URL;
//   }

//   private getMailTemplate(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       const reader = require('fs').createReadStream(WELCOME_MAIL_TEMPLATE_LOCATION, 'utf8');
//       let template = '';

//       reader.on('data', (chunk: string) => {
//         template += chunk;
//       });

//       reader.on('end', () => {
//         resolve(template);
//       });

//       reader.on('error', (error: any) => {
//         reject(error);
//       });
//     });
//   }

//   public async sendMail(sendEmails: SendEmails): Promise<string> {
//     try {
//       const message = await this.getMailTemplate();
//       const baseUrl = this.generateVerificationLink();

//       const request: EmailNotificationRequest = {
//         to: [new MailMessenger(sendEmails.getFirstName(), sendEmails.getEmailUrl())],
//         htmlContent: message.replace('{firstName}', sendEmails.getFirstName()).replace('{baseUrl}', baseUrl),
//       };

//       return await this.sendHtmlMail(request);
//     } catch (error: any) {
//       console.error('Error sending mail:', error);
//       throw error;
//     }
//   }
// }

// export default DoctorMailServiceImpl;
