const { createTransport } = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


//variables de entorno
const {
  GOOGLE_ID,
  GOOGLE_REFRESH,
  GOOGLE_SECRET,
  GOOGLE_URL,
  GOOGLE_USER,
  BACK_URL,
} = process.env;

//creamos el constructor para la credencial de google
function createClient() {
  return new OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL); // requiere los datos que alojamos en las variables
}

//define el transportador
function getTransport(client) {
  //access token tiene vencimiento, necesito metodos de google para calcular ese codigo. ese es getAccessToken
  const accessToken = client.getAccessToken();
  return createTransport({
    service: "gmail",
    auth: {
      user: GOOGLE_USER,
      type: "OAuth2",
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      refreshToken: GOOGLE_REFRESH,
      accessToken: accessToken,
    },
    tls: { rejectUnauthorized: false },
  });
}

function getEmailBody(mail, code, host) {
  return `
       
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
  <meta name=x-apple-disable-message-reformatting>
  <meta http-equiv=X-UA-Compatible>
  <meta charset=utf-8>
  <meta name=viewport content=target-densitydpi=device-dpi>
  <meta content=true name=HandheldFriendly>
  <meta content=width=device-width name=viewport>
  <style type="text/css">
  table {
  border-collapse: separate;
  table-layout: fixed;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt
  }
  table td {
  border-collapse: collapse
  }
  .ExternalClass {
  width: 100%
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%
  }
  * {
  line-height: inherit;
  text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -o-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
  }
  html {
  -webkit-text-size-adjust: none !important
  }
  img+div {
  display: none;
  display: none !important
  }
  img {
  Margin: 0;
  padding: 0;
  -ms-interpolation-mode: bicubic
  }
  h1, h2, h3, p, a {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: 1;
  color: inherit;
  background: none;
  overflow-wrap: normal;
  white-space: normal;
  word-break: break-word
  }
  a {
  color: inherit;
  text-decoration: none
  }
  h1, h2, h3, p {
  min-width: 100%!important;
  width: 100%!important;
  max-width: 100%!important;
  display: inline-block!important;
  border: 0;
  padding: 0;
  margin: 0
  }
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important
  }
  a[href^="mailto"],
  a[href^="tel"],
  a[href^="sms"] {
  color: inherit !important;
  text-decoration: none !important
  }
  @media only screen and (min-width: 481px) {
  .hd { display: none!important }
  }
  @media only screen and (max-width: 480px) {
  .hm { display: none!important }
  }
  [style*="Inter"] {font-family: 'Inter', BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif !important;} [style*="Fira Sans"] {font-family: 'Fira Sans', BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif !important;} [style*="Inter Tight"] {font-family: 'Inter Tight', BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif !important;}
  @media only screen and (min-width: 481px) {.t11,.t6{padding-top:50px!important;padding-bottom:50px!important}.t38,.t40{padding:30px 50px!important}.t57,.t59{padding:50px!important}.t70{mso-line-height-alt:30px!important;line-height:30px!important}.t73{width:260px!important;line-height:60px!important;mso-text-raise:13px!important}.t78,.t79{line-height:60px!important;mso-text-raise:13px!important}.t81{width:260px!important;line-height:60px!important;mso-text-raise:13px!important}.t82{mso-line-height-alt:30px!important;line-height:30px!important}.t93{mso-line-height-alt:50px!important;line-height:50px!important}.t121{mso-line-height-alt:30px!important;line-height:30px!important}.t130{line-height:28px!important;font-size:18px!important;mso-text-raise:3px!important}}
  </style>
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700&family=Inter:wght@400;500;600&family=Fira+Sans:wght@400&display=swap" rel="stylesheet" type="text/css">
  <!--<![endif]-->
  <!--[if mso]>
  <style type="text/css">
  .t11,.t6{padding-top:50px !important;padding-bottom:50px !important}.t38,.t40{padding:30px 50px !important}.t57,.t59{padding:50px !important}.t70{mso-line-height-alt:30px !important;line-height:30px !important}.t73{width:260px !important;line-height:60px !important;mso-text-raise:13px !important}.t78,.t79{line-height:60px !important;mso-text-raise:13px !important}.t81{width:260px !important;line-height:60px !important;mso-text-raise:13px !important}.t82{mso-line-height-alt:30px !important;line-height:30px !important}.t93{mso-line-height-alt:50px !important;line-height:50px !important}.t121{mso-line-height-alt:30px !important;line-height:30px !important}.t130{line-height:28px !important;font-size:18px !important;mso-text-raise:3px !important}
  </style>
  <![endif]-->
  <!--[if mso]>
  <xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  </head>
  <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#EDEDED;"><div class=t1 style="background-color:#EDEDED;"><table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td class=t141 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
  <!--[if mso]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
  <v:fill color=#EDEDED />
  </v:background>
  <![endif]-->
  <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td>
  <table class=t5 role=presentation cellpadding=0 cellspacing=0 align=center><tr><td class=t6 style="overflow:hidden;padding:20px 10px 20px 10px;"><div class=t12 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
  <!--[if mso]>
  <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
  <div class=t16 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
  <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t18><tr>
  <td class=t19 style="overflow:hidden;background-color:unset;"><table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td><div class=t31 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
  <!--[if mso]>
  <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
  <div class=t35 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
  <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t37><tr>
  <td class=t38 style="border-bottom:1px solid #454545;overflow:hidden;background-color:#EB5317;padding:20px 30px 20px 30px;border-radius:8px 8px 0 0;"><table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
  <table class=t133 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t134 style="overflow:hidden;width:55px;"><div style="font-size:0px;"><img class=t140 style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width=55 src=https://uploads.tabular.email/e/0135d635-fd54-444b-b6b0-0240f24dff72/58c35c0f-8832-4228-a72a-211abdcb9b41.png /></div></td>
  </tr></table>
  </td></tr></table></td>
  </tr></table>
  </div>
  <!--[if mso]>
  </td>
  </tr></table>
  <![endif]-->
  </div></td></tr><tr><td><div class=t50 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
  <!--[if mso]>
  <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
  <div class=t54 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
  <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t56><tr>
  <td class=t57 style="border-bottom:1px solid #F7F7F7;overflow:hidden;background-color:#FFFFFF;padding:30px 30px 30px 30px;border-radius:0 0 8px 8px;"><table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
  <table class=t62 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t63 style="overflow:hidden;width:510px;"><h1 class=t69 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter Tight';line-height:40px;font-weight:700;font-style:normal;font-size:35px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Verify your account</h1></td>
  </tr></table>
  </td></tr><tr><td><div class=t82 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
  <table class=t84 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t85 style="overflow:hidden;width:563px;"><p class=t91 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:28px;font-weight:500;font-style:normal;font-size:21px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Hello and welcome ${mail}</p></td>
  </tr></table>
  </td></tr><tr><td><div class=t70 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
  <table class=t72 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t73 style="background-color:#EA5318;overflow:hidden;width:326px;text-align:center;line-height:50px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:14px 14px 14px 14px;"><a class=t79  href="${host}auth/verify/${code}" style="display:block;font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:50px;font-weight:600;font-style:normal;font-size:18px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;" target=_blank>Verify</a></td>
  </tr></table>
  </td></tr><tr><td><div class=t121 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
  <table class=t123 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t124 style="overflow:hidden;width:603px;"><p class=t130 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:23px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">If you weren&#39;t the one who signed up, just ignore it.</p></td>
  </tr></table>
  </td></tr></table></td>
  </tr></table>
  </div>
  <!--[if mso]>
  </td>
  </tr></table>
  <![endif]-->
  </div></td></tr></table></td>
  </tr></table>
  </div>
  <!--[if mso]>
  </td>
  </tr></table>
  <![endif]-->
  </div></td>
  </tr></table>
  </td></tr><tr><td><div class=t101 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
  <!--[if mso]>
  <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
  <div class=t105 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
  <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t107><tr>
  <td class=t108 style="overflow:hidden;padding:0 50px 0 50px;"><table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
  <table class=t113 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t114 style="overflow:hidden;width:420px;"><p class=t120 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Fira Sans';line-height:23px;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;text-transform:none;direction:ltr;color:#878787;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">© 2022 My tinerary. All Rights Reserved
  </p></td>
  </tr></table>
  </td></tr></table></td>
  </tr></table>
  </div>
  <!--[if mso]>
  </td>
  </tr></table>
  <![endif]-->
  </div></td></tr><tr><td><div class=t93 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr></table></td></tr></table></div></body>
  </html>
      `
  }


const accountVerificationEmail = async (
  mailDelNuevoUsuario,
  codigoCalculadoConCrypto
) => {
    console.log(mailDelNuevoUsuario);
  const client = createClient();
  client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });
  const transport = getTransport(client);
  const mailOptions = {
    from: GOOGLE_USER,
    to: mailDelNuevoUsuario,
    subject: "Verify your new account in Amazing Events",
    html: getEmailBody(mailDelNuevoUsuario, codigoCalculadoConCrypto, BACK_URL),
  };
  await transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Email sent!");
  });
};

module.exports = accountVerificationEmail;