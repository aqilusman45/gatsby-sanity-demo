const COUNTRIES = [
  {
    title: 'Afghanistan',
    value: 'Afghanistan',
  },
  {
    title: 'Åland Islands',
    value: 'Åland Islands',
  },
  {
    title: 'Albania',
    value: 'Albania',
  },
  {
    title: 'Algeria',
    value: 'Algeria',
  },
  {
    title: 'American Samoa',
    value: 'American Samoa',
  },
  {
    title: 'AndorrA',
    value: 'AndorrA',
  },
  {
    title: 'Angola',
    value: 'Angola',
  },
  {
    title: 'Anguilla',
    value: 'Anguilla',
  },
  {
    title: 'Antarctica',
    value: 'Antarctica',
  },
  {
    title: 'Antigua and Barbuda',
    value: 'Antigua and Barbuda',
  },
  {
    title: 'Argentina',
    value: 'Argentina',
  },
  {
    title: 'Armenia',
    value: 'Armenia',
  },
  {
    title: 'Aruba',
    value: 'Aruba',
  },
  {
    title: 'Australia',
    value: 'Australia',
  },
  {
    title: 'Austria',
    value: 'Austria',
  },
  {
    title: 'Azerbaijan',
    value: 'Azerbaijan',
  },
  {
    title: 'Bahamas',
    value: 'Bahamas',
  },
  {
    title: 'Bahrain',
    value: 'Bahrain',
  },
  {
    title: 'Bangladesh',
    value: 'Bangladesh',
  },
  {
    title: 'Barbados',
    value: 'Barbados',
  },
  {
    title: 'Belarus',
    value: 'Belarus',
  },
  {
    title: 'Belgium',
    value: 'Belgium',
  },
  {
    title: 'Belize',
    value: 'Belize',
  },
  {
    title: 'Benin',
    value: 'Benin',
  },
  {
    title: 'Bermuda',
    value: 'Bermuda',
  },
  {
    title: 'Bhutan',
    value: 'Bhutan',
  },
  {
    title: 'Bolivia',
    value: 'Bolivia',
  },
  {
    title: 'Bosnia and Herzegovina',
    value: 'Bosnia and Herzegovina',
  },
  {
    title: 'Botswana',
    value: 'Botswana',
  },
  {
    title: 'Bouvet Island',
    value: 'Bouvet Island',
  },
  {
    title: 'Brazil',
    value: 'Brazil',
  },
  {
    title: 'British Indian Ocean Territory',
    value: 'British Indian Ocean Territory',
  },
  {
    title: 'Brunei Darussalam',
    value: 'Brunei Darussalam',
  },
  {
    title: 'Bulgaria',
    value: 'Bulgaria',
  },
  {
    title: 'Burkina Faso',
    value: 'Burkina Faso',
  },
  {
    title: 'Burundi',
    value: 'Burundi',
  },
  {
    title: 'Cambodia',
    value: 'Cambodia',
  },
  {
    title: 'Cameroon',
    value: 'Cameroon',
  },
  {
    title: 'Canada',
    value: 'Canada',
  },
  {
    title: 'Cape Verde',
    value: 'Cape Verde',
  },
  {
    title: 'Cayman Islands',
    value: 'Cayman Islands',
  },
  {
    title: 'Central African Republic',
    value: 'Central African Republic',
  },
  {
    title: 'Chad',
    value: 'Chad',
  },
  {
    title: 'Chile',
    value: 'Chile',
  },
  {
    title: 'China',
    value: 'China',
  },
  {
    title: 'Christmas Island',
    value: 'Christmas Island',
  },
  {
    title: 'Cocos (Keeling) Islands',
    value: 'Cocos (Keeling) Islands',
  },
  {
    title: 'Colombia',
    value: 'Colombia',
  },
  {
    title: 'Comoros',
    value: 'Comoros',
  },
  {
    title: 'Congo',
    value: 'Congo',
  },
  {
    title: 'Congo, The Democratic Republic of the',
    value: 'Congo, The Democratic Republic of the',
  },
  {
    title: 'Cook Islands',
    value: 'Cook Islands',
  },
  {
    title: 'Costa Rica',
    value: 'Costa Rica',
  },
  {
    title: "Cote D'Ivoire",
    value: "Cote D'Ivoire",
  },
  {
    title: 'Croatia',
    value: 'Croatia',
  },
  {
    title: 'Cuba',
    value: 'Cuba',
  },
  {
    title: 'Cyprus',
    value: 'Cyprus',
  },
  {
    title: 'Czech Republic',
    value: 'Czech Republic',
  },
  {
    title: 'Denmark',
    value: 'Denmark',
  },
  {
    title: 'Djibouti',
    value: 'Djibouti',
  },
  {
    title: 'Dominica',
    value: 'Dominica',
  },
  {
    title: 'Dominican Republic',
    value: 'Dominican Republic',
  },
  {
    title: 'Ecuador',
    value: 'Ecuador',
  },
  {
    title: 'Egypt',
    value: 'Egypt',
  },
  {
    title: 'El Salvador',
    value: 'El Salvador',
  },
  {
    title: 'Equatorial Guinea',
    value: 'Equatorial Guinea',
  },
  {
    title: 'Eritrea',
    value: 'Eritrea',
  },
  {
    title: 'Estonia',
    value: 'Estonia',
  },
  {
    title: 'Ethiopia',
    value: 'Ethiopia',
  },
  {
    title: 'Falkland Islands (Malvinas)',
    value: 'Falkland Islands (Malvinas)',
  },
  {
    title: 'Faroe Islands',
    value: 'Faroe Islands',
  },
  {
    title: 'Fiji',
    value: 'Fiji',
  },
  {
    title: 'Finland',
    value: 'Finland',
  },
  {
    title: 'France',
    value: 'France',
  },
  {
    title: 'French Guiana',
    value: 'French Guiana',
  },
  {
    title: 'French Polynesia',
    value: 'French Polynesia',
  },
  {
    title: 'French Southern Territories',
    value: 'French Southern Territories',
  },
  {
    title: 'Gabon',
    value: 'Gabon',
  },
  {
    title: 'Gambia',
    value: 'Gambia',
  },
  {
    title: 'Georgia',
    value: 'Georgia',
  },
  {
    title: 'Germany',
    value: 'Germany',
  },
  {
    title: 'Ghana',
    value: 'Ghana',
  },
  {
    title: 'Gibraltar',
    value: 'Gibraltar',
  },
  {
    title: 'Greece',
    value: 'Greece',
  },
  {
    title: 'Greenland',
    value: 'Greenland',
  },
  {
    title: 'Grenada',
    value: 'Grenada',
  },
  {
    title: 'Guadeloupe',
    value: 'Guadeloupe',
  },
  {
    title: 'Guam',
    value: 'Guam',
  },
  {
    title: 'Guatemala',
    value: 'Guatemala',
  },
  {
    title: 'Guernsey',
    value: 'Guernsey',
  },
  {
    title: 'Guinea',
    value: 'Guinea',
  },
  {
    title: 'Guinea-Bissau',
    value: 'Guinea-Bissau',
  },
  {
    title: 'Guyana',
    value: 'Guyana',
  },
  {
    title: 'Haiti',
    value: 'Haiti',
  },
  {
    title: 'Heard Island and Mcdonald Islands',
    value: 'Heard Island and Mcdonald Islands',
  },
  {
    title: 'Holy See (Vatican City State)',
    value: 'Holy See (Vatican City State)',
  },
  {
    title: 'Honduras',
    value: 'Honduras',
  },
  {
    title: 'Hong Kong',
    value: 'Hong Kong',
  },
  {
    title: 'Hungary',
    value: 'Hungary',
  },
  {
    title: 'Iceland',
    value: 'Iceland',
  },
  {
    title: 'India',
    value: 'India',
  },
  {
    title: 'Indonesia',
    value: 'Indonesia',
  },
  {
    title: 'Iran, Islamic Republic Of',
    value: 'Iran, Islamic Republic Of',
  },
  {
    title: 'Iraq',
    value: 'Iraq',
  },
  {
    title: 'Ireland',
    value: 'Ireland',
  },
  {
    title: 'Isle of Man',
    value: 'Isle of Man',
  },
  {
    title: 'Israel',
    value: 'Israel',
  },
  {
    title: 'Italy',
    value: 'Italy',
  },
  {
    title: 'Jamaica',
    value: 'Jamaica',
  },
  {
    title: 'Japan',
    value: 'Japan',
  },
  {
    title: 'Jersey',
    value: 'Jersey',
  },
  {
    title: 'Jordan',
    value: 'Jordan',
  },
  {
    title: 'Kazakhstan',
    value: 'Kazakhstan',
  },
  {
    title: 'Kenya',
    value: 'Kenya',
  },
  {
    title: 'Kiribati',
    value: 'Kiribati',
  },
  {
    title: "Korea, Democratic People's Republic of",
    value: "Korea, Democratic People's Republic of",
  },
  {
    title: 'Korea, Republic of',
    value: 'Korea, Republic of',
  },
  {
    title: 'Kuwait',
    value: 'Kuwait',
  },
  {
    title: 'Kyrgyzstan',
    value: 'Kyrgyzstan',
  },
  {
    title: "Lao People's Democratic Republic",
    value: "Lao People's Democratic Republic",
  },
  {
    title: 'Latvia',
    value: 'Latvia',
  },
  {
    title: 'Lebanon',
    value: 'Lebanon',
  },
  {
    title: 'Lesotho',
    value: 'Lesotho',
  },
  {
    title: 'Liberia',
    value: 'Liberia',
  },
  {
    title: 'Libyan Arab Jamahiriya',
    value: 'Libyan Arab Jamahiriya',
  },
  {
    title: 'Liechtenstein',
    value: 'Liechtenstein',
  },
  {
    title: 'Lithuania',
    value: 'Lithuania',
  },
  {
    title: 'Luxembourg',
    value: 'Luxembourg',
  },
  {
    title: 'Macao',
    value: 'Macao',
  },
  {
    title: 'Macedonia, The Former Yugoslav Republic of',
    value: 'Macedonia, The Former Yugoslav Republic of',
  },
  {
    title: 'Madagascar',
    value: 'Madagascar',
  },
  {
    title: 'Malawi',
    value: 'Malawi',
  },
  {
    title: 'Malaysia',
    value: 'Malaysia',
  },
  {
    title: 'Maldives',
    value: 'Maldives',
  },
  {
    title: 'Mali',
    value: 'Mali',
  },
  {
    title: 'Malta',
    value: 'Malta',
  },
  {
    title: 'Marshall Islands',
    value: 'Marshall Islands',
  },
  {
    title: 'Martinique',
    value: 'Martinique',
  },
  {
    title: 'Mauritania',
    value: 'Mauritania',
  },
  {
    title: 'Mauritius',
    value: 'Mauritius',
  },
  {
    title: 'Mayotte',
    value: 'Mayotte',
  },
  {
    title: 'Mexico',
    value: 'Mexico',
  },
  {
    title: 'Micronesia, Federated States of',
    value: 'Micronesia, Federated States of',
  },
  {
    title: 'Moldova, Republic of',
    value: 'Moldova, Republic of',
  },
  {
    title: 'Monaco',
    value: 'Monaco',
  },
  {
    title: 'Mongolia',
    value: 'Mongolia',
  },
  {
    title: 'Montserrat',
    value: 'Montserrat',
  },
  {
    title: 'Morocco',
    value: 'Morocco',
  },
  {
    title: 'Mozambique',
    value: 'Mozambique',
  },
  {
    title: 'Myanmar',
    value: 'Myanmar',
  },
  {
    title: 'Namibia',
    value: 'Namibia',
  },
  {
    title: 'Nauru',
    value: 'Nauru',
  },
  {
    title: 'Nepal',
    value: 'Nepal',
  },
  {
    title: 'Netherlands',
    value: 'Netherlands',
  },
  {
    title: 'Netherlands Antilles',
    value: 'Netherlands Antilles',
  },
  {
    title: 'New Caledonia',
    value: 'New Caledonia',
  },
  {
    title: 'New Zealand',
    value: 'New Zealand',
  },
  {
    title: 'Nicaragua',
    value: 'Nicaragua',
  },
  {
    title: 'Niger',
    value: 'Niger',
  },
  {
    title: 'Nigeria',
    value: 'Nigeria',
  },
  {
    title: 'Niue',
    value: 'Niue',
  },
  {
    title: 'Norfolk Island',
    value: 'Norfolk Island',
  },
  {
    title: 'Northern Mariana Islands',
    value: 'Northern Mariana Islands',
  },
  {
    title: 'Norway',
    value: 'Norway',
  },
  {
    title: 'Oman',
    value: 'Oman',
  },
  {
    title: 'Pakistan',
    value: 'Pakistan',
  },
  {
    title: 'Palau',
    value: 'Palau',
  },
  {
    title: 'Palestinian Territory, Occupied',
    value: 'Palestinian Territory, Occupied',
  },
  {
    title: 'Panama',
    value: 'Panama',
  },
  {
    title: 'Papua New Guinea',
    value: 'Papua New Guinea',
  },
  {
    title: 'Paraguay',
    value: 'Paraguay',
  },
  {
    title: 'Peru',
    value: 'Peru',
  },
  {
    title: 'Philippines',
    value: 'Philippines',
  },
  {
    title: 'Pitcairn',
    value: 'Pitcairn',
  },
  {
    title: 'Poland',
    value: 'Poland',
  },
  {
    title: 'Portugal',
    value: 'Portugal',
  },
  {
    title: 'Puerto Rico',
    value: 'Puerto Rico',
  },
  {
    title: 'Qatar',
    value: 'Qatar',
  },
  {
    title: 'Reunion',
    value: 'Reunion',
  },
  {
    title: 'Romania',
    value: 'Romania',
  },
  {
    title: 'Russian Federation',
    value: 'Russian Federation',
  },
  {
    title: 'RWANDA',
    value: 'RWANDA',
  },
  {
    title: 'Saint Helena',
    value: 'Saint Helena',
  },
  {
    title: 'Saint Kitts and Nevis',
    value: 'Saint Kitts and Nevis',
  },
  {
    title: 'Saint Lucia',
    value: 'Saint Lucia',
  },
  {
    title: 'Saint Pierre and Miquelon',
    value: 'Saint Pierre and Miquelon',
  },
  {
    title: 'Saint Vincent and the Grenadines',
    value: 'Saint Vincent and the Grenadines',
  },
  {
    title: 'Samoa',
    value: 'Samoa',
  },
  {
    title: 'San Marino',
    value: 'San Marino',
  },
  {
    title: 'Sao Tome and Principe',
    value: 'Sao Tome and Principe',
  },
  {
    title: 'Saudi Arabia',
    value: 'Saudi Arabia',
  },
  {
    title: 'Senegal',
    value: 'Senegal',
  },
  {
    title: 'Serbia and Montenegro',
    value: 'Serbia and Montenegro',
  },
  {
    title: 'Seychelles',
    value: 'Seychelles',
  },
  {
    title: 'Sierra Leone',
    value: 'Sierra Leone',
  },
  {
    title: 'Singapore',
    value: 'Singapore',
  },
  {
    title: 'Slovakia',
    value: 'Slovakia',
  },
  {
    title: 'Slovenia',
    value: 'Slovenia',
  },
  {
    title: 'Solomon Islands',
    value: 'Solomon Islands',
  },
  {
    title: 'Somalia',
    value: 'Somalia',
  },
  {
    title: 'South Africa',
    value: 'South Africa',
  },
  {
    title: 'South Georgia and the South Sandwich Islands',
    value: 'South Georgia and the South Sandwich Islands',
  },
  {
    title: 'Spain',
    value: 'Spain',
  },
  {
    title: 'Sri Lanka',
    value: 'Sri Lanka',
  },
  {
    title: 'Sudan',
    value: 'Sudan',
  },
  {
    title: 'Suriname',
    value: 'Suriname',
  },
  {
    title: 'Svalbard and Jan Mayen',
    value: 'Svalbard and Jan Mayen',
  },
  {
    title: 'Swaziland',
    value: 'Swaziland',
  },
  {
    title: 'Sweden',
    value: 'Sweden',
  },
  {
    title: 'Switzerland',
    value: 'Switzerland',
  },
  {
    title: 'Syrian Arab Republic',
    value: 'Syrian Arab Republic',
  },
  {
    title: 'Taiwan, Province of China',
    value: 'Taiwan, Province of China',
  },
  {
    title: 'Tajikistan',
    value: 'Tajikistan',
  },
  {
    title: 'Tanzania, United Republic of',
    value: 'Tanzania, United Republic of',
  },
  {
    title: 'Thailand',
    value: 'Thailand',
  },
  {
    title: 'Timor-Leste',
    value: 'Timor-Leste',
  },
  {
    title: 'Togo',
    value: 'Togo',
  },
  {
    title: 'Tokelau',
    value: 'Tokelau',
  },
  {
    title: 'Tonga',
    value: 'Tonga',
  },
  {
    title: 'Trinidad and Tobago',
    value: 'Trinidad and Tobago',
  },
  {
    title: 'Tunisia',
    value: 'Tunisia',
  },
  {
    title: 'Turkey',
    value: 'Turkey',
  },
  {
    title: 'Turkmenistan',
    value: 'Turkmenistan',
  },
  {
    title: 'Turks and Caicos Islands',
    value: 'Turks and Caicos Islands',
  },
  {
    title: 'Tuvalu',
    value: 'Tuvalu',
  },
  {
    title: 'Uganda',
    value: 'Uganda',
  },
  {
    title: 'Ukraine',
    value: 'Ukraine',
  },
  {
    title: 'United Arab Emirates',
    value: 'United Arab Emirates',
  },
  {
    title: 'United Kingdom',
    value: 'United Kingdom',
  },
  {
    title: 'United States',
    value: 'United States',
  },
  {
    title: 'United States Minor Outlying Islands',
    value: 'United States Minor Outlying Islands',
  },
  {
    title: 'Uruguay',
    value: 'Uruguay',
  },
  {
    title: 'Uzbekistan',
    value: 'Uzbekistan',
  },
  {
    title: 'Vanuatu',
    value: 'Vanuatu',
  },
  {
    title: 'Venezuela',
    value: 'Venezuela',
  },
  {
    title: 'Viet Nam',
    value: 'Viet Nam',
  },
  {
    title: 'Virgin Islands, British',
    value: 'Virgin Islands, British',
  },
  {
    title: 'Virgin Islands, U.S.',
    value: 'Virgin Islands, U.S.',
  },
  {
    title: 'Wallis and Futuna',
    value: 'Wallis and Futuna',
  },
  {
    title: 'Western Sahara',
    value: 'Western Sahara',
  },
  {
    title: 'Zambia',
    value: 'Zambia',
  },
  {
    title: 'Zambia',
    value: 'Zambia',
  },
  {
    title: 'Zimbabwe',
    value: 'Zimbabwe',
  },
]

export default {
  title: 'Testimonials Card',
  name: 'testimonialsCard',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Designation',
      name: 'designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'country',
      name: 'country',
      type: 'string',
      options: {
        list: [...COUNTRIES],
      },
    },
    {
      title: 'Project Summary',
      name: 'projectSummary',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Industry',
      name: 'industry',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Team Size',
      name: 'teamSize',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Duration',
      name: 'duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Budget',
      name: 'budget',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Technologies',
      title: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
