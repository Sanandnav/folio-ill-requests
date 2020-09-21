#!/usr/bin/ruby

require "cgi"
require "json"

def respond(cgi)
	puts cgi.header
	puts "<html><body>Hi!</body></html>"
end

body		= $stdin.read
cgi		= CGI.new

begin 
	input		= JSON.parse(body)
rescue
	STDERR.print "Could not parse request body!"
	respond(cgi)
	exit
end

if input["zen"]
	STDERR.print "Recieved a ping!\n"
	STDERR.print input["zen"]
	respond(cgi)
	exit
elsif input["ref"]
	STDERR.print "I think we got a push!\n"
	respond(cgi)

	if input["ref"] == "refs/heads/master"
		STDERR.print "This was a a push to master!\n"
		rebuild = `touch /var/www/rebuild/fir-now`
		STDERR.print rebuild
	end
	exit
else
	STDERR.print "Got an unknown payload!"
	respond(cgi)
	exit
end

# EOF
