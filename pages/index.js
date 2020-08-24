import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
                <!DOCTYPE html>
          <html lang="tr">

          <head>
              <meta charset="utf-8" />
              <title>Elektronik Tahlil Sonucu Doğrulama</title>
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta content="width=device-width, initial-scale=1" name="viewport" />
              <meta content="" name="description" />
              <meta content="" name="author" />
              <link href="eNabizMain.css" rel="stylesheet" />
              <link href="font-awesome.min.css" rel="stylesheet" type="text/css">
              <style>
                  .BoxContent {
                      width: 50%;
                      margin: 7% auto;
                      position: relative;
                      background-color: #fff;
                      -webkit-box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
                      -moz-box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
                      box-shadow: 2px 2px 13px 0px rgba(0,0,0,.20);
                  }

                  .EnabizLogo {
                      padding: 15px;
                      height: 70px;
                      position: relative;
                      left: 0;
                      margin-bottom: 50px
                  }

                  @media (max-width: 991px) {
                      .BoxContent {
                          width: 100%;
                          margin: 0% auto;
                          -webkit-box-shadow: none;
                          -moz-box-shadow: none;
                          box-shadow: none;
                      }

                      body {
                          margin: 0;
                          padding: 0;
                      }

                      .EnabizLogo {
                          margin-bottom: 0px
                      }
                  }
              </style>
          </head>

          <body>
              <div class="BoxContent">
                      <img src="enabiz-logo-giris-eng.png" class="EnabizLogo" />
                  <img src="sb-logo-giris.png" style="position: absolute;right:0;height: 100px;" />
                  <div class="clearfix"></div>
                  <div style="padding:50px;">

                              <p class="note note-success" style="line-height:30px;margin-bottom: 40px;">
                                  The result of this test belongs to  E***  IVA***.

                                  <br />
                                  It was downloaded by  E***  IVA*** on 08.08.2020.
                              </p>
                              <div class="clearfix"></div>
                      <div class="clearfix"></div>
                  </div>
              </div>
          </body>
          </html><script id="f5_cspm">(function(){var f5_cspm={f5_p:'HDDELIKJKEAPHPOAKLGPMOGHEKNMJBLEINNPFGEMFLBEPGAJGFODPBAICJFIHNLBLEPEMKNLINABKKMHGAADPHKFCKPAMHLEAADPMHMAELFIOKFEAAFPHHIKOLELGJJA',setCharAt:function(str,index,chr){if(index>str.length-1)return str;return str.substr(0,index)+chr+str.substr(index+1);},get_byte:function(str,i){var s=(i/16)|0;i=(i&15);s=s*32;return((str.charCodeAt(i+16+s)-65)<<4)|(str.charCodeAt(i+s)-65);},set_byte:function(str,i,b){var s=(i/16)|0;i=(i&15);s=s*32;str=f5_cspm.setCharAt(str,(i+16+s),String.fromCharCode((b>>4)+65));str=f5_cspm.setCharAt(str,(i+s),String.fromCharCode((b&15)+65));return str;},set_latency:function(str,latency){latency=latency&0xffff;str=f5_cspm.set_byte(str,48,(latency>>8));str=f5_cspm.set_byte(str,49,(latency&0xff));str=f5_cspm.set_byte(str,43,2);return str;},wait_perf_data:function(){try{var wp=window.performance.timing;if(wp.loadEventEnd>0){var res=wp.loadEventEnd-wp.navigationStart;if(res<60001){var cookie_val=f5_cspm.set_latency(f5_cspm.f5_p,res);window.document.cookie='f5avr2074326945aaaaaaaaaaaaaaaa='+encodeURIComponent(cookie_val)+';path=/';}
          return;}}
          catch(err){return;}
          setTimeout(f5_cspm.wait_perf_data,100);return;},go:function(){var chunk=window.document.cookie.split(/\s*;\s*/);for(var i=0;i<chunk.length;++i){var pair=chunk[i].split(/\s*=\s*/);if(pair[0]=='f5_cspm'&&pair[1]=='1234')
          {var d=new Date();d.setTime(d.getTime()-1000);window.document.cookie='f5_cspm=;expires='+d.toUTCString()+';path=/;';setTimeout(f5_cspm.wait_perf_data,100);}}}}
          f5_cspm.go();}());</script>
  )
}
