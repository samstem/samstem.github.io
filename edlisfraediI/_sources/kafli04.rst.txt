Hreyfing í fleiri víddum
========================

|image|

Eins og við höfum talað um eru færsla, hraði og hröðun vigrar. Í þessum
kafla ætlum við að skoða hreyfingu sem er í tveimur víddum. Það að bæta
við þriðju víddinni er einfalt mál þegar maður skilur hvernig tvær
víddir virka. Eitt af því sem komum til með að sjá er að við getum
skoðað hnitin hvort í sínu lagi. Í kasthreyfingu til dæmis, þá getum við
skoðað bolta sem hefur jafna hröðun í y-stefnu (þyngdarhröðun) og jafnan
hraða í x-stefnu (þ.e. enga hröðun). Slík hreyfing er kölluð
kasthreyfing.

Jöfn hröðun
-----------

Hugsum okkur að við höfum hröðun á forminu

.. math:: \vec{a}  = \left( \begin{array}{c} a_x(t)  \\ a_y (t) \end{array}\right)

Ef :math:`a_x` og :math:`a_y` eru föll af tíma þá þarf að nota
tegurreikning til þess að finna hraða sem fall af tíma og stöðu sem fall
af tíma.

Ef :math:`a_x` og :math:`a_y` eru hins vegar fastar, þá gilda jöfnurnar
úr öðrum kafla fyrir hvort hnit fyrir sig.

.. math:: \vec{a}  = \left( \begin{array}{c} a_x  \\ a_y  \end{array}\right)

.. math::

   \begin{equation}
   \vec{v}(t) = \left( \begin{array}{c} v_x(t)  \\ v_y(t)  \end{array}\right) = \left( \begin{array}{c} a_x t+v_{x0} \\ a_y t+v_{y0} \end{array}\right)
   \end{equation}

.. math::

   \begin{equation}
   \vec{s}(t) = \left( \begin{array}{c} x(t) \\y(t) \end{array}\right) = \left( \begin{array}{c} \frac{1}{2}a_xt^2 +v_{x0}t +x_0 \\ \frac{1}{2}a_yt^2 +v_{y0}t +y_0 \end{array}\right)
   \end{equation}

Jafn hraði í *x* - stefnu
~~~~~~~~~~~~~~~~~~~~~~~~~

Við getum tekið sem dæmi hreyfingu þar sem t.d. :math:`a_x = 0` og
:math:`a_y =` fasti.

Skoðum jöfnurnar hér að ofan í því tilfelli:

.. math:: \vec{a}  = \left( \begin{array}{c} 0  \\ a_y  \end{array}\right)

.. math::

   \begin{equation}
   \vec{v}(t) = \left( \begin{array}{c} v_x(t)  \\ v_y(t)  \end{array}\right) = \left( \begin{array}{c} v_{x0} \\ a_y t+v_{y0} \end{array}\right)
   \end{equation}

.. math::

   \begin{equation}
   \vec{s}(t) = \left( \begin{array}{c} x(t) \\y(t) \end{array}\right) = \left( \begin{array}{c} v_{x0}t +x_0 \\ \frac{1}{2}a_yt^2 +v_{y0}t +y_0 \end{array}\right)
   \end{equation}

Hér er hreyfingin bara jafn hraði í :math:`x-`\ hniti og hröðuð hreyfing
í :math:`y-` hniti.

Við getum hugsað okkur hlut sé kastað upp á ská með upphafshraða
:math:`\vec{v}_0  = \left( \begin{array}{c} v_{x0}  \\ v_{y0}  \end{array}\right)`
og að á sama tíma séum við að ferðast í bíl með hraða
:math:`\vec{v}_B  = \left( \begin{array}{c} v_{x0}  \\ 0 \end{array}\right)`
samsíða hlutnum. Okkur myndi þá virðast hluturinn vera bara að hreyfast
með í :math:`y-` stefnuna. hann myndi bara ferðast upp og niður miðað
við okkur.

