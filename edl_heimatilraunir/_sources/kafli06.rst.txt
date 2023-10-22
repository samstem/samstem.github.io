Þriðja lögmál Keplers
---------------------

.. _inngangur-5:

Inngangur
~~~~~~~~~

Í þessari tilraun ætlum við að nota stjarnfræðiforritið Stellarium til
þess að sannreyna þriðja lögmál Keplers.

.. _tækjabúnaður-5:

Tækjabúnaður
~~~~~~~~~~~~

-  Ákjósanlegt en ekki nauðsynlegt: Forritið
   `Stellarium <http://stellarium.org/>`__ til að skoða sólkerfið okkar.

-  Snjallsími til að horfa á myndbönd.

-  Logger Pro til þess að myndgreina gögnin.

.. _leiðbeiningar-4:

Leiðbeiningar
~~~~~~~~~~~~~

Hlaðið niður forritinu `Stellarium <http://stellarium.org/>`__ og horfið
á leiðbeiningarnar á `YouTube <https://youtu.be/6xKXgL1irsY>`__.

.. _fræði-5:

Fræði
~~~~~

Pláneturnar eru á sporbraut um sólina (eins eru tunglin á sporbraut um
pláneturnar). Látum umferðartíma reikistjörnu vera táknaðann með
:math:`T`. Sporbrautir reikistjarnanna eru svo gott sem hringlaga. Látum
massa plánetunnar vera gefinn með :math:`m` og massa sólarinnar vera
:math:`M`. Þá segir þriðja lögmál Keplers að:

.. math::

   \begin{aligned}
       \frac{a^3}{T^2} = \frac{GM}{4\pi^2}.
   \end{aligned}

Þar sem að :math:`a` táknar langás reikistjörnunnar á sporbraut sinni um
sólina, þ.e.

.. math::

   \begin{aligned}
       a = \frac{r_{\text{min}}+r_{\text{max}}}{2}.
   \end{aligned}

Við getum umritað þriðja lögmálið þannig að það sé línulegt:

.. math::
   :label: 3Kepler

   \begin{aligned}
       a^3 = \frac{GM}{4\pi^2}T^2.
   \end{aligned}

.. _úrvinnsla-4:

Úrvinnsla
~~~~~~~~~

#. Notið Stellarium (eða myndböndin) til þess að gera töflu fyrir
   reikistjörnurnar:

   ========= ========= =========== ===========
   :math:`a` :math:`T` :math:`a^3` :math:`T^2`  
   ========= ========= =========== ===========
   \                                            
   ========= ========= =========== ===========

#. Gerið graf af :math:`a^3` sem fall af :math:`T^2` samkvæmt jöfnu
   :eq:`3Kepler` og ákvarðið massa sólarinnar með
   óvissu.

#. Notið Stellarium (eða myndböndin) til þess að gera sambærilega töflu
   fyrir tunglin umhverfis eina af reikistjörnunum. Ákvarðið massa
   reikistjörnunnar með óvissu.

.. |image| image:: figures/hell.png
   :width: 1.5in
