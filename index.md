---
layout: page
title: Home
---

<a href="https://julialang.org/" target="_blank">
  <img src="img/julia-logo.svg" alt="Julia Lang"
    style="height: 60px; float: right; margin: 0.5em; vertical-align: middle; display: inline-block"/>
</a>
I am a **PhD Candidate** at the {{site.data.links.mdlinks.khoury}},
{{site.data.links.mdlinks.neu}} (Boston, MA, USA) since September 2018,
currently working on formalizing aspects of
the {{site.data.links.mdlinks.julialang}} language.

<a href="http://prl.ccs.neu.edu" target="_blank">
  <img src="img/prl.png" alt="PRL"
    style="height: 60px; float: right; margin: 0.5em; vertical-align: middle; display: inline-block"/>
</a>
I work with {{site.data.links.mdlinks.janvitek}}
in {{site.data.links.mdlinks.prl}}, the Programming Research Laboratory.  
{% include jump-button.html link="#research" name="the Research section" %}

My primary research interests are **programming languages** and **type theory**.
I also like theorem proving (most of my experience has been with
{{site.data.links.mdlinks.coq}}),
generic programming (like Java generics or ML polymorphism),
functional and object-oriented programming,
software engineering, programming by contracts, and software testing.
Lately, I have been getting interested in human aspects of software
engineering and the interaction between humans and programming languages.

### Contacts

**Email**: [julbinb@gmail.com](mailto:julbinb@gmail.com) (preferred)
or [belyakova.y@northeastern.edu](mailto:belyakova.y@northeastern.edu)  
Professional: [github]({{site.github.account}}),
[researchgate]({{site.researchgate}}), [linkedin]({{site.linkedin}})  
Social: [twitter]({{site.twitter}}), [facebook]({{site.facebook}})
<!--[skype](skype:juliet_belyakova)-->  
<!--Web-page in Russian:
[staff.mmcs.sfedu.ru](http://staff.mmcs.sfedu.ru/~juliet/index.html).-->

### Short bio

I was born in 1991 in Russia, Rostov-on-Don, where I also grew up
and received education.
In 2012–2016, I was teaching undergraduate CS courses at my alma mater,
{{site.data.links.mdlinks.mmcs}} ({{site.data.links.mdlinks.sfedu}}).  
While teaching half-time, I had entered a PhD program as well
but later moved to [Northeastern]({{site.data.links.places.neu.link}})
where my PhD journey started over.  
In 2017–2018, I spent a year at the {{site.data.links.mdlinks.fitcvut}}
({{site.data.links.mdlinks.cvut}}) doing research
with {{site.data.links.mdlinks.janvitek}}.  
Since 2018, I have been doing my PhD in Boston.

**Education.** MS in "Computer Science and Information Technologies"
from {{site.data.links.mdlinks.sfedu}}.

*Note.* If you have questions about doing a PhD in the US,
being an international student, woman in CS, etc.,
feel free to send me an email.

### Recent news (without [failures](failures))

* September 2021: accepted paper at
  [OOPSLA 2021](https://2021.splashcon.org/track/splash-2021-oopsla)  
  [Type Stability in Julia: Avoiding Performance Pathologies in JIT Compilation](/papers#oopsla2021)

* August 2021: talked about the Julia language on
  [Podlodka Podacst](https://podlodka.io/)  
  [Episode #230: Julia](https://podlodka.io/230) (in Russian)

* April 2021: joined External Review Committee of
  [OOPSLA 2021](https://2021.splashcon.org/track/splash-2021-oopsla)  

* October 2020: accepted paper at
  [OOPSLA 2020](https://2020.splashcon.org/track/splash-2020-oopsla)  
  [World Age in Julia: Optimizing Method Dispatch in the Presence of Eval](/papers#oopsla2020)

> <small>All news starting from 2020 are [here](news).</small>

## <span id="research">Research</span>

{% include link-button.html name="DBLP" link="https://dblp.uni-trier.de/pers/hd/b/Belyakova:Julia" %}
{% include link-button.html name="Google Scholar" link="https://scholar.google.com/citations?user=8AYYcb8AAAAJ&hl=en&oi=ao" %}
{% include link-button.html name="ACM DL" link="https://dl.acm.org/profile/99659183110" %}
{% include link-button.html name="ORCID" link="https://orcid.org/0000-0002-7490-8500" %}

<a href="https://julialang.org/" target="_blank">
  <img src="img/julia-logo.svg" alt="Julia Lang"
    style="height: 60px; float: right; margin: 0.5em; vertical-align: middle; display: inline-block"/>
</a>
For the last several years I have been working on formalizing
various aspects of the {{site.data.links.mdlinks.julialang}}
programming language:

* The semantics of
  [world age]({{site.data.links.websites.worldage}})
  and its interaction with `eval`
  in a core calculus [Juliette](/projects/juliette)
  [[OOPSLA 2020](/papers#oopsla2020)].
* The subtyping relation.
  - A reconstruction of subtyping in
    [LambdaJulia](/projects/lambda-julia) [[OOPSLA 2018](/papers#oopsla2018)].
  - A semantic subtyping model suitable for a dynamic programming language
    (work-in-progress) [[FTfJP 2019](/papers#ftfjp2019)].

> <small>_Disclaimer._ Good or bad, the language has nothing to do with me, and the name match is a coincidence!</small>

My previous research was related to language support for generic programming
in object-oriented languages
[[SBLP 2016](/papers#sblp2016), [SYRCoSE 2015](/papers#syrcose2015)].

#### Questions, comments, feedback

If you have any questions or comments about projects, papers, or website,
{{site.contactmetext}}

### Selected papers and talks

1. {% include publication.html paper-key="OOPSLA 2021"
      paper-data=site.data.papers %}
1. {% include publication.html paper-key="OOPSLA 2020"
      paper-data=site.data.papers %}
1. {% include publication.html paper-key="VIS 2020 (short paper)" paper-data=site.data.papers %}
1. {% include publication.html paper-key="FTfJP 2019" paper-data=site.data.papers %}
1. {% include talk.html talk-key="Семинар ЯПиК 2019" talk-data=site.data.talks show-talk-marker="true" %}
1. {% include publication.html paper-key="OOPSLA 2018" paper-data=site.data.papers %}
1. {% include publication.html paper-key="SBLP 2016" paper-data=site.data.papers %}
