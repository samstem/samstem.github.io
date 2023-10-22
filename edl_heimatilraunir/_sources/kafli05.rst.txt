Vinnulögmálið
-------------

.. _inngangur-4:

Inngangur
~~~~~~~~~

Í þessari tilraun ætlum við að sannreyna vinnulögmálið. Við ætlum að
taka upp slow-motion myndband af hlut að renna meðfram láréttu yfirborði
og athuga hvort að vinna núningskraftsins samræmist hreyfiorkunni sem
tapaðist við færslu hlutarins.

.. _tækjabúnaður-4:

Tækjabúnaður
~~~~~~~~~~~~

-  Snjallsími til að taka upp slow-motion myndband.

-  Hlutur sem er hægt að renna meðfram láréttu yfirborði.

-  Hlutur með þekkta lengd til að hafa í bakgrunni upptökunnar,
   t.d. málband eða reglustika.

-  Tölva með forritinu Logger Pro.

.. _leiðbeiningar-3:

Leiðbeiningar
~~~~~~~~~~~~~

Takið upp slow-motion myndband. Setjið myndböndin inn í Logger Pro með
því að velja ``Insert`` og síðan ``Movie...`` Veljið myndbandið ykkar og
smellið þar næst á takka með þrem litlum rauðum punktum í neðra hægra
horninu, ``Enable video analysis``. Veljið síðan upphafspunkt
hnitakerfisins þar sem boltanum er sleppt með ``Set Origin`` og veljið
hentuga ása á hnitakerfið. Veljið síðan reglustikuna ``Set Scale`` til
að segja forritinu hvaða lengd hver díll samsvarar á myndinni. Merkið
síðan inn á hvern ramma staðsetningu hlutarins með því að velja
``Add Point``. Logger Pro ætti þá að skrá niður staðsetningu hlutarins
:math:`(x,y)` sem fall af tíma :math:`t` ásamt hraða hlutarins,
:math:`(v_x, v_y)`, sem fall af tíma :math:`t`, miðað við hnitakerfið
sem þið skilgreinduð.

.. _fræði-4:

Fræði
~~~~~

Lítum á hlut sem hefur massa :math:`m` sem við ýtum af stað eftir
láréttum fleti með upphafshraða :math:`v`. Vegna núnings við yfirborðið
mun hluturinn staðnæmast eftir að hann hefur runnið einhverja vegalengd
:math:`d`. Samkvæmt vinnulögmálinu höfum við þá að:

.. math::

   \begin{aligned}
       E_{\text{fyrir}} + W_\mu = E_{\text{eftir}}
   \end{aligned}

Þar sem :math:`W_\mu = -\mu mgd` er vinna núningskraftsins þá fáum við
að:

.. math::

   \begin{aligned}
       \frac{1}{2}mv^2 - \mu mgd = 0
   \end{aligned}

En það þýðir einmitt að

.. math::

   \begin{aligned}
       \frac{1}{2}mv^2 = \mu mgd.
   \end{aligned}

Við vitum einnig að hröðunin sem að massinn finnur fyrir er gefin með

.. math::

   \begin{aligned}
       a = -\mu g.
   \end{aligned}

Við getum því fundið núningsstuðulinn milli yfirborðsins og hlutarins og
þannig sannreynt vinnulögmálið.

.. _úrvinnsla-3:

Úrvinnsla
~~~~~~~~~

#. Takið upp slow motion myndband af hlut að renna meðfram yfirborði.

#. Komið myndbandinu ykkar inn í LoggerPro og greinið feril hlutarins.

#. Ákvarðið núningsstuðulinn milli hlutarins og yfirborðsins út frá
   lögun hraða-tíma grafsins.

#. Reiknið vinnu núningskraftsins, :math:`W_\mu = -\mu mgd` og berið
   saman við hreyfiorku hlutarins, :math:`K = \frac{1}{2}mv^2`, rétt
   eftir að honum var sleppt af stað.