Hreyfingin í :math:`y-` stefnuna er algjörlega óháð hreyfingunni í
:math:`x-` stefnuna. Það eina sem tengir þær saman er að þær gerast á
sama tíma. Þegar við reiknum dæmi, getum við alltaf reiknað
:math:`x -`\ hnit og :math:`y-` hnit sitt í hvoru lagi og svo tengjum
við þau bara saman með tímanum.

Kasthreyfing
~~~~~~~~~~~~

Hugsum okkur að við köstum bolta upp í loft undir
34\ :math:`\ensuremath{^\circ}` horni, með hraðanum 15  m/s. Við köstum
boltanum úr :math:`y_0` = 1,5 m hæð og frá :math:`x_0` = 0. Við gerum þá
nálgun að loftmótstaða sé engin. (Stundum er gott að reikna fyrst
einfalt dæmi og sjá hvernig það virkar. Seinna má svo bæta flóknari
hlutum við til þess að fá nákvæmari niðurstöðu). Ef engin loftmótstaða
er, þá er hraði boltans í x-stefnu alltaf sá sami, þ.e. hröðunin er 0,
og hröðunin í y-stefnu er :math:`a_y` = - 9,8 m/s\ :math:`^2`. Samkvæmt
jöfnunum hér að ofan höfum við því (við skulum sleppa að skrifa einingar
og gera ráð fyrir að allt sé í SI einingum):

.. math::

   \begin{equation}
   \vec{v}(t) = \left( \begin{array}{c} v_{x0} \\ a_y t+v_{y0} \end{array}\right)= \left( \begin{array}{c} 15\cos(34\ensuremath{^\circ}) \\ -9,8 t+15\sin(34\ensuremath{^\circ}) \end{array}\right)
   \end{equation}

og:

.. math::

   \begin{equation}
   \vec{s}(t) =  \left( \begin{array}{c} v_{x0}t +x_0 \\ \frac{1}{2}a_yt^2 +v_{y0}t +y_0 \end{array}\right) =  \left( \begin{array}{c} 15\cos(34\ensuremath{^\circ})t \\ \frac{1}{2}(-9,8)t^2 +15\sin(34\ensuremath{^\circ}) t + 1,5 \end{array}\right)
   \end{equation}

Nú höfum við allar jöfnur sem við þurfum. Við getum reiknað hversu hátt
boltinn fer. Einkenni hæsta punkts er að :math:`v_y` = 0. Þar er þá
:math:`-9,8 t+15\sin(34\ensuremath{^\circ})` = 0, og boltinn er því í
hæsta punkti þegar :math:`t = 15\sin(34\ensuremath{^\circ})/9,8`,s =
0,86 s. Til þess að finna hversu hátt boltinn fór á þessum tíma setjum
við inn í jöfnuna fyrir :math:`y` - gildið: :math:`h_{max}` =
:math:`\frac{1}{2}(-9,8)t^2 +15\sin(34\ensuremath{^\circ}) t + 1,5` =
4,99 m. Athugið að þetta er hæð yfir jörðu miðað við að við köstum
boltanum úr 1,5 m hæð yfir jörðu.

Nú gæti verið að við vildum vita hversu langt boltinn færi í
:math:`x`-stefnu áður en hann lendir á jörðunni. Til þess að finna það
skulum við fyrst finna hversu lengi boltinn er í loftinu. Þegar boltinn
lendir á jörðinni er :math:`y(t) = 0`. Það þýðir að
:math:`\frac{1}{2}(-9,8)t^2 +15\sin(34\ensuremath{^\circ}) t + 1,5 = 0`.
Þetta er annars stigs jafna sem þarf að leysa. Með einföldum aðferðum
sem þið þekkið fáum við lausnirnar
:math:`t = 1,88\,s\,\, \vee\,\, t = -0,16\,s.` Við vitum að 1,88 s er
rétta lausnin vegna þess að tíminn líður áfram. Stærðfræðin svara hins
vegar bara þeirri spurningu sem við settum fram: hvenær :math:`y` -
hnitið væri 0 fyrir þessa jöfnu. Ef við framlengjum fleygbogann
afturábak, þá lendir hann í :math:`y` = 0 við :math:`t = -0,16\,s.`

