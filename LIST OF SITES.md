
## Getting a new list of sites for include URL rules:

run this code at https://stackexchange.com/sites?view=list to get list of custom SE/SO domains: 

  `jQuery('.lv-info a').each(function() {if(jQuery(this).attr("href").indexOf(".stackexchange.com") == -1) console.log(jQuery(this).attr('href'))})

