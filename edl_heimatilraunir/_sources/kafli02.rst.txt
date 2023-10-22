Skoppstuðull skopparabolta
--------------------------

.. _inngangur-1:

Inngangur
~~~~~~~~~

Í þessari tilraun ætlum við að ákvarða skoppstuðul skopparabolta. Takið
eftir að skoppstuðullinn er einnig háður fletinum sem boltinn skoppar á.
Þið getið prófað að gera þessa tilraun með mismunandi gerðum af
skopparaboltum til að sjá hversu ólíkir skoppstuðlar boltanna eru. Þið
getið einnig prófað að sleppa sama skopparabolta á tveim mismunandi
flötum, t.d. á annarsvegar parketi og hinsvegar flísum.

.. _tækjabúnaður-1:

Tækjabúnaður
~~~~~~~~~~~~

-  Snjallsími með forritinu ``phyphox``

-  Skopparabolti, fótbolti, handbolti, körfubolti.

.. _leiðbeiningar-1:

Leiðbeiningar
~~~~~~~~~~~~~

Opnið ``phyphox`` í símanum ykkar og veljið ``(In)elastic collision`` í
valmyndinni. Leggið símann á jörðina þar sem þið ætlið að sleppa
boltanum og smellið á þríhyrninginn, þ.e. ``play`` takkann til að hefja
mælingu. Sleppið síðan boltanum úr einhverri hæð þannig að hann skoppi
nálægt símanum (passið að skemma ekki símann) og þannig að fram kemur
mæling á skjáinn. Niðurstöður mælingarinnar munu gefa ykkur
upphafshæðina, :math:`h_0`, sem boltanum var sleppt úr og hæðirnar
:math:`h_n` sem boltinn náði eftir að hafa skoppað :math:`n` sinnum í
jörðina. Þið sjáið líka tímann :math:`t_n` sem leið milli
:math:`(n-1)`-ta og :math:`n`-ta skoppsins.

.. _fræði-1:

Fræði
~~~~~

Skoppstuðull skopparabolta er táknaður með :math:`\varepsilon` og er
skilgreindur þannig að

.. math::

   \begin{aligned}
       \varepsilon := \frac{v_\text{eftir}}{v_{\text{fyrir}}},
   \end{aligned}

þar sem að :math:`v_{\text{fyrir}}` táknar hraða boltans áður en hann
skoppar á jörðinni og :math:`v_{\text{eftir}}` táknar hraða boltans
þegar hann hefur skoppað á jörðinni. Við getum umritað þessa jöfnu á
eftirfarandi form

.. math::

   \begin{aligned}
       v_\text{eftir} = \varepsilon \, v_{\text{fyrir}}.
   \end{aligned}

Gerum ráð fyrir því að loftmótstaðan sem verkar á skopparaboltann sé
hverfandi. Með því að nota stöðujöfnurnar getum við sýnt að
:math:`v_\text{eftir} = \sqrt{2g \, h_\text{eftir}}` og
:math:`v_\text{fyrir} = \sqrt{2g \, h_\text{fyrir}}` en þar með höfum
við að:

.. math::

   \begin{aligned}
       \varepsilon = \frac{v_\text{eftir}}{v_{\text{fyrir}}} = \sqrt{\frac{h_\text{eftir}}{h_\text{fyrir}}}.
   \end{aligned}

Sem við getum umritað þannig að:

.. math::

   \begin{aligned}
       h_\text{eftir} = \varepsilon^2 \, h_\text{fyrir}.
   \end{aligned}

.. _úrvinnsla-1:

Úrvinnsla
~~~~~~~~~

#. Skráið hjá ykkur hvernig skopparabolta þið eruð að vinna með.

#. Gerið töflu með a.m.k. 8 ólíkum mælingum þar sem að þið skráið
   hæðirnar :math:`h_\text{fyrir}` og :math:`h_\text{eftir}`.

   +----------------------------------+----------------------------------+
   | :math:`h                         | :math:`h                         |
   | _\text{fyrir} \, \, [\SI{}{cm}]` | _\text{eftir} \, \, [\SI{}{cm}]` |
   +==================================+==================================+
   |                                  |                                  |
   +----------------------------------+----------------------------------+

#. Gerið graf af :math:`h_\text{eftir}` sem fall af
   :math:`h_\text{fyrir}`. Er grafið línulegt?

#. Ákvarðið skoppstuðul skopparaboltans.