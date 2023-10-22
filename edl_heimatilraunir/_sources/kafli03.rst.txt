Grunntónn vatnsflösku
---------------------

.. image:: figures/hell.png
  :width: 300
  :align: center

Inngangur
~~~~~~~~~

Þegar fólk blæs á flöskustút (hornrétt á ás flöskunnar) þá heyrist
blísturshljóð. Í þessari tilraun ætlum við að skoða hvernig grunntónn
flösku breytist þegar við fyllum hana með vatni. Markmið okkar er að
ákvarða hvernig tíðni hljóðsins sem myndast, :math:`f`, er háð rúmmáli
vatnsins, :math:`V_{\text{vatn}}`, í flöskunni.

.. _tækjabúnaður-2:

Tækjabúnaður
~~~~~~~~~~~~
 
-  Um það bil :math:`\SI{1}{L}` flaska sem hægt er að blása á stútinn á.

-  Millilítramál eða vog.

-  Snjallsími með forritinu ``phyphox``

-  Reglustika, reiknivél og millimetrapappír.

.. _fræði-2:

Fræði
~~~~~

Við ætlum að byrja á því að leiða út tíðni tónanna sem að myndast þegar
við blásum á flöskustút. Látum þverskurðarflatarmál stútsins vera
:math:`A` og látum hæð stútsins vera :math:`z`. Massi loftsins í
stúttnum er þá gefinn með :math:`m = \rho_{\text{loft}} A z` þar sem
:math:`\rho_{\text{loft}} = \SI{1.25}{kg/m^3}` er eðlismassi loftsins.
Þegar við blásum á stútinn þá fer loftið inn um vegalengd :math:`x` í
flöskuna sjálfa og rúmmál hennar breytist þá um :math:`Ax`. Þetta ferli
er óvermið (nánar um það hvað það þýðir eftir páska) svo að við höfum
eftirfarandi varðveislulögmál :math:`PV^\gamma = \text{fasti}` þar sem
:math:`\gamma` er fasti sem nefnist óvermnistuðullinn. Með því að taka
:math:`\ln` báðum meginn þá höfum við að
:math:`\ln(P) + \gamma \ln(V) = \text{fasti}`. Við athugum líka að hér
er :math:`V = V_0 - V_{\text{vatn}}` þar sem :math:`V` táknar
heildarrúmmálið sem er eftir í flöksunni og :math:`V_0` táknar
upphaflega rúmmál flöskunnar áður en við byrjuðum að fylla hana með
vatni. En þar með er:

.. math::

   \begin{aligned}
       & \ln(P+\Delta P) +\gamma \ln(V + \Delta V) = \ln(P) + \gamma \ln(V) \\
       \implies& \ln(P) + \frac{\Delta P}{P} + \gamma \ln(V) + \gamma \frac{\Delta V}{V}
       = \ln(P) + \gamma \ln(V)
   \end{aligned}

Þar sem við höfum notað að
:math:`f(x+\Delta x) \approx f(x) + f'(x)\Delta x`. En þar með ályktum
við að:

.. math::

   \begin{aligned}
       \Delta P = - \gamma \frac{\Delta V}{V}P_0.
   \end{aligned}

Þar sem :math:`P_0 = \SI{1}{atm}`. En þar með höfum við eftirfarandi
kraftajöfnu:

.. math::

   \begin{aligned}
      \rho_{\text{loft}} Az \ddot{x} = \Delta P A 
       = -\gamma \frac{\Delta V}{V} P_0 A 
       = - \frac{\gamma P_0 A^2}{V_0 - V_{\text{vatn}}}x
   \end{aligned}

Svo við ályktum að sveiflutíðni loftsins er gefin með:

.. math::
   :label: eq_tidni

   \begin{aligned}
   
       &\omega 
       = \sqrt{\frac{\gamma P_0 A}{\rho_{\text{loft}}z (V_0 - V_{\text{vatn}})}} \\
       \implies& f 
       = \frac{\omega }{2\pi} 
       = \frac{1}{2\pi}\sqrt{\frac{\gamma P_0 A}{\rho_{\text{loft}}z (V_0 - V_{\text{vatn}})}}
   \end{aligned}

Úrvinnsla og leiðbeiningar
~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Blásið á stútinn og skráið niður tíðni tónsins sem myndast með því að
   nota ``Audio Autocorrelation`` í forritinu ``phyphox``. Hellið síðan
   vatni í flöskuna til að breyta tóninum og skráið hjá ykkur
   vatnsmagnið sem þið hafið hellt í flöskuna.

#. Gerið viðeigandi graf í samræmi við jöfnu
   :eq:`eq_tidni` til þess að ákvarða óvermnistuðul
   loftsins, :math:`\gamma`.