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

# Chương 2: HTML

- **Hypertext & HTML**
    + HyperText Markup Language (HTML) is the language for specifying the static content of Web pages

    + hypertext refers to the fact that web pages are more than just text, can contain multimedia, provide links for jumping within the same document & to other documents

    + markup refers to the fact that it works by augmenting text with special symbols that identify the document structure and content type

- **Tags and Elements**
    + HTML specifies a set of tags that identify structure of the document and the content type

    + An HTML element is an object enclosed by a pair (in most cases) of tags

- **Structural Elements**
    + an HTML document has two main structural elements

        + *HEAD* contains setup information for the browser & the web page

        + *BODY* contains the actual content to be displayed in the web page

- **Text Layout**
    + for the most part, layout of the text is left to the browser
        + (almost) every sequence of whitespace is interpreted as a single space

        + browser automatically wraps the text to fit the window size
    
    + can override some text layout
        + can specify a new paragraph using <p></p>
        + can cause a line break using the <br/>
        + can force a space character using the symbol for a "non-breaking space": *&nbsp*
    
- **Separating Blocks of Text**
    + can specify headings for paragraph or blocks of text

    + can insert a horizontal rule to divide sections

- **Text Appearance**
    + can specify styles for fonts

- **Lists**
    + there are 3 different types of list elements

- **Hyperlinks**
    + perhaps the most important HTML element is the hyperlink, or ANCHOR

    + for long documents, you can even have links to other locations in that same document

- **Images**
    + can include images using img

- **Tables**
    + tables are common tools for arranging complex layout on a web page

    + layout in a Table:
        + can have a border on tables using the style attribute
        + can control the horizontal & vertical layout within cells
        + can apply layout to an entire row
    
    + table width:
        + by default, the table is sized to fit the data
        + can override & specify the width of a table relative to the page
    
    + other table attributes:

- **Frame**
- **Content vs Presentation**
- **Inline Style Sheets**
    + using the style attribute, you can specify presentation style for a single HTML element

    + more style properties & values

    + style sheets can be applied to tables for interesting effects

- **Document Style Sheets**
    + Inline style sheets apply to individual elements in the page

    + As a general rule, inline style sheet directives should be used as sparingly as pos

    + Alternatively, document style sheets  allow for a cleaner separation of content and presentation

    + document style sheet ensure that similar elements are formatted similarly

    + note how "clean" the <body> element is

    + document style sheets are especially useful in formatting tables

    + effectively separates content from presentation

- **Pseudo-Elements**
    + pseudo-elements are used to address sub-parts of elements

    + danger: changing the look of familiar elements is confusing

    + careful: current browsers do not support all CSS2 features

- **External Style Sheets**
    + modularity is key to the development and reuse of software

    + external style sheets place the style definitions in separate files

- **Modularity & Style Sheets**
    + Ideally, the developers of a website would place all formatting options in an external style sheet

    + all web pages link to that same style sheet for a uniform look

- **Web rules of thumb**
    + don't add features that distract from the content of the page

- **HTML5**

# Dxy