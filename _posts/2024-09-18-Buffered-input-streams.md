---
title: "Buffered Input Streams"
date: 2024-09-18
---

When working with data streams in Java, performance is often a critical consideration. Take a file for example. When 
you `read()` from a socket using an unbuffered input stream, it grabs the bytes one byte at a time. When it does so it 
triggers a system call to the operating system to fetch the next byte.

System calls are expensive compared to in-memory operations because they involve context switching between the user space
and the kernel space. Each call requires CPU time and resources to handler the switch, making multiple frequent reads
inefficient. So how do we get around this?

### BufferedInputStream to the rescue!

BufferedInputStream is a wrapper around another input stream designed to add a layer of buffering to the underlying
stream. Instead of reading a single byte from the input source every time data is requested, a chunk of data is read all
at once and stored in memory. This drastically reduces the number of actual reads from the underlying source, improving
performance.

##### Benefits

1. **Improved In/Out Performance:** Fewer reads to the input source makes your program run faster, especially for slow
sources like network streams.
2. **Flexibility:** You can wrap `BufferedInputStream` around any `InputStream`, making it versatile for different use
cases (files, sockets, etc.).
3. **Ease of Use**: Using `BufferedInputStream` is as simple as wrapping your existing input stream. No need to write
complex logic yourself!


### How it works.

- **Filling the Buffer:** When you call `read()`, `BufferedInputStream` checks wheter there is data available in the
buffer. If the buffer is empty, it fetches a new chunk of data from the source.
- **Reading from the Buffer:** If the buffer contains data, it serves bytes from there, avoiding costly reads from the 
underlying input source


Using it is as simple as wrapping your input stream. In this example, we'll use use a server socket accepting a client 
socket as an example.

```java
import java.io.BufferedInputStream;
import java.net.ServerSocket;
import java.net.Socket;

ServerSocket serverSocket = new Socket();
Socket socket = socket.accept();
BufferedInputStream bufferedInputStream = new BufferedInputStream(socket.getInputStream());
```

Now you have a buffered input stream. It still has all of the methods available to an inputStream, but now more efficient!