const http = new XMLHttpRequest();
var countryData = {};
var apiData = {};
var $parent = null;
var $singleCountry = null;
var $global = null;

const countryList = [
	{
		Country: 'Australia',
		Slug: 'australia',
		ISO2: 'AU',
	},
	{
		Country: 'Iran, Islamic Republic of',
		Slug: 'iran',
		ISO2: 'IR',
	},
	{
		Country: 'Liechtenstein',
		Slug: 'liechtenstein',
		ISO2: 'LI',
	},
	{
		Country: 'Tunisia',
		Slug: 'tunisia',
		ISO2: 'TN',
	},
	{
		Country: 'Uzbekistan',
		Slug: 'uzbekistan',
		ISO2: 'UZ',
	},
	{
		Country: 'Virgin Islands, US',
		Slug: 'virgin-islands',
		ISO2: 'VI',
	},
	{
		Country: 'Cameroon',
		Slug: 'cameroon',
		ISO2: 'CM',
	},
	{
		Country: 'Macao, SAR China',
		Slug: 'macao-sar-china',
		ISO2: 'MO',
	},
	{
		Country: 'Uruguay',
		Slug: 'uruguay',
		ISO2: 'UY',
	},
	{
		Country: 'Armenia',
		Slug: 'armenia',
		ISO2: 'AM',
	},
	{
		Country: 'British Indian Ocean Territory',
		Slug: 'british-indian-ocean-territory',
		ISO2: 'IO',
	},
	{
		Country: 'India',
		Slug: 'india',
		ISO2: 'IN',
	},
	{
		Country: 'Latvia',
		Slug: 'latvia',
		ISO2: 'LV',
	},
	{
		Country: 'Portugal',
		Slug: 'portugal',
		ISO2: 'PT',
	},
	{
		Country: 'Poland',
		Slug: 'poland',
		ISO2: 'PL',
	},
	{
		Country: 'Spain',
		Slug: 'spain',
		ISO2: 'ES',
	},
	{
		Country: 'Barbados',
		Slug: 'barbados',
		ISO2: 'BB',
	},
	{
		Country: 'Pitcairn',
		Slug: 'pitcairn',
		ISO2: 'PN',
	},
	{
		Country: 'Seychelles',
		Slug: 'seychelles',
		ISO2: 'SC',
	},
	{
		Country: 'Somalia',
		Slug: 'somalia',
		ISO2: 'SO',
	},
	{
		Country: 'Greece',
		Slug: 'greece',
		ISO2: 'GR',
	},
	{
		Country: 'Mauritania',
		Slug: 'mauritania',
		ISO2: 'MR',
	},
	{
		Country: 'Pakistan',
		Slug: 'pakistan',
		ISO2: 'PK',
	},
	{
		Country: 'Taiwan, Republic of China',
		Slug: 'taiwan',
		ISO2: 'TW',
	},
	{
		Country: 'Timor-Leste',
		Slug: 'timor-leste',
		ISO2: 'TL',
	},
	{
		Country: 'Bermuda',
		Slug: 'bermuda',
		ISO2: 'BM',
	},
	{
		Country: 'Cuba',
		Slug: 'cuba',
		ISO2: 'CU',
	},
	{
		Country: 'Niger',
		Slug: 'niger',
		ISO2: 'NE',
	},
	{
		Country: 'Uganda',
		Slug: 'uganda',
		ISO2: 'UG',
	},
	{
		Country: 'Burundi',
		Slug: 'burundi',
		ISO2: 'BI',
	},
	{
		Country: 'Macedonia, Republic of',
		Slug: 'macedonia',
		ISO2: 'MK',
	},
	{
		Country: 'Holy See (Vatican City State)',
		Slug: 'holy-see-vatican-city-state',
		ISO2: 'VA',
	},
	{
		Country: 'Myanmar',
		Slug: 'myanmar',
		ISO2: 'MM',
	},
	{
		Country: 'Réunion',
		Slug: 'réunion',
		ISO2: 'RE',
	},
	{
		Country: 'Belize',
		Slug: 'belize',
		ISO2: 'BZ',
	},
	{
		Country: 'Denmark',
		Slug: 'denmark',
		ISO2: 'DK',
	},
	{
		Country: 'Jersey',
		Slug: 'jersey',
		ISO2: 'JE',
	},
	{
		Country: 'Martinique',
		Slug: 'martinique',
		ISO2: 'MQ',
	},
	{
		Country: 'Montserrat',
		Slug: 'montserrat',
		ISO2: 'MS',
	},
	{
		Country: 'Saint Pierre and Miquelon',
		Slug: 'saint-pierre-and-miquelon',
		ISO2: 'PM',
	},
	{
		Country: 'Cambodia',
		Slug: 'cambodia',
		ISO2: 'KH',
	},
	{
		Country: 'Gabon',
		Slug: 'gabon',
		ISO2: 'GA',
	},
	{
		Country: 'Sri Lanka',
		Slug: 'sri-lanka',
		ISO2: 'LK',
	},
	{
		Country: 'Lao PDR',
		Slug: 'lao-pdr',
		ISO2: 'LA',
	},
	{
		Country: 'Kuwait',
		Slug: 'kuwait',
		ISO2: 'KW',
	},
	{
		Country: 'Moldova',
		Slug: 'moldova',
		ISO2: 'MD',
	},
	{
		Country: 'Norfolk Island',
		Slug: 'norfolk-island',
		ISO2: 'NF',
	},
	{
		Country: 'Italy',
		Slug: 'italy',
		ISO2: 'IT',
	},
	{
		Country: 'San Marino',
		Slug: 'san-marino',
		ISO2: 'SM',
	},
	{
		Country: 'South Georgia and the South Sandwich Islands',
		Slug: 'south-georgia-and-the-south-sandwich-islands',
		ISO2: 'GS',
	},
	{
		Country: 'Bahamas',
		Slug: 'bahamas',
		ISO2: 'BS',
	},
	{
		Country: 'Mozambique',
		Slug: 'mozambique',
		ISO2: 'MZ',
	},
	{
		Country: 'Nicaragua',
		Slug: 'nicaragua',
		ISO2: 'NI',
	},
	{
		Country: 'Norway',
		Slug: 'norway',
		ISO2: 'NO',
	},
	{
		Country: 'Burkina Faso',
		Slug: 'burkina-faso',
		ISO2: 'BF',
	},
	{
		Country: 'Guernsey',
		Slug: 'guernsey',
		ISO2: 'GG',
	},
	{
		Country: 'Palau',
		Slug: 'palau',
		ISO2: 'PW',
	},
	{
		Country: 'Solomon Islands',
		Slug: 'solomon-islands',
		ISO2: 'SB',
	},
	{
		Country: 'Yemen',
		Slug: 'yemen',
		ISO2: 'YE',
	},
	{
		Country: 'Malaysia',
		Slug: 'malaysia',
		ISO2: 'MY',
	},
	{
		Country: 'Senegal',
		Slug: 'senegal',
		ISO2: 'SN',
	},
	{
		Country: 'Djibouti',
		Slug: 'djibouti',
		ISO2: 'DJ',
	},
	{
		Country: 'Saint Helena',
		Slug: 'saint-helena',
		ISO2: 'SH',
	},
	{
		Country: 'Puerto Rico',
		Slug: 'puerto-rico',
		ISO2: 'PR',
	},
	{
		Country: 'Tuvalu',
		Slug: 'tuvalu',
		ISO2: 'TV',
	},
	{
		Country: 'Saint Kitts and Nevis',
		Slug: 'saint-kitts-and-nevis',
		ISO2: 'KN',
	},
	{
		Country: 'Cayman Islands',
		Slug: 'cayman-islands',
		ISO2: 'KY',
	},
	{
		Country: 'Iceland',
		Slug: 'iceland',
		ISO2: 'IS',
	},
	{
		Country: 'Liberia',
		Slug: 'liberia',
		ISO2: 'LR',
	},
	{
		Country: 'Malta',
		Slug: 'malta',
		ISO2: 'MT',
	},
	{
		Country: 'New Caledonia',
		Slug: 'new-caledonia',
		ISO2: 'NC',
	},
	{
		Country: 'New Zealand',
		Slug: 'new-zealand',
		ISO2: 'NZ',
	},
	{
		Country: 'Bhutan',
		Slug: 'bhutan',
		ISO2: 'BT',
	},
	{
		Country: 'Egypt',
		Slug: 'egypt',
		ISO2: 'EG',
	},
	{
		Country: 'Gambia',
		Slug: 'gambia',
		ISO2: 'GM',
	},
	{
		Country: 'Honduras',
		Slug: 'honduras',
		ISO2: 'HN',
	},
	{
		Country: 'El Salvador',
		Slug: 'el-salvador',
		ISO2: 'SV',
	},
	{
		Country: 'Guatemala',
		Slug: 'guatemala',
		ISO2: 'GT',
	},
	{
		Country: 'Marshall Islands',
		Slug: 'marshall-islands',
		ISO2: 'MH',
	},
	{
		Country: 'Netherlands Antilles',
		Slug: 'netherlands-antilles',
		ISO2: 'AN',
	},
	{
		Country: 'Syrian Arab Republic (Syria)',
		Slug: 'syria',
		ISO2: 'SY',
	},
	{
		Country: 'Zambia',
		Slug: 'zambia',
		ISO2: 'ZM',
	},
	{
		Country: 'Ireland',
		Slug: 'ireland',
		ISO2: 'IE',
	},
	{
		Country: 'Vanuatu',
		Slug: 'vanuatu',
		ISO2: 'VU',
	},
	{
		Country: 'Comoros',
		Slug: 'comoros',
		ISO2: 'KM',
	},
	{
		Country: 'Congo (Brazzaville)',
		Slug: 'congo-brazzaville',
		ISO2: 'CG',
	},
	{
		Country: 'Madagascar',
		Slug: 'madagascar',
		ISO2: 'MG',
	},
	{
		Country: 'Papua New Guinea',
		Slug: 'papua-new-guinea',
		ISO2: 'PG',
	},
	{
		Country: 'Philippines',
		Slug: 'philippines',
		ISO2: 'PH',
	},
	{
		Country: 'Wallis and Futuna Islands',
		Slug: 'wallis-and-futuna-islands',
		ISO2: 'WF',
	},
	{
		Country: 'French Southern Territories',
		Slug: 'french-southern-territories',
		ISO2: 'TF',
	},
	{
		Country: 'Guinea',
		Slug: 'guinea',
		ISO2: 'GN',
	},
	{
		Country: 'Japan',
		Slug: 'japan',
		ISO2: 'JP',
	},
	{
		Country: 'Singapore',
		Slug: 'singapore',
		ISO2: 'SG',
	},
	{
		Country: 'Belarus',
		Slug: 'belarus',
		ISO2: 'BY',
	},
	{
		Country: 'Colombia',
		Slug: 'colombia',
		ISO2: 'CO',
	},
	{
		Country: 'Korea (North)',
		Slug: 'korea-north',
		ISO2: 'KP',
	},
	{
		Country: 'Bouvet Island',
		Slug: 'bouvet-island',
		ISO2: 'BV',
	},
	{
		Country: 'Ghana',
		Slug: 'ghana',
		ISO2: 'GH',
	},
	{
		Country: 'Oman',
		Slug: 'oman',
		ISO2: 'OM',
	},
	{
		Country: 'Tanzania, United Republic of',
		Slug: 'tanzania',
		ISO2: 'TZ',
	},
	{
		Country: 'Cape Verde',
		Slug: 'cape-verde',
		ISO2: 'CV',
	},
	{
		Country: 'Antigua and Barbuda',
		Slug: 'antigua-and-barbuda',
		ISO2: 'AG',
	},
	{
		Country: 'Chad',
		Slug: 'chad',
		ISO2: 'TD',
	},
	{
		Country: 'Saint-Martin (French part)',
		Slug: 'saint-martin-french-part',
		ISO2: 'MF',
	},
	{
		Country: 'Niue',
		Slug: 'niue',
		ISO2: 'NU',
	},
	{
		Country: 'Algeria',
		Slug: 'algeria',
		ISO2: 'DZ',
	},
	{
		Country: 'Bahrain',
		Slug: 'bahrain',
		ISO2: 'BH',
	},
	{
		Country: 'Bangladesh',
		Slug: 'bangladesh',
		ISO2: 'BD',
	},
	{
		Country: 'Christmas Island',
		Slug: 'christmas-island',
		ISO2: 'CX',
	},
	{
		Country: 'Equatorial Guinea',
		Slug: 'equatorial-guinea',
		ISO2: 'GQ',
	},
	{
		Country: 'Morocco',
		Slug: 'morocco',
		ISO2: 'MA',
	},
	{
		Country: 'Azerbaijan',
		Slug: 'azerbaijan',
		ISO2: 'AZ',
	},
	{
		Country: 'Congo (Kinshasa)',
		Slug: 'congo-kinshasa',
		ISO2: 'CD',
	},
	{
		Country: 'Jordan',
		Slug: 'jordan',
		ISO2: 'JO',
	},
	{
		Country: 'Korea (South)',
		Slug: 'korea-south',
		ISO2: 'KR',
	},
	{
		Country: 'Sierra Leone',
		Slug: 'sierra-leone',
		ISO2: 'SL',
	},
	{
		Country: 'Western Sahara',
		Slug: 'western-sahara',
		ISO2: 'EH',
	},
	{
		Country: 'American Samoa',
		Slug: 'american-samoa',
		ISO2: 'AS',
	},
	{
		Country: 'Eritrea',
		Slug: 'eritrea',
		ISO2: 'ER',
	},
	{
		Country: 'Ethiopia',
		Slug: 'ethiopia',
		ISO2: 'ET',
	},
	{
		Country: 'Kenya',
		Slug: 'kenya',
		ISO2: 'KE',
	},
	{
		Country: 'Lithuania',
		Slug: 'lithuania',
		ISO2: 'LT',
	},
	{
		Country: 'Serbia',
		Slug: 'serbia',
		ISO2: 'RS',
	},
	{
		Country: 'Guam',
		Slug: 'guam',
		ISO2: 'GU',
	},
	{
		Country: 'Lesotho',
		Slug: 'lesotho',
		ISO2: 'LS',
	},
	{
		Country: 'Finland',
		Slug: 'finland',
		ISO2: 'FI',
	},
	{
		Country: 'Luxembourg',
		Slug: 'luxembourg',
		ISO2: 'LU',
	},
	{
		Country: 'Svalbard and Jan Mayen Islands',
		Slug: 'svalbard-and-jan-mayen-islands',
		ISO2: 'SJ',
	},
	{
		Country: 'Turkmenistan',
		Slug: 'turkmenistan',
		ISO2: 'TM',
	},
	{
		Country: 'United States of America',
		Slug: 'united-states',
		ISO2: 'US',
	},
	{
		Country: 'Angola',
		Slug: 'angola',
		ISO2: 'AO',
	},
	{
		Country: 'Brunei Darussalam',
		Slug: 'brunei',
		ISO2: 'BN',
	},
	{
		Country: 'Heard and Mcdonald Islands',
		Slug: 'heard-and-mcdonald-islands',
		ISO2: 'HM',
	},
	{
		Country: 'Nauru',
		Slug: 'nauru',
		ISO2: 'NR',
	},
	{
		Country: 'Central African Republic',
		Slug: 'central-african-republic',
		ISO2: 'CF',
	},
	{
		Country: 'French Polynesia',
		Slug: 'french-polynesia',
		ISO2: 'PF',
	},
	{
		Country: 'Mayotte',
		Slug: 'mayotte',
		ISO2: 'YT',
	},
	{
		Country: 'Lebanon',
		Slug: 'lebanon',
		ISO2: 'LB',
	},
	{
		Country: 'Montenegro',
		Slug: 'montenegro',
		ISO2: 'ME',
	},
	{
		Country: 'Paraguay',
		Slug: 'paraguay',
		ISO2: 'PY',
	},
	{
		Country: 'Qatar',
		Slug: 'qatar',
		ISO2: 'QA',
	},
	{
		Country: 'Saint Lucia',
		Slug: 'saint-lucia',
		ISO2: 'LC',
	},
	{
		Country: 'Tajikistan',
		Slug: 'tajikistan',
		ISO2: 'TJ',
	},
	{
		Country: 'Cook Islands',
		Slug: 'cook-islands',
		ISO2: 'CK',
	},
	{
		Country: 'Greenland',
		Slug: 'greenland',
		ISO2: 'GL',
	},
	{
		Country: 'Mali',
		Slug: 'mali',
		ISO2: 'ML',
	},
	{
		Country: 'Togo',
		Slug: 'togo',
		ISO2: 'TG',
	},
	{
		Country: 'Chile',
		Slug: 'chile',
		ISO2: 'CL',
	},
	{
		Country: 'ALA Aland Islands',
		Slug: 'ala-aland-islands',
		ISO2: 'AX',
	},
	{
		Country: 'Indonesia',
		Slug: 'indonesia',
		ISO2: 'ID',
	},
	{
		Country: 'Isle of Man',
		Slug: 'isle-of-man',
		ISO2: 'IM',
	},
	{
		Country: 'Saudi Arabia',
		Slug: 'saudi-arabia',
		ISO2: 'SA',
	},
	{
		Country: 'Fiji',
		Slug: 'fiji',
		ISO2: 'FJ',
	},
	{
		Country: 'French Guiana',
		Slug: 'french-guiana',
		ISO2: 'GF',
	},
	{
		Country: 'Israel',
		Slug: 'israel',
		ISO2: 'IL',
	},
	{
		Country: 'Micronesia, Federated States of',
		Slug: 'micronesia',
		ISO2: 'FM',
	},
	{
		Country: 'Tonga',
		Slug: 'tonga',
		ISO2: 'TO',
	},
	{
		Country: 'Viet Nam',
		Slug: 'vietnam',
		ISO2: 'VN',
	},
	{
		Country: 'Bulgaria',
		Slug: 'bulgaria',
		ISO2: 'BG',
	},
	{
		Country: 'Dominica',
		Slug: 'dominica',
		ISO2: 'DM',
	},
	{
		Country: 'Saint Vincent and Grenadines',
		Slug: 'saint-vincent-and-the-grenadines',
		ISO2: 'VC',
	},
	{
		Country: 'South Africa',
		Slug: 'south-africa',
		ISO2: 'ZA',
	},
	{
		Country: 'Albania',
		Slug: 'albania',
		ISO2: 'AL',
	},
	{
		Country: 'Cocos (Keeling) Islands',
		Slug: 'cocos-keeling-islands',
		ISO2: 'CC',
	},
	{
		Country: 'Costa Rica',
		Slug: 'costa-rica',
		ISO2: 'CR',
	},
	{
		Country: 'Libya',
		Slug: 'libya',
		ISO2: 'LY',
	},
	{
		Country: 'Turkey',
		Slug: 'turkey',
		ISO2: 'TR',
	},
	{
		Country: 'Sao Tome and Principe',
		Slug: 'sao-tome-and-principe',
		ISO2: 'ST',
	},
	{
		Country: 'Antarctica',
		Slug: 'antarctica',
		ISO2: 'AQ',
	},
	{
		Country: 'Georgia',
		Slug: 'georgia',
		ISO2: 'GE',
	},
	{
		Country: 'Palestinian Territory',
		Slug: 'palestine',
		ISO2: 'PS',
	},
	{
		Country: 'Samoa',
		Slug: 'samoa',
		ISO2: 'WS',
	},
	{
		Country: 'Brazil',
		Slug: 'brazil',
		ISO2: 'BR',
	},
	{
		Country: 'Gibraltar',
		Slug: 'gibraltar',
		ISO2: 'GI',
	},
	{
		Country: 'Mauritius',
		Slug: 'mauritius',
		ISO2: 'MU',
	},
	{
		Country: 'Zimbabwe',
		Slug: 'zimbabwe',
		ISO2: 'ZW',
	},
	{
		Country: 'Rwanda',
		Slug: 'rwanda',
		ISO2: 'RW',
	},
	{
		Country: 'United Arab Emirates',
		Slug: 'united-arab-emirates',
		ISO2: 'AE',
	},
	{
		Country: 'Cyprus',
		Slug: 'cyprus',
		ISO2: 'CY',
	},
	{
		Country: 'Falkland Islands (Malvinas)',
		Slug: 'falkland-islands-malvinas',
		ISO2: 'FK',
	},
	{
		Country: 'Guadeloupe',
		Slug: 'guadeloupe',
		ISO2: 'GP',
	},
	{
		Country: 'Haiti',
		Slug: 'haiti',
		ISO2: 'HT',
	},
	{
		Country: 'Austria',
		Slug: 'austria',
		ISO2: 'AT',
	},
	{
		Country: 'Germany',
		Slug: 'germany',
		ISO2: 'DE',
	},
	{
		Country: 'Jamaica',
		Slug: 'jamaica',
		ISO2: 'JM',
	},
	{
		Country: 'Nigeria',
		Slug: 'nigeria',
		ISO2: 'NG',
	},
	{
		Country: 'British Virgin Islands',
		Slug: 'british-virgin-islands',
		ISO2: 'VG',
	},
	{
		Country: 'Iraq',
		Slug: 'iraq',
		ISO2: 'IQ',
	},
	{
		Country: 'Nepal',
		Slug: 'nepal',
		ISO2: 'NP',
	},
	{
		Country: 'Russian Federation',
		Slug: 'russia',
		ISO2: 'RU',
	},
	{
		Country: 'Saint-Barthélemy',
		Slug: 'saint-barthélemy',
		ISO2: 'BL',
	},
	{
		Country: 'South Sudan',
		Slug: 'south-sudan',
		ISO2: 'SS',
	},
	{
		Country: 'Botswana',
		Slug: 'botswana',
		ISO2: 'BW',
	},
	{
		Country: 'Romania',
		Slug: 'romania',
		ISO2: 'RO',
	},
	{
		Country: 'Swaziland',
		Slug: 'swaziland',
		ISO2: 'SZ',
	},
	{
		Country: 'France',
		Slug: 'france',
		ISO2: 'FR',
	},
	{
		Country: 'Guinea-Bissau',
		Slug: 'guinea-bissau',
		ISO2: 'GW',
	},
	{
		Country: 'Afghanistan',
		Slug: 'afghanistan',
		ISO2: 'AF',
	},
	{
		Country: 'Canada',
		Slug: 'canada',
		ISO2: 'CA',
	},
	{
		Country: 'Czech Republic',
		Slug: 'czech-republic',
		ISO2: 'CZ',
	},
	{
		Country: 'Faroe Islands',
		Slug: 'faroe-islands',
		ISO2: 'FO',
	},
	{
		Country: 'Guyana',
		Slug: 'guyana',
		ISO2: 'GY',
	},
	{
		Country: 'Peru',
		Slug: 'peru',
		ISO2: 'PE',
	},
	{
		Country: 'Slovakia',
		Slug: 'slovakia',
		ISO2: 'SK',
	},
	{
		Country: 'Thailand',
		Slug: 'thailand',
		ISO2: 'TH',
	},
	{
		Country: 'United Kingdom',
		Slug: 'united-kingdom',
		ISO2: 'GB',
	},
	{
		Country: 'Argentina',
		Slug: 'argentina',
		ISO2: 'AR',
	},
	{
		Country: 'Monaco',
		Slug: 'monaco',
		ISO2: 'MC',
	},
	{
		Country: 'Netherlands',
		Slug: 'netherlands',
		ISO2: 'NL',
	},
	{
		Country: 'Switzerland',
		Slug: 'switzerland',
		ISO2: 'CH',
	},
	{
		Country: 'Sudan',
		Slug: 'sudan',
		ISO2: 'SD',
	},
	{
		Country: 'Trinidad and Tobago',
		Slug: 'trinidad-and-tobago',
		ISO2: 'TT',
	},
	{
		Country: 'Bolivia',
		Slug: 'bolivia',
		ISO2: 'BO',
	},
	{
		Country: 'China',
		Slug: 'china',
		ISO2: 'CN',
	},
	{
		Country: 'Dominican Republic',
		Slug: 'dominican-republic',
		ISO2: 'DO',
	},
	{
		Country: 'Grenada',
		Slug: 'grenada',
		ISO2: 'GD',
	},
	{
		Country: 'Kazakhstan',
		Slug: 'kazakhstan',
		ISO2: 'KZ',
	},
	{
		Country: 'Ukraine',
		Slug: 'ukraine',
		ISO2: 'UA',
	},
	{
		Country: 'Belgium',
		Slug: 'belgium',
		ISO2: 'BE',
	},
	{
		Country: "Côte d'Ivoire",
		Slug: 'cote-divoire',
		ISO2: 'CI',
	},
	{
		Country: 'Hong Kong, SAR China',
		Slug: 'hong-kong-sar-china',
		ISO2: 'HK',
	},
	{
		Country: 'Mongolia',
		Slug: 'mongolia',
		ISO2: 'MN',
	},
	{
		Country: 'Hungary',
		Slug: 'hungary',
		ISO2: 'HU',
	},
	{
		Country: 'Tokelau',
		Slug: 'tokelau',
		ISO2: 'TK',
	},
	{
		Country: 'Anguilla',
		Slug: 'anguilla',
		ISO2: 'AI',
	},
	{
		Country: 'Malawi',
		Slug: 'malawi',
		ISO2: 'MW',
	},
	{
		Country: 'Northern Mariana Islands',
		Slug: 'northern-mariana-islands',
		ISO2: 'MP',
	},
	{
		Country: 'Venezuela (Bolivarian Republic)',
		Slug: 'venezuela',
		ISO2: 'VE',
	},
	{
		Country: 'Andorra',
		Slug: 'andorra',
		ISO2: 'AD',
	},
	{
		Country: 'Aruba',
		Slug: 'aruba',
		ISO2: 'AW',
	},
	{
		Country: 'Maldives',
		Slug: 'maldives',
		ISO2: 'MV',
	},
	{
		Country: 'Turks and Caicos Islands',
		Slug: 'turks-and-caicos-islands',
		ISO2: 'TC',
	},
	{
		Country: 'Benin',
		Slug: 'benin',
		ISO2: 'BJ',
	},
	{
		Country: 'Bosnia and Herzegovina',
		Slug: 'bosnia-and-herzegovina',
		ISO2: 'BA',
	},
	{
		Country: 'Panama',
		Slug: 'panama',
		ISO2: 'PA',
	},
	{
		Country: 'Suriname',
		Slug: 'suriname',
		ISO2: 'SR',
	},
	{
		Country: 'Mexico',
		Slug: 'mexico',
		ISO2: 'MX',
	},
	{
		Country: 'Croatia',
		Slug: 'croatia',
		ISO2: 'HR',
	},
	{
		Country: 'Ecuador',
		Slug: 'ecuador',
		ISO2: 'EC',
	},
	{
		Country: 'Kyrgyzstan',
		Slug: 'kyrgyzstan',
		ISO2: 'KG',
	},
	{
		Country: 'Namibia',
		Slug: 'namibia',
		ISO2: 'NA',
	},
	{
		Country: 'US Minor Outlying Islands',
		Slug: 'us-minor-outlying-islands',
		ISO2: 'UM',
	},
	{
		Country: 'Estonia',
		Slug: 'estonia',
		ISO2: 'EE',
	},
	{
		Country: 'Kiribati',
		Slug: 'kiribati',
		ISO2: 'KI',
	},
	{
		Country: 'Slovenia',
		Slug: 'slovenia',
		ISO2: 'SI',
	},
	{
		Country: 'Republic of Kosovo',
		Slug: 'kosovo',
		ISO2: 'XK',
	},
	{
		Country: 'Sweden',
		Slug: 'sweden',
		ISO2: 'SE',
	},
];