Nú þurfum við næst að athuga hversu langt boltinn fer áður en hann
lendir á jörðunni. Það finnum við með því að athuga hversu langt hann
fer í x-stefnu á 1,88  s:

:math:`L = v_x(1,88) = 15\cos(34\ensuremath{^\circ})\cdot 1,88` = 23,4 m.

Breytilegt hnitakerfi, pólhnit
------------------------------

Stundum er heppilegt að nota hnitakerfi sem breytist með tíma. Þetta
hljómar undarlega en í raun er það ekki svo skrítið. Hugsum okkur t.d.
hnitakerfi sem hefur :math:`x-`\ ás eftir yfirborði jarðar við
Lækjargötu og :math:`y-`\ ás beint upp. Þetta er hnitakerfi sem er á
ferð vegna þess að jörðin er að snúast um sjálfa sig og auk þess á
fleygiferð umhverfis sólina.

Pólhnit\*
~~~~~~~~~

Pólhnit, :math:`r`, :math:`\theta`, eru hnit sem oft eru notuð til þess
að lýsa hlutum sem eru að fara í hring. Við getum skrifað upp tengsl
þeirra við :math:`x,\,y-`\ hnit á eftirfarandi hátt:

.. math::

   \begin{equation}
    \left( \begin{array}{c} x(t) \\y(t) \end{array}\right) = \left( \begin{array}{c} r(t)\cos(\theta(t)) \\ r(t)\sin(\theta(t)) \end{array}\right)
   \end{equation}

Að sjálfsögðu getum við líka einangrað :math:`r` og :math:`\theta`:

.. math::

   \begin{equation}
   r(t) = \sqrt{x(t)^2 + y(t)^2}  \hspace{1 cm}  \theta(t) = \arctan(\frac{y(t)}{x(t)})
   \end{equation}

Hnitakerfið er byggt upp af einingavigrum í stefnu :math:`\vec{r}` og
einingavigri í stefnu hornsins :math:`\theta`, þ.e. hornrétt á vigurinn
:math:`\vec{r}`.

Einingavigur í stefnu vigursins
:math:`\vec{r(t)} = \left( \begin{array}{c} r(t)\cos(\theta(t)) \\ r(t)\sin(\theta(t))\end{array}\right)`
er:

.. math:: \vec{e}_r(t) = \vec{r(t)}/|\vec{r(t)}| =\vec{r(t)}/r(t) =  \left( \begin{array}{c} \cos(\theta(t)) \\ \sin(\theta(t))\end{array}\right)

Einingavigur hornrétt á :math:`\vec{r}`, þ.e. :math:`\vec{e}_{\theta}` í
stefnu hornsins er:

.. math:: \vec{e}_{\theta}(t) = \hat{e}_r(t) =  \left( \begin{array}{c} -\sin(\theta(t)) \\ \cos(\theta(t))\end{array}\right)

Hringhreyfing
~~~~~~~~~~~~~

Ef hlutur er að fara í hring þá er :math:`r(t) = r`, fasti. Við vitum að
ef við snúum steini í bandi þá fer steinninn í hring. Í raun erum við þá
alltaf að breyta hreyfingu steinsins, við erum að toga hann að okkur.
Við getum séð að hraði steinsins breytist inn að miðju hringsins.

|image1|

Hugsum okkur að hringurinn tákni feril steinsins og steinninn sé á
jafnri ferð :math:`v_0`. Reynum að athuga hver hröðun steinsins er þegar
steinninn er alveg við x-ásinn. Við sjáum að hraðinn við x-ásinn er:

.. math:: \vec{v}_1 =  \left( \begin{array}{c}  0\\ v_0\end{array}\right)

\ og hraðinn litlu síðar,

