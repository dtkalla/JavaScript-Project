const codeNameMatch = [
    ["ABW","Aruba"],
    ["AFG","Afghanistan"],
    ["AGO","Angola"],
    ["AIA","Anguilla"],
    ["ALB","Albania"],
    ["AND","Andorra"],
    ["ARE","United Arab Emirates"],
    ["ARG","Argentina"],
    ["ARM","Armenia"],
    ["ASM","American Samoa"],
    ["ATG","Antigua and Barbuda"],
    ["AUS","Australia"],
    ["AUT","Austria"],
    ["AZE","Azerbaijan"],
    ["BDI","Burundi"],
    ["BEL","Belgium"],
    ["BEN","Benin"],
    ["BFA","Burkina Faso"],
    ["BGD","Bangladesh"],
    ["BGR","Bulgaria"],
    ["BHR","Bahrain"],
    ["BHS","Bahamas"],
    ["BIH","Bosnia and Herzegovina"],
    ["BLR","Belarus"],
    ["BLZ","Belize"],
    ["BMU","Bermuda"],
    ["BOL","Bolivia"],
    ["BRA","Brazil"],
    ["BRB","Barbados"],
    ["BRN","Brunei"],
    ["BTN","Bhutan"],
    ["BWA","Botswana"],
    ["CAF","Central African Republic"],
    ["CAN","Canada"],
    ["CHE","Switzerland"],
    ["CHI","Channel islands"],
    ["CHL","Chile"],
    ["CHN","China"],
    ["CIV","Côte d'Ivoire"],
    ["CMR","Cameroon"],
    ["COD","Democratic Republic of the Congo"],
    ["COG","Congo"],
    ["COK","Cook Islands"],
    ["COL","Colombia"],
    ["COM","Comoros"],
    ["CPV","Cabo Verde"],
    ["CRI","Costa Rica"],
    ["CUB","Cuba"],
    ["CUW","Curaçao"],
    ["CYM","Cayman Islands"],
    ["CYP","Cyprus"],
    ["CZE","Czechia"],
    ["DEU","Germany"],
    ["DJI","Djibouti"],
    ["DMA","Dominica"],
    ["DNK","Denmark"],
    ["DOM","Dominican Republic"],
    ["DZA","Algeria"],
    ["ECU","Ecuador"],
    ["EGY","Egypt"],
    ["ERI","Eritrea"],
    ["ESP","Spain"],
    ["EST","Estonia"],
    ["ETH","Ethiopia"],
    ["FIN","Finland"],
    ["FJI","Fiji"],
    ["FLK","Falkland Islands (Malvinas)"],
    ["FRA","France"],
    ["FRO","Faroe Islands"],
    ["FSM","Micronesia"],
    ["GAB","Gabon"],
    ["GBR","United Kingdom"],
    ["GEO","Georgia"],
    ["GHA","Ghana"],
    ["GIB","Gibraltar"],
    ["GIN","Guinea"],
    ["GLP","Guadeloupe"],
    ["GMB","Gambia"],
    ["GNB","Guinea-Bissau"],
    ["GNQ","Equatorial Guinea"],
    ["GRC","Greece"],
    ["GRD","Grenada"],
    ["GRL","Greenland"],
    ["GTM","Guatemala"],
    ["GUF","French Guiana"],
    ["GUM","Guam"],
    ["GUY","Guyana"],
    ["HKG","Hong Kong"],
    ["HND","Honduras"],
    ["HRV","Croatia"],
    ["HTI","Haiti"],
    ["HUN","Hungary"],
    ["IDN","Indonesia"],
    ["IMN","Isle of Man"],
    ["IND","India"],
    ["IRL","Ireland"],
    ["IRN","Iran"],
    ["IRQ","Iraq"],
    ["ISL","Iceland"],
    ["ISR","Israel"],
    ["ITA","Italy"],
    ["JAM","Jamaica"],
    ["JOR","Jordan"],
    ["JPN","Japan"],
    ["KAZ","Kazakhstan"],
    ["KEN","Kenya"],
    ["KGZ","Kyrgyzstan"],
    ["KHM","Cambodia"],
    ["KIR","Kiribati"],
    ["KNA","Saint Kitts and Nevis"],
    ["KOR","South Korea"],
    ["KWT","Kuwait"],
    ["LAO","Laos"],
    ["LBN","Lebanon"],
    ["LBR","Liberia"],
    ["LBY","Libya"],
    ["LCA","Saint Lucia"],
    ["LIE","Liechtenstein"],
    ["LKA","Sri Lanka"],
    ["LSO","Lesotho"],
    ["LTU","Lithuania"],
    ["LUX","Luxembourg"],
    ["LVA","Latvia"],
    ["MAC","Macao"],
    ["MAR","Morocco"],
    ["MCO","Monaco"],
    ["MDA","Moldova"],
    ["MDG","Madagascar"],
    ["MDV","Maldives"],
    ["ME1","Serbia and Montenegro"],
    ["MEX","Mexico"],
    ["MHL","Marshall Islands"],
    ["MKD","North Macedonia"],
    ["MLI","Mali"],
    ["MLT","Malta"],
    ["MMR","Myanmar"],
    ["MNE","Montenegro"],
    ["MNG","Mongolia"],
    ["MNP","Northern Mariana Islands"],
    ["MOZ","Mozambique"],
    ["MRT","Mauritania"],
    ["MTQ","Martinique"],
    ["MUS","Mauritius"],
    ["MWI","Malawi"],
    ["MYS","Malaysia"],
    ["MYT","Mayotte"],
    ["NAM","Namibia"],
    ["NCL","New Caledonia"],
    ["NER","Niger"],
    ["NGA","Nigeria"],
    ["NIC","Nicaragua"],
    ["NIU","Niue"],
    ["NLD","Netherlands"],
    ["NOR","Norway"],
    ["NPL","Nepal"],
    ["NRU","Nauru"],
    ["NZL","New Zealand"],
    ["OMN","Oman"],
    ["PAK","Pakistan"],
    ["PAN","Panama"],
    ["PER","Peru"],
    ["PHL","Philippines"],
    ["PLW","Palau"],
    ["PNG","Papua New Guinea"],
    ["POL","Poland"],
    ["PRI","Puerto Rico"],
    ["PRK","North Korea"],
    ["PRT","Portugal"],
    ["PRY","Paraguay"],
    ["PSE","Palestine"],
    ["PYF","French Polynesia"],
    ["QAT","Qatar"],
    ["REU","Reunion"],
    ["ROU","Romania"],
    ["RUS","Russia"],
    ["RWA","Rwanda"],
    ["SAU","Saudi Arabia"],
    ["SDF","Sudan"],
    ["SDN","Sudan"],
    ["SEN","Senegal"],
    ["SGP","Singapore"],
    ["SHN","Saint Helena"],
    ["SLB","Solomon Islands"],
    ["SLE","Sierra Leone"],
    ["SLV","El Salvador"],
    ["SMR","San Marino"],
    ["SOM","Somalia"],
    ["SPM","Saint Pierre and Miquelon"],
    ["SRB","Serbia"],
    ["SSD","South Sudan"],
    ["STP","Sao Tome and Principe"],
    ["SUR","Suriname"],
    ["SVK","Slovakia"],
    ["SVN","Slovenia"],
    ["SWE","Sweden"],
    ["SWZ","Eswatini"],
    ["SXM","Sint Maarten"],
    ["SYC","Seychelles"],
    ["SYR","Syria"],
    ["TCA","Turks and Caicos Islands"],
    ["TCD","Chad"],
    ["TGO","Togo"],
    ["THA","Thailand"],
    ["TJK","Tajikistan"],
    ["TKL","Tokelau"],
    ["TKM","Turkmenistan"],
    ["TLS","Timor-Leste"],
    ["TON","Tonga"],
    ["TTO","Trinidad and Tobago"],
    ["TUN","Tunisia"],
    ["TUR","Türkiye (Turkey)"],
    ["TUV","Tuvalu"],
    ["TZA","Tanzania"],
    ["UGA","Uganda"],
    ["UKR","Ukraine"],
    ["URY","Uruguay"],
    ["USA","United States of America"],
    ["UZB","Uzbekistan"],
    ["VCT","Saint Vincent and the Grenadines"],
    ["VEN","Venezuela"],
    ["VGB","British Virgin Islands"],
    ["VIR","Virgin Islands"],
    ["VNM","Vietnam"],
    ["VUT","Vanuatu"],
    ["WSM","Samoa"],
    ["YEM","Yemen"],
    ["ZAF","South Africa"],
    ["ZMB","Zambia"],
    ["ZWE","Zimbabwe"]
]

const conversionHash = {}
for (let i = 0; i < codeNameMatch.length; i++) {
    conversionHash[codeNameMatch[i][0]] = codeNameMatch[i][1]
}


console.log(conversionHash)

module.exports = conversionHash;