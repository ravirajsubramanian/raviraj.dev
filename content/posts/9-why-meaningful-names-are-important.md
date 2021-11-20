---
template: post
title: Why meaningful names are important?
slug: why-meaningful-names-are-important
draft: false
date: 2021-11-20T18:04:37.676Z
description: >-
  We name everything in code from directories and files to functions, arguments, and variables. Choosing good names takes more time and saves more than it takes. A name should answer all the questions that may pop up to the next coder.
category: advice
tags:
  - programming
  - clean-code
  - beginners
---

## Introduction

We name everything in code from directories and files to functions, arguments, and variables. Choosing good names takes more time and saves more than it takes. A name should answer all the questions that may pop up to the next coder.

## Why does it matter?

We often excuse the subtle name with code comments. If a name requires a comment, it does not reveal the intent. Why should we give it a name when it does not solve the very reason it was considered?

We go for a short names for simplicity-sake and without our knowledge, it makes a lot of assumptions about the reader to understand the same thing we do from the short name. When the assumptions are wrong, it will only arise more questions.

## 10 reasons why meaningful names are important

1. Noise words like Info and Data are not helpful without distinction for names
2. Pronounceable names are easy to read and search by humans.
3. With larger scope, single letter or small names do not help much but make the job even harder defeating the purpose of using them.
4. Generalisations only add disinformation if not true. For example, using List when it's actually not a list or using similar names would only confuse the programmer and considered disinformation.
5. Humours and culture-oriented slangs do not mean the same everywhere. Do not use them.
6. Problem domains are not completely understandable by the programmers. Use solution domain for names in the program. Problem domain names can be a last option as documentation or domain experts would be able to help. Do not use names from neither domains.
7. Adding context to the names would look expanding the code. But, it will be found necessary reading the code after months by other teammates who has to take over the project or even by the same author.
8. Clarity is king. Be creative to share enough context and still deliver clarity.
9. Additional encoding adds extra burden to understand the code. For example, p_address for permanent address data. Do not use unnecessary encodings and go for meaningful complete names instead.
10. Picking different names for the same concept confuses to understand the distinction or similarity. Pick one work per concept. For example, settle on one name among get, fetch, retrieve and one among manager, controller, handler, and driver.

Happy coding! 🙂