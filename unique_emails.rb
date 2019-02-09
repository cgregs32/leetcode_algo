def num_unique_emails(emails)
  emails.map do |email|
    local, domain = email.split('@')
    [local.gsub(/[.]|[+].*/, ''), domain].join("@")
  end.uniq.count
end

p num_unique_emails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])
