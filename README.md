# ProperVideos
## Especially NOT Tailored For You.

### What is this?

It's a playlist where you just watch. Or let it play on your second screen. Or display it on living room tv to make your unwanted guests runaway with boredom. No algorithms or anything. Remember TV? Something like that.  Definitely not with dumb content. Mostly.

### Why?

**Short Answer:** Because.

**Slightly Longer Answer:** I only knew HTML and CSS and it was an overdue task for me to learn JS. Also to make most out of quarantine time. 

**Long Answer:** I like to have some non-distracting video on my second display while working. Like documentaries, interviews or even some scenery. For the last few years YouTube become a great source for influencers, gamers and many more. As the majority of the content is created by them YouTube had to align their recommendation algorithm regarding such content. But due to that, after watching a Dieter Rams interview, it's no surprise to see a 'Top 10 Minimalist Samsung Phone Designs' as a follow up video. Just a few weeks ago, when I was working I've checked my second display and I've noticed that it was a bit sad scene. 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c059865f-4367-4e3b-9c9c-6b1ac1edbb42/Group_3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c059865f-4367-4e3b-9c9c-6b1ac1edbb42/Group_3.png)

I've thought 'wish there was a website that plays videos on autoplay randomly - where I don't have to pick what to watch next'. After that, I thought ok that's pretty easy, why don't you do yourself. I've  immediately rolled my sleeves and get did some wireframes. Easy. So I've spend a good amount of time on JS tutorials by getting confused. After a quite time getting frustrated, feeling like hacker and immediately stumbling on the code line I nailed it. This is the reason why Proper Videos exist. 

### Your code sucks!

I know. I've learned all of these like two weeks ago. Help me to get better. Everythign already on GitHub. I would really appreciate if you can point out where I messed. 

### Can I suggest videos?

I would appreciate it. But I have no idea to implement such thing at the moment 😅. If you know how to deal with JSON files, all the videos are categorised in archive.json. Feel free to add your suggestions and request a pull. Don't have a guideline but you might get the general concept of the videos after watching a few videos. 

Speaking of ideas...

### Next Steps

While building this awkward thing, I've got plenty of ideas to implement. So here's a list of my thoughts

- **Add Previous Next Buttons.** Find a way to collect the active sessions history
- **Display recently watched videos** This is rather easy after collecting the active session history.
- **Do not replay watched videos** Learn how cookies work and edit them.
- ~~implement advertisement~~  bad joke
- **Submit video** I have zero idea how to do this. Complete darkness.
- **Genre filtering** Music, documentaries, interviews etc. Might turn out actually nice.
- **Clean the code** It's a mess at the moment. I might have wrote everything from scratch for like 5 times. To add more to my shame I've also included my previously bad scripts into the ./prod/archive   folders.
- **Implement side bar thingie to Tailwind** I had to use plain CSS for the transition effect because I didn't want to come up random customised values to the base tailwind css. I feel like I might need to jump to React or Vue to do this.
- **Implement native API's** Using native API's was my first intention but it turned out to be pain to have YT's and Vimeo's api work at the same time within the same wrapper. They don't like each other much and I might scrap the idea at some point. [Plyr.io](http://plyr.io) is does a great job tackling that issue and even they have solved it with a zillion lines of code. I've just learned JS like two weeks ago!

### Frameworks and Resources

**Tailwind** - CSS Standard of the Future

**[Plyr.io](http://plyr.io)** - Ultra complex tasks done ultra easy 

**FontAwesome** - A free project's must have icon library

### A Big **Thanks**

Bugra Sitemkar - For enduring my basic questions like 'what is return wah, what is json wah'