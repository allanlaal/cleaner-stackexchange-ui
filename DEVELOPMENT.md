
## Getting a new list of sites for include URL rules:

run this code in devtools console at https://stackexchange.com/sites?view=list to get list of custom SE/SO domains: 

### get list without *.stackexchange.com urls:

`
  jQuery('.lv-info a').each(function() {if(jQuery(this).attr("href").indexOf(".stackexchange.com") == -1) console.log(jQuery(this).attr('href'))})
`
### get list of all urls:

`
jQuery('.lv-info a')
`