.. math:: \vec{v}_2 =  \left( \begin{array}{c} -v_0sin(\theta) \\ v_0cos(\theta)\end{array}\right)

Breytingin í hraðanum er þá:

.. math:: \Delta\vec{v} = \vec{v}_2 -\vec{v}_1 =  \left( \begin{array}{c} -v_0sin(\theta)-0 \\ v_0cos(\theta) -v_0\end{array}\right)

Nú var hugmyndin að skoða hröðun við x-ásinn. Við ætlum því að gera ráð
fyrir að :math:`\theta` sé mjög lítið horn. Þá er
:math:`\cos(\theta) \approx 1` og :math:`\sin(\theta) \approx \theta`.
Ef við setjum þetta inn í jöfnuna fyrir :math:`\Delta\vec{v}` fáum við:

.. math:: \Delta\vec{v}  =  \left( \begin{array}{c} -v_0\theta \\ 0\end{array}\right)

Bogalengdin :math:`\Delta s` sem steinninn fer þegar hann ferðast hornið
:math:`\theta` er annars vegar:

.. math:: \Delta s = r\theta

og hins vegar

.. math:: \Delta s = v_0 \Delta t

Ef við tökum þetta tvennt saman fáum við að:

.. math:: \Delta t = \frac{r\theta}{v_0}

.

Við fáum því að

.. math:: \vec{a}_{\theta = 0} = \lim_{\Delta t \to 0} \frac{\Delta\vec{v}}{\Delta t} = \lim_{\theta \to 0} \frac{ \left( \begin{array}{c} -v_0\theta \\ 0\end{array}\right)}{\frac{r\theta}{v_0}} = \left( \begin{array}{c} -\frac{v^2_0}{r} \\ 0\end{array}\right)

Svo hröðunin í þessum punkti á hringnum hefur stefnu inn að miðju
hringsins og stærðina :math:`\frac{v^2_0}{r}`.

Við gætum gert þetta í hvaða punkti hringsins sem væri, og því fengist
alltaf hröðun inn að miðju hringsins með stærð :math:`\frac{v^2_0}{r}`.

Útleiðsla á hröðun í hringhreyfingu með diffrun\*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(Má geyma ef ekki er búið að fara í diffrun.)

En við skulum nú fá almenna framsetningu og á hröðun í hringhreyfingu
með diffrun.

Hraði hlutar er diffurkvótinn af stöðunni og hröðun hlutar diffurkvóti
hraðans. Við skulum rifja upp nokkur atriði í sambandi við diffrun:

.. math:: \frac{d}{dt}\sin(\theta) = \cos(\theta)

.. math:: \frac{d}{dt}\cos(\theta) = -\sin(\theta)

Diffrun margfeldis:

.. math:: \frac{d}{dt}(f(t)\cdot g(t)) = \frac{d}{dt}f(t) \cdot g(t) + f(t)\cdot \frac{d}{dt}g(t)

Auk þess þurfum við að kunna svo kallaða *keðjureglu*.

.. math:: \frac{d}{dt}f(y(t)) = \frac{d}{dy}f(y)\frac{d}{dt}y(t)

Sem dæmi um keðjuregluna getum við tekið eftirfarandi:

.. math:: \frac{d}{dt}25\sin(t^2 -3t +5)  = 25\cos(t^2 -3t +5)\cdot\frac{d}{dt}(t^2 -3t +5)= 25\cos(t^2 -3t +5)\cdot(2t -3)

Ef hlutur snýst alltaf um jafnstórt horn á hverri tímaeiningu þá er
stærðin :math:`\omega = \frac{d\theta}{dt}` fasti og við getum skrifað
hornið :math:`\theta = \omega t +\phi`:

.. math:: \frac{d}{dt}r\sin(\omega t+\phi)  = r\cos(\omega t+\phi)\cdot\frac{d}{dt}(\omega t+\phi) = r\cos(\omega t+\phi)\cdot \omega = \omega r\cos(\omega t+\phi)

