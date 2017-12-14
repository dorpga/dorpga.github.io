---
title: Why I belive Typescript shouldn't exist
categories: programming
---

If you didn't know, Typescript is a dialect of Javascript which requires the user to define types. However, it just compiles to plain-old Javascript, making the performance gains from defining types barely existant at all. This is because Javascript doesn't have strongly defined types and variables are casted on the fly. All Typescript is doing is requiring developers to manually cast variables which is usually done in a Javascript Engine like V8 and Spidermonkey. 
