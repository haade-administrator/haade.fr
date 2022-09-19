---
guid: 2114
title: "Module de conversion usb uart ft232"
date: "2021-05-19"
layout: product
published: false
---

**Comment utiliser:** Dans le cas de travailler avec un MCU: VCCIO: sortie 3,3 V ou 5 V (le module est alimenté par USB, le cavalier intégré doit être court-circuité à 3,3 V ou 5 V) GND: GND TXD: MCU.RX (direction du signal: MCU.RX << FT232 << PC.TX) RXD: MCU.TX (direction du signal: MCU.TX >> FT232 >> PC.RX) RTS: MCU.CTS (direction du signal: MCU.CTS << FT232 << PC.RTS) CTS: MCU.RTS (direction du signal: MCU.RTS >> FT232 >> PC.CTS)

\[content-egg module=Aliexpress2 template=list\]