Ef hins vegar :math:`\omega = \frac{d\theta}{dt}` er ekki fasti heldur
breytilegt í tíma fáum við:

.. math:: \frac{d}{dt}r\sin(\theta(t))  = r\cos(\theta(t))\cdot\frac{d}{dt}(\theta( t)) = \omega(t) r\cos(\theta(t))

.. math:: \frac{d}{dt}r\cos(\theta(t))  = -r\sin(\theta(t))\cdot\frac{d}{dt}(\theta( t)) =  -\omega(t) r\sin(\theta(t))

.. container:: minipage

   .. container:: wrapfigure

      r2in

      |image2|

   Nú skulum við skoða hringhreyfingu þar sem

   :math:`r(t) =r`, :math:`\omega(t) = \frac{d\theta(t)}{dt}` og
   :math:`\alpha(t) = \frac{d\omega(t)}{dt}`:

   Við byrjum þá með stöðuvigur hlutar, :math:`\vec{r}(t)` og skrifum
   hann með pólhnitum:

   .. math::

      \begin{equation}
      \vec{r}(t) = \left( \begin{array}{c} r\cos(\theta(t)) \\ r\sin(\theta(t))
       \end{array}\right) = r\cdot \vec{e}_r(t)
      \end{equation}

   Síðan finnum við hraðavigurinn:

   .. math::

      \begin{equation}
      \vec{v}(t) =\frac{d}{dt}\vec{r}(t) = \frac{d}{dt}\left( \begin{array}{c} r\cos(\theta(t)) \\ r\sin(\theta(t))\end{array}\right)  = \left( \begin{array}{c} -\omega(t) r\sin(\theta(t)) \\  \omega(t) r\cos(\theta(t))\end{array}\right) = \omega(t)r\cdot\vec{e}_{\theta}(t)
      \end{equation}

   Nú getum við þá fundið hröðunarvigurinn en við þurfum að passa okkur
   því nú þarf að diffra margföldun:

   .. math::

      \begin{equation}
      \vec{a}(t) =\frac{d}{dt}\vec{v}(t) = \frac{d}{dt} \left( \begin{array}{c} -\omega(t)R\sin(\theta(t)) \\ \omega(t) r\cos(\theta(t))\end{array}\right) =\left( \begin{array}{c} -\alpha(t)r\sin(\theta(t))  - \omega(t)^2r\cos(\theta(t))\\ \alpha(t)r\sin(\theta(t))   -\omega(t)^2r\cos(\theta(t))\end{array}\right) 
      \end{equation}

Ef við skoðum nánar þessa vigra sjáum við að við getum skrifað þá:

.. math::

   \begin{equation}
   \vec{a}(t) = \alpha(t)r\cdot \vec{e}_{\theta}(t) - \omega^2(t)r \cdot \vec{e}_r(t)
   \end{equation}

Í hringhreyfingu er alltaf hröðun inn að miðju hringsins, í hverjum
punkti má rita hana:

.. math::

   \begin{equation}
   \vec{a}_r  = -\omega^2\vec{r} = -\frac{v^2}{r}\vec{e}_r
   \end{equation}

Heildarhröðun hlutar sem er á hringhreyfingu hefur tvo þætti. Annar
þátturinn er hröðun inn að miðju hringsins:
:math:`\vec{a}_r  = -\omega^2r\vec{e}_r` og hinn þátturinn er hröðun í
stefnu hraðans: :math:`\vec{a}_{\theta} = \alpha(t)r\vec{e}_{\theta}`.
Við komum til með að nota mikið jöfnuna fyrir hröðun inn að miðju
hringsins.

Fyrst þurfum við samt að læra lögmál Newtons.

Dæmi
----

1.
^^

Kjartan ferðast á sleða yfir ísilagða tjörn með jöfnum hraða, 4,0 m/s,
beint í norður. Allt í einu kemur vindhviða og úlpan hans Kjartans tekur
í sig vindinn þannig sleðinn fær meðalhröðun 0,12 m/s\ :math:`^2` til
vesturs í 3,0 s. Hver er hraðavigur og hver er ferð sleðans eftir þessar
3,0 s?

