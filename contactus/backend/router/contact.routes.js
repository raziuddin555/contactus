const express = require("express");
const contectModel = require("../schema/contact.model");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

const appPass = process.env.APP_PASS;

router.post("/sendmessage", async(req, res) => {
    console.log(req.body);
    try {
        let userMessage = await contectModel.create(req.body);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "mohdraziuddin555@gmail.com",
                pass: "yorfgypkpkscqdlu",
            },
        });

        const mailOptions = {
            from: "mohdraziuddin555@gmail.com",
            to: req.body.email,
            subject: req.body.subject,

            html: `<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
    <!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  </head>
  <body class="body">
    <div dir="ltr" class="es-wrapper-color">
      <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]-->
      <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
        <tbody>
          <tr>
            <td valign="top" class="esd-email-paddings">
              <table cellpadding="0" cellspacing="0" align="center" class="esd-header-popover es-header">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" width="600" class="es-header-body">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20">
                              <!--[if mso]><table width="560" cellpadding="0"
                            cellspacing="0"><tr><td width="180" valign="top"><![endif]-->
                              <table cellpadding="0" cellspacing="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="180" valign="top" align="center" class="es-m-p0r es-m-p20b esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-image es-m-txt-c" style="font-size:0px">
                                              <a target="_blank" href="https://viewstripo.email">
                                                <img src="https://tlr.stripocdn.email/content/guids/CABINET_e34db2ea76a06cfa90a6c5861cdc24f2/images/5791626874817946.png" alt="Logo" height="66" title="Logo" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]-->
                              <table cellpadding="0" cellspacing="0" align="right">
                                <tbody>
                                  <tr>
                                    <td width="360" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" height="15" class="esd-block-spacer"></td>
                                          </tr>
                                          <tr>
                                            <td esd-tmp-menu-color="#999999" class="esd-block-menu">
                                              <table cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="top" width="33.33%" id="esd-menu-id-0" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#999999">
                                                          About
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td align="center" valign="top" width="33.33%" id="esd-menu-id-1" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#999999">
                                                          Rooms
                                                        </a>
                                                      </div>
                                                    </td>
                                                    <td align="center" valign="top" width="33.33%" id="esd-menu-id-2" class="es-p10t es-p10b es-p5r es-p5l esd-block-menu-item">
                                                      <div>
                                                        <a target="_blank" href="https://viewstripo.email" style="color:#c9a96a">
                                                          Reservations →
                                                        </a>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table width="600" cellspacing="0" cellpadding="0" align="center" class="es-content-body">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20r es-p10l">
                              <table width="100%" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                    <td width="570" valign="top" align="center" class="es-m-p0r esd-container-frame">
                                      <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p10t es-p10b">
                                              <h1 class="es-m-txt-c">
                                                Honoring the Women
                                              </h1>
                                              <h1 class="es-m-txt-c">
                                                in Hospitality
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-image" style="font-size:0px">
                                              <a target="_blank" href="https://viewstripo.email">
                                                <img src="https://tlr.stripocdn.email/content/guids/CABINET_784a5f0dfdd03e44e6bea5332be847379831bf1ad1d71e52f2cdd15b039e8a47/images/objects.png" alt="" width="400" class="adapt-img" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="es-content">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table bgcolor="#d5f2ff" align="center" cellpadding="0" cellspacing="0" width="600" class="es-content-body" style="background:linear-gradient(180deg, rgba(213,242,255,1) 0%, rgba(255,255,255,1) 100%)">
                        <tbody>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p10b es-p20r es-p20l">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="560" align="center" valign="top" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-text">
                                              <p style="color:#999999;font-size:12px">
                                                Celebrating Women's Equality Day
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="center" class="esd-block-text es-p20t es-p5b es-p20r es-p20l es-m-p0r es-m-p0l">
                                              <h3 class="es-m-txt-c">
                                                Hi there!
                                              </h3>
                                              <h3 class="es-m-txt-c">
                                                <br>
                                              </h3>
                                              <p class="es-m-txt-c">
                                                On this Women's Equality Day, we celebrate the progress we have made towards gender equality and acknowledge the remarkable contributions of women in the hospitality industry. At Violet, we are proud to recognize and honor the achievements of the inspiring women who shape our industry.
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure es-p20">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="560" align="center" valign="top" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-button es-p10t es-p10b">
                                              <span class="es-button-border">
                                                <a href="https://viewstripo.email" target="_blank" class="es-button">
                                                  Supporting Women's Empowerment
                                                </a>
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p40b es-p20r es-p20l">
                              <!--[if mso]><table dir="ltr" cellpadding="0" cellspacing="0"><tr><td><table dir="rtl" width="560" cellpadding="0" cellspacing="0"><tr><td dir="ltr" width="270" valign="top"><![endif]-->
                              <table cellpadding="0" cellspacing="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="270" align="left" class="esd-container-frame es-m-p20b">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image" style="font-size:0px">
                                              <a target="_blank" href="https://viewstripo.email">
                                                <img src="https://tlr.stripocdn.email/content/guids/CABINET_784a5f0dfdd03e44e6bea5332be847379831bf1ad1d71e52f2cdd15b039e8a47/images/frontviewsmileywomanholdingbook.jpg" alt="" width="270" class="adapt-img b_image" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td dir="ltr" width="20"></td><td dir="ltr" width="270" valign="top"><![endif]-->
                              <table cellpadding="0" cellspacing="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="270" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-text">
                                              <h1 class="b_title es-m-txt-l">
                                                Join the Celebration
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" esd-links-underline="none" esd-links-color="#2c3f58" class="esd-block-text es-p15t es-p15b">
                                              <h3 class="es-m-txt-l">
                                                <a target="_blank" href="https://viewstripo.email" style="text-decoration:none;color:#2c3f58">#WomenInHospitality</a>
                                              </h3>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-text es-p10t es-p15b">
                                              <p class="b_description">
                                                Day, we invite you to share your stories and experiences of inspirational women in hospitality. Visit our website or connect with us on social media using the hashtag <strong>#WomenInHospitality </strong>to join the conversation and honor the women who have made a positive impact in your life.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" class="esd-block-button es-p10t es-p10b">
                                              <span class="es-button-border">
                                                <a href="https://viewstripo.email" target="_blank" class="es-button">
                                                  Join Now
                                                </a>
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table cellpadding="0" cellspacing="0" align="center" class="esd-footer-popover es-footer">
                <tbody>
                  <tr>
                    <td align="center" class="esd-stripe">
                      <table align="center" cellpadding="0" cellspacing="0" width="600" class="es-footer-body" style="background-color:transparent">
                        <tbody>
                          <tr>
                            <td align="left" bgcolor="#2C3F58" class="esd-structure es-p40t es-p20b es-p20r es-p20l" style="background-color:#2c3f58">
                              <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="194" valign="top"><![endif]-->
                              <table cellpadding="0" cellspacing="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="174" align="center" valign="top" class="esd-container-frame es-m-p20b">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-p25t es-p10b es-m-p0t" style="font-size:0px">
                                              <a target="_blank" href="https://viewstripo.email">
                                                <img src="https://tlr.stripocdn.email/content/guids/CABINET_e34db2ea76a06cfa90a6c5861cdc24f2/images/5791626874817946.png" alt="Logo" height="78" title="Logo" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td width="20" class="es-hidden"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="173" valign="top"><![endif]-->
                              <table cellpadding="0" cellspacing="0" align="left" class="es-left">
                                <tbody>
                                  <tr>
                                    <td width="173" align="left" class="esd-container-frame es-m-p20b">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" esd-links-underline="none" esd-links-color="#999999" class="esd-block-text">
                                              <p style="line-height:200%;color:#999999">
                                                <a target="_blank" href="https://viewstripo.email" style="line-height:200%;color:#999999;text-decoration:none">Home</a><br><a target="_blank" href="https://viewstripo.email" style="line-height:200%;color:#999999;text-decoration:none">Reservations</a>
                                              </p>
                                              <p style="line-height:200%;color:#999999">
                                                <a target="_blank" href="https://viewstripo.email" style="line-height:200%;color:#999999;text-decoration:none">About</a>
                                              </p>
                                              <p style="line-height:200%;color:#999999">
                                                <a target="_blank" href="https://viewstripo.email" style="line-height:200%;color:#999999;text-decoration:none">Contact</a>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td width="20"></td><td width="173" valign="top"><![endif]-->
                              <table cellpadding="0" cellspacing="0" align="right" class="es-right">
                                <tbody>
                                  <tr>
                                    <td width="173" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="left" class="esd-block-social es-m-txt-c" style="font-size:0">
                                              <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="top" class="es-p20r">
                                                      <a target="_blank" href="https://viewstripo.email">
                                                        <img title="Facebook" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-gray/facebook-logo-gray.png" alt="Fb" width="24" height="24">
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top" class="es-p20r">
                                                      <a target="_blank" href="https://viewstripo.email">
                                                        <img title="Instagram" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-gray/instagram-logo-gray.png" alt="Inst" width="24" height="24">
                                                      </a>
                                                    </td>
                                                    <td align="center" valign="top">
                                                      <a target="_blank" href="https://viewstripo.email">
                                                        <img title="Youtube" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-gray/youtube-logo-gray.png" alt="Yt" width="24" height="24">
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" esd-links-underline="none" esd-links-color="#999999" class="esd-block-text es-p10t">
                                              <p class="es-m-txt-c" style="font-size:12px;color:#999999">
                                                © Copyright<br>All Right Reserved.
                                              </p>
                                              <p class="es-m-txt-c" style="color:#999999">
                                                <a href="https://viewstripo.email" target="_blank" style="font-size:12px;text-decoration:none;color:#999999">Privacy Policy</a>
                                              </p>
                                              <p class="es-m-txt-c" style="color:#999999">
                                                <a href="https://viewstripo.email" target="_blank" style="font-size:12px;text-decoration:none;color:#999999">Terms of use</a>
                                              </p>
                                              <p class="es-m-txt-c" style="color:#999999">
                                                <br>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr>
                            <td align="left" class="esd-structure es-p20t es-p20b es-p20r es-p20l">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td width="560" align="left" class="esd-container-frame">
                                      <table cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" class="esd-block-image es-infoblock made_with" style="font-size:0">
                                              <a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=hotels_4&utm_content=honoring_the_women_in_hospitality">
                                                <img src="https://tlr.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt="" width="125" style="display:block">
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: " + info);
        });

        res.send({
            success: true,
            message: "send message successfully!",
            your_mess: userMessage,
        });
    } catch (error) {
        res.send({
            success: false,
            message: "not send message!",
        });
    }
});



module.exports = router;