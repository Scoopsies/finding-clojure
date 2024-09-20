---
title: "Understanding Multipart Form Data"
date: 2024-09-19
---

When building web applications, there will often be times when you need to handle complex forms that involve uploading \
files, such as images, PDFs, or even large documents. For this purpose, multipart/form-data is the standard format that 
allows a mix of text fields and file uploads to be transmitted via HTTP.

### What is Multipart Form Data?

`multipart/form-data` is a MIME (Multipurpose Internet Mail Extensions) type (try saying that 10 times fast) used for
form submissions where the form includes file uploads. Both text and binary data (files) can be transmitted in a single
request.

If you've ever uploaded a photo, a video, or a pdf to the internet, you have probably used a Multipart Form without
knowing it. When you clicked the button, behind the scenes the [Http request](https://scoopsies.github.io/finding-clojure/2024/09/12/parts-of-http-request.html)
had a multipart form as the body, which consisted of a boundary, its own header, and the content.

### Parts of a Multipart Boundary
**The Boundary**: 

The first part of the multipart request is the boundary string. This boundary is a unique delimiter
that separates each part of the form It is defined in the `Content-Type` header of the (full) request.

```java
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryE19zNvXGzXaLvS5C
```

The boundary makes sure the forms parts don't get mixed up. Each part begins with a boundary and ends with a boundary.

**Headers:**

- Each part of the multipart message has its own set of headers. And in each of those headers the one thing that is required
is a `Content-Disposition` with a name variable (the name of the form field). Not required but often found in the content
disposition is filename in the case of file uploads.
- The `content-type` is another field often found, but not always included. Content type defines the MIME type. If the
content-type is not included, then it is assumed to have the type `text/plain`.

example:

```java
Content-Disposition: form-data; name="file"; filename="example.png"
Content-Type: image/png
```

**The body (Data)**

After the header, a double CRLF ("\r\n\r\n") separates the header from the body/content/data. In the case of a file this
is where all the binary data would go, for text, it'd just be text. You can tell the data is completed when you reach 
another boundary.


Here is what a full multipart form could look like:

```java
POST /upload HTTP/1.1
Host: example.com
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryE19zNvXGzXaLvS5C

------WebKitFormBoundaryE19zNvXGzXaLvS5C
Content-Disposition: form-data; name="greeting"

Hello!
------WebKitFormBoundaryE19zNvXGzXaLvS5C
Content-Disposition: form-data; name="file"; filename="autobot.png"
Content-Type: image/png

[Binary PNG data here]
------WebKitFormBoundaryE19zNvXGzXaLvS5C--
```