.. _section-1:

2.
^^

| Flugvél ferðast lárétt á jöfnum hraða, 115 m/s, í hæðinni 1050 m. Við
  veljum upp og til hægri sem jákvæðar stefnur og flugvélin flýgur til
  hægri. Nú er neyðarpakka sleppt úr flugvélinni og hann fellur til
  jarðar. Gerið ráð fyrir að loftmótstaða sé hverfandi.
| a) Hversu lengi er pakkinn á leiðinni til jarðar?
| b) Hversu langt frá lendingarstað er pakkanum sleppt?
| c) Hver er hraðavigur og hver er ferð pakkans þegar hann lendir?

.. _section-2:

3.
^^

Þórgunnur er að ferðast í blæjubíl sem er með blægjuna niðri. Bíllinn
ferðast á hraðanum 25 m/s og stefnir beint í austur. Þórgunnur kastar
lítilli málmkúlu beint upp með hraðanum 11 m/s. Hversu langt hefur
bíllinn færst þegar hú grípur aftur kúluna í sömu hæð? Skýrið af hveru
kúlan lendir í hendi Þórgunnar en ekki fyrir aftan bílinn!

.. _section-3:

4.
^^

Langstökkvari yfirgefur jörðina undir :math:`23\ensuremath{^\circ}`
horni við lárétt og ferðast 8,7 m lárétt áður en hann lendir aftur á
jörðunni í sömu hæð. Finnið upphafshraðavigurinn og upphafsferð
langstökkvarans.

.. _section-4:

5.
^^

| Kalli sparkar fótbolta í átt að marki sem er í 29 m fjarlægð frá
  boltanum þar sem hann liggur á jörðinni. Kalli sparkar boltanum þannig
  að hann fer upp undir :math:`32,0\ensuremath{^\circ}` horni við jörðu
  í átt að markinu, með ferð (tölugildi hraðavigurs) 19,0 m/s.
| a) Hver er hraði boltans samsíða jörðu?
| b) Í hvaða hæð grípur markmaðurinn boltann ef hann grípur boltan rétt
  við markið?
| c) Hver er hraðavigur boltans þegar markmaðurinn grípur hann?
| d) Hver er ferð boltans þegar markmaðurinn grípur hann?

.. _section-5:

6.
^^

Steini er kastað lárétt af þaki húss A með hraða :math:`v_0`. Öðrum
steini er kastað af þaki húss B líka lárétt með hraða :math:`v_0`.
Steinninn sem kastað er af þaki A fer tvisar sinnum lengra en steinninn
sem kastað er af þaki B. Hver er hlutfall hæðar húss A og hæðar húss B
(:math:`h_A/h_B`)?

.. _section-6:

7.
^^

| Jónatan er að spilla tennis við Huldu. Hulda er með boltann en Jónatan
  stendur rétt við netið í 10 m fjarlægð frá Huldu. Nú slær Hulda
  boltann þannig að hann fer upp undir :math:`50,0\ensuremath{^\circ}`
  horni með hraða 15,0 m/s. 0,30 s eftir að Hulda slær boltann byrjar
  Jónatan að hlaupa frá netinu í von um að ná að slá boltann tilbaka
  þegar hann er í hæðinni 2,10 m yfir upphafshæð (þeirri sem Hulda slær
  boltann).
| a) Hversu langur tími líður þar til boltinn er í 2,10 m á niðurleið?
| b) Hversu langt hefur boltinn þá farið lárétt frá Huldu?
| c) Hversu hratt þarf Jónatan að hlaupa til að ná boltanum í þessarri
  hæð?

.. _section-7:

8.
^^

| Flugvél á að sleppa matarpakka til manna sem eru staddir á palli úti í
  sjó. Flugvélin er að fljúga niður undir :math:`30\ensuremath{^\circ}`
  horni við lárétt á ferð 240 m/s. Þegar flugvélin er í 2400 m hæð, er
  pakkanum sleppt og hann lendir nákvæmlega á pallinum.
