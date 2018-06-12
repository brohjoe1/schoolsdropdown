import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {

    $(function() {
      let countryOptions = '';
      let stateOptions = '';
      let alOps = '';
      let arOps = '';
      let akOps = '';
      let asOps = '';
      let azOps = '';
      let caOps = '';
      let coOps = '';
      let ctOps = '';
      let dcOps = '';
      let deOps = '';
      let flOps = '';
      let fmOps = '';
      let gaOps = '';
      let guOps = '';
      let hiOps = '';
      let iaOps = '';
      let idOps = '';
      let ilOps = '';
      let inOps = '';
      let ksOps = '';
      let kyOps = '';
      let laOps = '';
      let maOps = '';
      let mdOps = '';
      let meOps = '';
      let mhOps = '';
      let miOps = '';
      let mnOps = '';
      let moOps = '';
      let mpOps = '';
      let msOps = '';
      let mtOps = '';
      let ncOps = '';
      let ndOps = '';
      let neOps = '';
      let nhOps = '';
      let njOps = '';
      let nmOps = '';
      let nvOps = '';
      let nyOps = '';
      let ohOps = '';
      let okOps = '';
      let orOps = '';
      let paOps = '';
      let prOps = '';
      let pwOps = '';
      let riOps = '';
      let scOps = '';
      let sdOps = '';
      let tnOps = '';
      let txOps = '';
      let utOps = '';
      let vaOps = '';
      let viOps = '';
      let vtOps = '';
      let waOps = '';
      let wiOps = '';
      let wvOps = '';
      let wyOps = '';
      let url = '';



      url = 'https://api.mlab.com/api/1/databases/apptos/collections/countries/' +
        '5b03245d734d1d0aaaad6559?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
      $.getJSON(url, function (data) {
        $.each(data, function (index, country) {
          countryOptions +=
            '<option value= "' + country.code + '">'
            + country.name +
            '</option>';
        });
        $('#country').html(countryOptions);
      });

      $('#country').change(function () {
        url = 'https://api.mlab.com/api/1/databases/apptos/collections/us_states/' +
          '5b15d8c5e7179a6034c721a8?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
        if ($(this).val() === 'US') {
          $.getJSON(url, function (data) {
            $.each(data, function (index, stateObj) {
              stateOptions += '<option value="' + stateObj.code + '">'
                + stateObj.name +
                '</option>';
            });
            $('#state').html(stateOptions);
          });
        }
      });


      $('#state').on('change', function () {
        url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
          '5b0f13a7fb6fc004ef013e22?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
        if ($(this).val() === 'AL') {
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              alOps += '<option value="' + school.SchoolName + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(alOps);

          });
        }

        if ($(this).val() === 'AK') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b023908734d1d0aaaace6e3?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              akOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(akOps);
          });
        }



        if ($(this).val() === 'AR') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b032b02734d1d0aaaad68f5?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              arOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(arOps);
          });
        }

        if ($(this).val() === 'AS') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0ebec7fb6fc004ef00ac84?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              asOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(asOps);
          });
        }

        if ($(this).val() === 'AZ') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f0b2ffb6fc004ef012dcd?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              azOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(azOps);
          });
        }

        if ($(this).val() === 'CA') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f6b13c211872d648ad578?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              caOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(caOps);
          });
        }

        if ($(this).val() === 'CO') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f70c9c211872d648ad57b?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              coOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(coOps);
          });
        }

        if ($(this).val() === 'CT') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f7561c211872d648ad583?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              ctOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(ctOps);
          });
        }

        if ($(this).val() === 'DC') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f7b49c211872d648ad585?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              dcOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(dcOps);
          });
        }

        if ($(this).val() === 'DE') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f7dd5c211872d648ad587?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              deOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(deOps);
          });
        }

        if ($(this).val() === 'FL') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f7ffec211872d648ad589?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              flOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(flOps);
          });
        }

        if ($(this).val() === 'FM') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f81a3c211872d648ad58c?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              fmOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(fmOps);
          });
        }

        if ($(this).val() === 'GA') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b0f845cc211872d648ad590?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              gaOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(gaOps);
          });
        }

        if ($(this).val() === 'GU') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b154e9ffb6fc02bcb8d7a08?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              guOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(guOps);
          });
        }

        if ($(this).val() === 'HI') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b106e02225870238cb24f94?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              hiOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(hiOps);
          });
        }

        if ($(this).val() === 'IA') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b155134fb6fc02bcb8d7de0?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              iaOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(iaOps);
          });
        }



        if ($(this).val() === 'ID') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15443638c1a424e0721fe6?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              idOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(idOps);
          });
        }

        if ($(this).val() === 'IL') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15528efb6fc02bcb8d82f8?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              ilOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(ilOps);
          });
        }


        if ($(this).val() === 'IN') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15541ffb6fc02bcb8d844c?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              inOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(inOps);
          });
        }

        if ($(this).val() === 'KS') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15803be7179a6034c6f677?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              ksOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(ksOps);
          });
        }


        if ($(this).val() === 'LA') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b158bd6e7179a6034c6fd0f?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              laOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(laOps);
          });
        }


        if ($(this).val() === 'KY') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b1587cfe7179a6034c6fb62?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              kyOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(kyOps);
          });
        }


        if ($(this).val() === 'MA') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b158c96e7179a6034c6fd40?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              maOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(maOps);
          });
        }


        if ($(this).val() === 'MD') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b158d38e7179a6034c6fde5?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              mdOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(mdOps);
          });
        }


        if ($(this).val() === 'ME') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b158e09e7179a6034c6fe3c?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              meOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(meOps);
          });
        }


        if ($(this).val() === 'MH') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b158fc0e7179a6034c6ff6b?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              mhOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(mhOps);
          });
        }


        if ($(this).val() === 'MI') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b1590d7e7179a6034c6ffc1?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              miOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(miOps);
          });
        }


        if ($(this).val() === 'MN') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b159feee7179a6034c708dc?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              mnOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(mnOps);
          });
        }


        if ($(this).val() === 'MO') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15a17fe7179a6034c70998?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              moOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(moOps);
          });
        }


        if ($(this).val() === 'MP') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15a2e0e7179a6034c709e2?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              mpOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(mpOps);
          });
        }


        if ($(this).val() === 'MS') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15a3c8e7179a6034c70a7b?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              msOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(msOps);
          });
        }


        if ($(this).val() === 'MT') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15a4d7e7179a6034c70af5?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              mtOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(mtOps);
          });
        }


        if ($(this).val() === 'NC') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15a7b8e7179a6034c70c8b?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              ncOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(ncOps);
          });
        }


        if ($(this).val() === 'ND') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15aaade7179a6034c70e39?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              ndOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(ndOps);
          });
        }


        if ($(this).val() === 'NE') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15acf7e7179a6034c70fae?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              neOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(neOps);
          });
        }


        if ($(this).val() === 'NH') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15ce39e7179a6034c7203f?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              nhOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(nhOps);
          });
        }


        if ($(this).val() === 'NJ') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15d04be7179a6034c72072?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              njOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(njOps);
          });
        }


        if ($(this).val() === 'NM') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15d55ee7179a6034c72118?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              nmOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(nmOps);
          });
        }


        if ($(this).val() === 'NV') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15e04be7179a6034c7239a?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              nvOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(nvOps);
          });
        }


        if ($(this).val() === 'NY') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15e527e7179a6034c724c7?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              nyOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(nyOps);
          });
        }


        if ($(this).val() === 'OH') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15e68ae7179a6034c724ec?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              ohOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(ohOps);
          });
        }


        if ($(this).val() === 'OK') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15e78fe7179a6034c724fe?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              okOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(okOps);
          });
        }


        if ($(this).val() === 'OR') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15ebe0e7179a6034c72573?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              orOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(orOps);
          });
        }


        if ($(this).val() === 'PA') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15ecdee7179a6034c7258e?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              paOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(paOps);
          });
        }


        if ($(this).val() === 'PR') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15ede1e7179a6034c725a1?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              prOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(prOps);
          });
        }


        if ($(this).val() === 'PW') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15ee74e7179a6034c725b5?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              pwOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(pwOps);
          });
        }


        if ($(this).val() === 'RI') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15f179e7179a6034c725db?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              riOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(riOps);
          });
        }


        if ($(this).val() === 'SC') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15f2abe7179a6034c725f8?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              scOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(scOps);
          });
        }


        if ($(this).val() === 'SD') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15f440e7179a6034c7265d?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              sdOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(sdOps);
          });
        }


        if ($(this).val() === 'TN') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15f57de7179a6034c726a0?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              tnOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(tnOps);
          });
        }


        if ($(this).val() === 'TX') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15f6fee7179a6034c726da?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              txOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(txOps);
          });
        }

        if ($(this).val() === 'UT') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15f835e7179a6034c72720?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              utOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(utOps);
          });
        }

        if ($(this).val() === 'VA') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15fa9be7179a6034c72753?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              vaOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(vaOps);
          });
        }

        if ($(this).val() === 'VI') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15fbf8e7179a6034c7276d?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              viOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(viOps);
          });
        }

        if ($(this).val() === 'VT') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15fc91e7179a6034c7278b?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              vtOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(vtOps);
          });
        }

        if ($(this).val() === 'WA') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15fe2fe7179a6034c727c6?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              waOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(waOps);
          });
        }

        if ($(this).val() === 'WI') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b15fff2e7179a6034c727e4?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              wiOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(wiOps);
          });
        }

        if ($(this).val() === 'WV') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b1600a4e7179a6034c72803?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              wvOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(wvOps);
          });
        }

        if ($(this).val() === 'WY') {
          url = 'https://api.mlab.com/api/1/databases/apptos/collections/schoolsByState/' +
            '5b160147e7179a6034c72827?apiKey=DLNB_yFtNBJKGnAfn6g_W23fReOsyuPl';
          $.getJSON(url, function (data) {
            $.each(data, function (index, school) {
              wyOps += '<option value="' + school.StateCode + '">'
                + school.SchoolName + ' -- (' + school.City  + ') ' + ' | ' + school.SchoolCode +
                '</option>';
            });
            $('#school').html(wyOps);
          });
        }


      }); // end state functions
    }); // end function()



  }


}