$(document).ready(async () => {
	// Get data from API
	if (
		sessionStorage.getItem('wpCovidAPIDataExpired') >
			new Date().getTime() &&
		(false || null) != sessionStorage.getItem('wpCovidUpdateAPIData')
	) {
		apiData = JSON.parse(sessionStorage.getItem('wpCovidUpdateAPIData'));
	} else {
		apiData = await getAPIData();

		sessionStorage.setItem('wpCovidUpdateAPIData', JSON.stringify(apiData));

		let wpCovidAPIDataExpired = new Date();
		wpCovidAPIDataExpired.setMinutes(
			wpCovidAPIDataExpired.getMinutes() + 10
		);
		sessionStorage.setItem(
			'wpCovidAPIDataExpired',
			wpCovidAPIDataExpired.getTime()
		);
	}

	// Parent div
	$parent = $('#wp-covid-update.widget');

	$singleCountry = $parent.find('.country .country--single');
	$global = $parent.find('.country .country--global');

	countryList
		.sort((a, b) => (a.Country > b.Country ? 1 : -1))
		.forEach((country) => {
			$singleCountry
				.find('[name ="country"]')
				.append(
					'<option value="' +
						country.ISO2 +
						'">' +
						country.Country +
						'</option>'
				);
		});

	$singleCountry.find('[name ="country"]').on('change', () => {
		showData($(event.target).val());
		$singleCountry.addClass('active');
		$global.removeClass('active');
	});

	showData('Global');

	$global.on('click', () => {
		showData('Global');
		$singleCountry.removeClass('active');
		$(event.target).addClass('active');
		$singleCountry.find('[name ="country"]').val('');
	});
});

