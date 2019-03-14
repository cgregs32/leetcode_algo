var subdomainVisits = function(cpdomains) {
  domainHash = {};
  cpdomains.forEach(domainStr => {
    const visits = parseInt(domainStr.split(" ")[0]);
    const domains = domainStr.split(" ")[1].split(".");

    for (let j = 0; j < domains.length; j++) {
      key = domains[j];

      for (let i = j + 1; i < domains.length; i++) {
        key += `.${domains[i]}`;
      }

      if (domainHash[key]) {
        domainHash[key] += visits;
      } else {
        domainHash[key] = visits;
      }
    }
  });
  return Object.keys(domainHash).map(key => `${domainHash[key]} ${key}`);
};

arr = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(arr));