| a) Hversu langur tími líður frá því pakkanum er sleppt og þar til hann
  lendir?
| b) Hversu langt fer pakkinn í lárétta stefnu á þessum tíma?
| c) Hvert er hornið :math:`\alpha`?

|image3|

.. _section-8:

9.
^^

Vatn úr garðslöngu sem vísar upp 25\ :math:`\ensuremath{^\circ}` yfir
lárétt lendir beint á manni sem liggur í sólbaði á grasflötinni í 4,4 m
láréttri fjarlægð frá slönguopinu. Slöngunni er haldið þannig að vatnið
fer út í 1,4 m hæð yfir grasflötinni. Hver er ferð vatnsins þar sem það
kemur úr slöngunni?

.. _section-9:

10.
^^^

Lítil dolla hangir í þræði úr loftinu. Baunabyssu er skotið beint í
sjónlínu-átt að dollunni. Um leið og skotið hleypur af slitnar þráðurinn
og dollan byrjar að falla. Sýnið að ef gert er ráð fyrir að loftmótstaða
sé engin muni baunin alltaf lenda á dollunni, óháð upphafshraða
baunarinnar. (Það þarf þó að gera ráð fyrir að baunin nái x-stöðu
dollunnar áður en dollan lendir á gólfinu!)

.. _section-10:

11.
^^^

Riffli er skotið í átt að marki. Markið er í 91,4 m fjarlægð frá
riffilopinu og hraði kúlu sem kemur út úr rifflinum er 42,7 m/s. Ef
riffilinum er haldið þannig að kúlan komi úr rifflinum á móts við miðju
marksins, undir hvaða tveimur hornum, :math:`\theta`, er hægt að halla
rifflinum svo að kúlan hitti nákvæmlega í mark?

|image4|

.. _section-11:

12.
^^^

Bíll ekur í beygju sem hefur beygjuradíus 45 m. Hann ekur á jafnri ferð,
45 km/klst. Hver er hröðun bílsins?

.. _section-12:

13.
^^^

| Kappakstursbíll ekur eftir hringlaga braut. Brautin hefur radíus
  300 m. Bíllinn eykur ferð sína jafnt og þétt úr 20 m/s í 40 m/s á
  10 s.
| a) Hver er þáttur hröðunar hans eftir brautinni?
| b) Hver er hröðunarvigur hans í pólhnitum þegar hraði hans er 30 m/s?

Svör
^^^^

| 1) 4,01 m/s
| 2)
  a. 14,64 s,    b. 1683 m,    c. :math:`\begin{pmatrix} 115\\-143\end{pmatrix}` m/s;    184 m/s
| 3) 56 m
| 4) 10,9 m/s; :math:`\begin{pmatrix} 10,02\\4,25\end{pmatrix}`\ m/s
| 5)
  a. 16,1 m,    b. 2,25 m,    c. :math:`\begin{pmatrix}16,1\\-7,6\end{pmatrix}` m/s,    d. 17,8 m/s
| 6) 4
| 7) a. 2,15 s    b. 20,7 m    c. 5,8 m/s
| 8) a. 13,0 s    b. 2704 m    c. 41,6\ :math:`^\circ`
| 9) 5,77 m/s
| 11) 14,7\ :math:`^\circ`
| 12) 3,47 m/s\ :math:`^2` inn a miðju hrings
| 13) a. 2 m/s\ :math:`^2`    b. 3 m/s\ :math:`^2`

.. |image| image:: myndir/kafli04/kasthreyfing.png
   :width: 100%
.. |image1| image:: myndir/kafli04/centripedal.png
   :width: 3in
.. |image2| image:: myndir/kafli04/hringur.png
   :width: 2.3in
.. |image3| image:: myndir/kafli04/flugvel.png
   :width: 1.5in
.. |image4| image:: myndir/kafli04/riffill.png
   :width: 3in
