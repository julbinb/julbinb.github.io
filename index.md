---
layout: page
title: Home
---

<<<<<<< HEAD
<a href="http://prl.ccs.neu.edu" target="_blank">
  <img src="img/prl.png" alt="PRL"
    style="height: 60px; float: right; margin: 0.5em; vertical-align: middle; display: inline-block"/>
</a>
I am a **PhD Student** at the {{site.data.links.mdlinks.khoury}},
{{site.data.links.mdlinks.neu}} (Boston, MA, USA) since September 2018.
=======
I am a PhD Student
at the [College of Computer and Information Science](https://www.ccis.northeastern.edu/),
[Northeastern University](https://www.northeastern.edu/) (CCIS NEU), Boston, MA, USA
since September 2018.
>>>>>>> upd affiliation, add OOPSLA paper

I work with {{site.data.links.mdlinks.janvitek}}
in the Programming Research Laboratory ({{site.data.links.mdlinks.prl}}).  
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

<<<<<<< HEAD
**Education.** MS in "Computer Science and Information Technologies"
from {{site.data.links.mdlinks.sfedu}}.

*Note.* If you have questions about doing a PhD in the US,
being an international student or a woman in CS, feel free to send me an email.

### Recent good news (without [failures](failures))

* December 2020: joined Artifact Evaluation Committee of
  [CAV 2021](http://i-cav.org/2021)

* October 2020: accepted paper at
  [OOPSLA 2020](https://2020.splashcon.org/track/splash-2020-oopsla)  
  [World Age in Julia: Optimizing Method Dispatch in the Presence of Eval](/papers#oopsla2020)

* September 2020: accepted short paper at
  [VIS 2020](http://ieeevis.org/year/2020/welcome)  
  [Just TYPEical: Visualizing Common Function Type Signatures in R](/papers#vis2020)

* June 2020: joined Program Committee of [ICCQ 2021](https://www.iccq.ru/)

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

<<<<<<< HEAD
<<<<<<< HEAD
If you have any questions or comments about projects or papers,
{{site.contactmetext}}
=======
## Research
>>>>>>> simple template for toggled-abstract

### Selected papers and talks

1. {% include publication.html paper-key="OOPSLA 2020"
      paper-data=site.data.papers %}
1. {% include publication.html paper-key="VIS 2020 (short paper)" paper-data=site.data.papers %}
1. {% include publication.html paper-key="FTfJP 2019" paper-data=site.data.papers %}
1. {% include talk.html talk-key="Семинар ЯПиК 2019" talk-data=site.data.talks show-talk-marker="true" %}
1. {% include publication.html paper-key="OOPSLA 2018" paper-data=site.data.papers %}
1. {% include talk.html talk-key="NEUPRL 2017" talk-data=site.data.talks show-talk-marker="true" %}
1. {% include publication.html paper-key="SBLP 2016" paper-data=site.data.papers %}
=======
My previous research was related to language support for generic programming
in object-oriented languages.
=======
1. {% include publication.html paper-key="OOPSLA 2018" paper-data=site.data.papers %}
2. {% include publication.html paper-key="FTfJP 2017" paper-data=site.data.papers %}
3. {% include talk.html talk-key="NEUPRL 2017" talk-data=site.data.talks show-talk-marker="true" %}
4. {% include publication.html paper-key="SBLP 2016" paper-data=site.data.papers %}
>>>>>>> upd affiliation, add OOPSLA paper

### Selected papers/talks

<<<<<<< HEAD
1. **LNCS 2016** [[preprint PDF]]({{ site.baseurl }}{{ site.papers }}/2016-SBLP_OO-generics_preprint.pdf)  [[slides PDF]]({{ site.baseurl }}{{ site.slides }}/belyakova-SBLP-2016_slides.pdf)  
   Julia Belyakova.
   *Language Support for Generic Programming in Object-Oriented Languages:
   Peculiarities, Drawbacks, Ways of Improvement.*  
   DOI: [10.1007/978-3-319-45279-1_1](http://link.springer.com/chapter/10.1007%2F978-3-319-45279-1_1).  
   Lecture Notes in Computer Science. Programming Languages: 20th Brazilian Symposium, SBLP 2016.
   SBN 978-3-319-45279-1 (Online), No 9889.
   Springer International Publishing, 2016, p. 1–15.
   {% capture text-capture %} Earlier comparative studies of language support for generic 
   programming (GP) have shown that mainstream object-oriented (OO) 
   languages such as C# and Java provide weaker support for GP 
   as compared with functional languages such as Haskell or SML. 
   But many new object-oriented languages have appeared in recent years. 
   Have they improved the support for generic programming? And if not, 
   is there a reason why OO languages yield to functional ones in this 
   respect? In this paper we analyse language constructs for GP in 
   seven modern object-oriented languages. We demonstrate that all of 
   these languages follow the same approach to constraining type 
   parameters, which has a number of inevitable problems. However, 
   those problems are successfully lifted with the use of the another 
   approach. Several language extensions that adopt this approach and 
   allow to improve GP in OO languages are considered. We analyse the 
   dependencies between different language features, discuss the 
   features’ support using both approaches, and propose which approach 
   is more expressive. {% endcapture %}
   {% include toggle.html toggle-text="Abstract" toggle-name="LNCS2016" toggle-content=text-capture %}
=======
* Organizing Committee Co-Chair.  
  [ECOOP DS 2019](https://2019.ecoop.org/home):
  Doctoral Symposium at European Conference on Object-Oriented Programming 2019
  (London, United Kindom).

* Organizing Committee Co-Chair.  
  [ECOOP/ISSTA DS 2018](https://conf.researchr.org/track/ecoop-issta-2018/ecoop-issta-2018-doctoral-symposium):
  Doctoral Symposium at European Conference on Object-Oriented Programming 2018
  (Amsterdam, Netherlands).
>>>>>>> upd affiliation, add OOPSLA paper

## Professional service

TBD
<<<<<<< HEAD
>>>>>>> add contact info; add refs to paper/slides
=======
>>>>>>> simple template for toggled-abstract
