Að mæla þyngdarhröðunina
------------------------

.. _inngangur-3:

Inngangur
~~~~~~~~~

| Í þessari tilraun ætlum við að mæla þyngdarhröðun jarðar, :math:`g`,
  með aðstoð slow-motion myndavélar.
| Við munum einnig sýna að tveir misþungir hlutir falla jafn hratt til
  jarðar.

.. _tækjabúnaður-3:

Tækjabúnaður
~~~~~~~~~~~~

-  Snjallsími sem býður upp á slow motion upptökur.

-  Tveir misungir hlutir til að sleppa.

-  Hlutur með þekkta lengd til að hafa í bakgrunni upptökunnar,
   t.d. málband eða reglustika.

-  Tölva með forritinu Logger Pro.

.. _leiðbeiningar-2:

Leiðbeiningar
~~~~~~~~~~~~~

Takið upp slow motion myndband af tveimur hlutum sem sleppt er á sama
tíma úr sömu hæð. Takið síðan upp myndband af hlut að detta með kvarða í
bakgrunn (`sjá þetta
myndband <https://www.dropbox.com/s/k13yf25p9ocxt9y/IMG_0976.MOV?dl=1>`__).
Setjið myndböndin inn í Logger Pro með því að velja ``Insert`` og síðan
``Movie...`` Veljið myndbandið ykkar og smellið þar næst á takka með
þrem litlum rauðum punktum í neðra hægra horninu,
``Enable video analysis``. Veljið síðan upphafspunkt hnitakerfisins þar
sem boltanum er sleppt með ``Set Origin`` og veljið hentuga ása á
hnitakerfið. Veljið síðan reglustikuna ``Set Scale`` til að segja
forritinu hvaða lengd hver díll samsvarar á myndinni. Merkið síðan inn á
hvern ramma staðsetningu hlutarins með þv í að velja ``Add Point``.
Logger Pro ætti þá að skrá niður staðsetningu hlutarins :math:`(x,y)`
sem fall af tíma :math:`t` ásamt hraða hlutarins, :math:`(v_x, v_y)`,
sem fall af tíma :math:`t`, miðað við hnitakerfið sem þið skilgreinduð.
Myndrænar leiðbeiningar má sjá `í þessu
myndbandi <https://youtu.be/rwYJV8W5_64>`__.

.. _fræði-3:

Fræði
~~~~~

Látum rammafjöldan vera táknaðan með :math:`n` og látum :math:`f` tákna
fps gildi upptökunnar. Þá gildir að heildartíminn sem hefur liðið í
upptökunni er gefinn með :math:`t = n/f`. Látum :math:`x` tákna lárétta
staðsetningu hlutarins og látum :math:`y` tákna lóðrétta staðsetningu
hlutarins sem fall af tíma, :math:`t`. Þá gildir samkvæmt stöðujöfnunum
að:

.. math::

   \begin{aligned}
       x = x_0 + v_{x_{0}}t, \qquad \qquad y = y_0 + v_{y_{0}} t + \frac{1}{2}gt^2.
   \end{aligned}

Þar sem :math:`g` táknar þyngdarhröðun jarðar, :math:`(x_0, y_0)` táknar
upphafsstaðsetningu hlutarins og :math:`(v_{x_{0}},v_{y_{0}} )` táknar
upphafshraða hlutarins í lárétta og lóðréttu stefnu. Þar að auki gildir
samkvæmt stöðujöfnunum að lárétti hraðinn er gefinn sem fall af tíma með
:math:`v_{x} = v_{x_0}` þar sem að engin hröðun verkar í láréttu
stefnuna. Hinsvegar nýtur lóðrétti hraðinn:

.. math::

   \begin{aligned}
     v_y =   v_{y_{0}} - gt.
   \end{aligned}

.. _úrvinnsla-2:

Úrvinnsla
~~~~~~~~~

#. Látið Logger Pro gera töflu með lóðréttri og láréttri staðsetningu
   hlutarins :math:`(x,y)`, lóðréttum og láréttum hraða hlutarins,
   :math:`(v_x, v_y)`, og tímanum sem hefur liðið, :math:`t`.

#. Gerið graf af lóðréttri staðsetningu hlutarins, :math:`y`, sem fall
   af tíma :math:`t`. Hver er lögun grafsins?

#. Gerið graf af láréttri staðsetningu hlutarins, :math:`x`, sem fall af
   tíma, :math:`t`. Hver er lögun grafsins?

#. Gerið graf af lóðréttum hraða hlutarins, :math:`v_y`, sem fall af
   tíma, :math:`t`. Hver er lögun grafsins?

#. Ákvarðið þyngdarhröðun jarðar, :math:`g`, út frá gröfunum ykkar.