function getAPIData() {
	console.log('Getting API data...');
	return new Promise((resolve) => {
		http.onreadystatechange = function () {
			if (this.readyState == 4) {
				if (this.status == 200) {
					console.log('Data loaded.');
					resolve(JSON.parse(this.responseText));
				} else {
					console.log('API Error!');
					resolve(false);
				}
			}
		};

		http.open('GET', 'https://api.covid19api.com/summary', true);
		http.send();
	});
}

async function showData(CountryCode) {
	if ('Global' != CountryCode) {
		countryData = apiData.Countries.filter((data) => {
			return data.CountryCode == CountryCode;
		})[0];

		if (null == $singleCountry.find('[name ="country"]').val()) {
			$singleCountry.find('[name ="country"]').val(CountryCode);
		}
	} else {
		countryData = apiData.Global;
	}

	//Data Grid
	const $dataGrid = $parent.find('.data-grid');

	// Death
	let $death = $($dataGrid).children('div.death');
	$death.find('.new .data--count').html(countryData.NewDeaths); // New
	$death.find('.total .data--count').html(countryData.TotalDeaths); // Total

	// Confirmed
	let $confirmed = $($dataGrid).children('div.confirmed');
	$confirmed.find('.new .data--count').html(countryData.NewConfirmed); // New
	$confirmed.find('.total .data--count').html(countryData.TotalConfirmed); // Total

	// recovered
	let $recovered = $($dataGrid).children('div.recovered');
	$recovered.find('.new .data--count').html(countryData.NewRecovered); // New
	$recovered.find('.total .data--count').html(countryData.TotalRecovered); // Total

	$parent
		.find('.info .update-date .date')
		.html(
			new Date(countryData.Date || apiData.Date).toLocaleString('en-US')
		);
}
