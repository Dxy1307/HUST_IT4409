# IT4409 - Công nghệ Web và dịch vụ trực tuyến

## Chương 1: Introduction to Web Technologies and e-Services

- Web != Internet: Internet is hardware, web is software along with data, documents, and other media

- **World Wide Web**
    + the web is the collection of machines (Web servers) on the Internet that provide information, particularly HTML documents, via HTTp
    + Machines that access information on the Web are known as Web clients. A Web browser is software used by end user to access the Web

- **Hypertext Transport Protocol (HTTP)**
    + HTTP is based on the request-response communication model:
        + Client sends a request
        + Server sends a response
    + HTTP is a stateless protocol
        + The protocol does not require the server to remember anything about the client between requests
    + Normally implemented over a TCP connection (80 is standard port number for HTTP)
    + Typical browser-server interation
        + User enters Web address in browser
        + Browser uses DNS to locate IP address
        + Browser opens TCP connection to server
        + Browser sends HTTP request over connection
        + Server sends HTTP response to browser over connection
        + Browser display body of response in the client area of the browser window
    
- **HTTP Request**
    + Structure of the request:
        + start line
        + header field
        + blank line
        + optional body
    + ***Start line***: GET /HTTP/ 1.1
        + HTTP request method
        + Request-URI (Uniform Resource Identifier)
        + HTTP version
    + *URI* are two types
        + Uniform Resource Name (URN)
        + Uniform Resource Locator (URL)

- **HTTP Response**
    + Structure of the response
        + status line
        + header field
        + blank line
        + optional body
    + ***Status line***: HTTP/1.1 200 OK
        + HTTP version
        + status code: 1-Informational | 2-Success | 3-Redirection | 4-Client Error | 5-Server Error
        + reason phrase

- **Web Browsers**
    + Primary tasks:
        + Convert web addresses (URL's) to HTTP requests
        + Communicate with web servers via HTTP
        + Render (appropriately display) documents returned by a server
    + Static vs Dynamic pages
        + Most Web pages are static: contents are the same each time it is accessed
        + As the web continues to move towards more and more online services and e-commerce continues to grow, Web pages must also provide dynamic content

- **Web Clients**
    + Many possible web clients
        + text-only "browser"
        + Mobile phones
        + Robots

- **Web Servers**
    + Basic functionality
        + Receive HTTP request via TCP
        + Map host header (domain name) to specific virtual host (one of many host names sharing an IP address)
        + Map Request-URI to specific resource associated with the virtual host
        + Map type of resource to appropriate MIME type and use to set Content-Type header in HTTP response
        + Log information about the request and response
    + httpd, apache, IIS, Tomcat, ...

# Dxy