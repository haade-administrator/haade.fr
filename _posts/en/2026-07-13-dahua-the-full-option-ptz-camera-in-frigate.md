---
guid: 177
title: "Dahua SD1A404DB-GNY the full option PTZ camera in Frigate"
description: "Test and integration of the Dahua SD1A404DB-GNY 4MP WizSense PTZ camera in Frigate with autotracking and Home Assistant, full technical specifications and PTZ functions"
ref: "SD1A404DB-GNY"
layout: post
authors: [Nico]
date: 2026-07-13 08:00
last_modified_at: 
categories: [Tests, Security, Home-Assistant]
tags: []
video: 
image: 'test-camera-ptz-dahua-sd1a404db-gny-frigate-home-assistant-en.png'
toc: true
beforetoc: ''
published: true
noindex: false
sitemap:
  changefreq: 'monthly'
  exclude: 'no'
  priority: 0.5 #between 0.0 to 1.0, 1.0 high priority
  lastmod:  # date to end modification
locale: en_GB
comments: true
rating: 4.6
sourcelink:
  - https://www.dahuasecurity.com/fr/products/network-products/pt-cameras/ip-pt-3-series/sd1/sd1a404db-gny
  - https://www.dahuasecurity.com/fr/products/network-products/pt-cameras/ip-pt-3-series/sd1/sd1a404db-gny-w
  - https://docs.frigate.video/configuration/autotracking/
  - https://docs.frigate.video/configuration/cameras/
---

Following my [Reolink Trackmix Poe camera test]({% post_url /en/2026-04-22-test-and-integration-camera-reolink-trackmix-poe-frigate-homeassistant %}), I mentioned **having found my ideal camera with a Dahua model**. Well, here we are! Let me introduce the **Dahua {{ page.ref }}**, a compact 4MP PTZ camera from the **WizSense** range that ticks all the boxes for a perfect integration into **Frigate** and **Home Assistant**. Autotracking, full ONVIF support, 120dB WDR, AI SMD 3.0... **all in an ultra-compact form factor.**

Why did I prefer this Dahua over the Reolink? Simple: **reduced dimensions**, **native ONVIF compatibility** with relative movement support (essential for Frigate autotracking), **complete video stream configuration** (compression, resolution, bitrate...) and an **unbeatable price-to-quality ratio** on Aliexpress at around €130-165 delivered.

{% include product-embed.html image="dahua-poe.png" title="Dahua SD1A404DB-GNY" brand="Dahua" description="4MP PTZ Camera Dahua SD1A404DB-GNY WizSense, 4x optical zoom, Starlight, SMD 3.0, IP66, IK08, PoE, built-in microphone" amazlink="3QL8b6Z" %}

## The Dahua Brand

Before diving into the subject, let me briefly introduce **Dahua Technology**. Founded in **2001 in Hangzhou, China** by Fu Liquan (former defense industry engineer), the company is today the **2nd largest video surveillance manufacturer worldwide** right behind Hikvision. Listed on the Shenzhen Stock Exchange since 2008, Dahua invests approximately **10% of its annual revenue in R&D**, which explains the constant level of innovation in their products.

**Key milestones:**

- **2002** — release of the world's first 8-channel real-time embedded DVR
- **Today** — global AIoT provider (video surveillance, machine vision, robotics, drones, smart cities)

Dahua stands out with **proprietary technologies** like **Starlight** (ultra-low light vision), **WizSense** (embedded AI) and **Smart H.265+** (intelligent compression). Build quality is excellent, housings are robust and sensors are top-notch.

{%- include alert.html type="info" text="Dahua offers a complete ecosystem with the <b>DMSS</b> smartphone app, the <b>SmartPSS</b> desktop software, and <b>ONVIF Profiles S, G and T</b> compatibility for interoperability with third-party systems." %}

> One thing I particularly like about Dahua is the **extremely comprehensive settings panel** in their cameras' web interface. Unlike Reolink where settings are limited, with Dahua you have full control over every video stream.

## Unboxing

I ordered the Dahua {{ page.ref }} [**on Aliexpress for about €171 delivered**](https://fr.aliexpress.com/item/1005001462325195.html?spm=a2g0o.productlist.main.3.1a72YUjNYUjNE6&algo_pvid=69f049bc-4b6f-49e9-ac20-296dbe2a9870&algo_exp_id=69f049bc-4b6f-49e9-ac20-296dbe2a9870-2&pdp_ext_f=%7B%22order%22%3A%2226%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21EUR%21213.36%21170.69%21%21%21237.52%21190.02%21%400b0fe0e117839218721461395e1ee2%2112000016215501598%21sea%21FR%212299046143%21X%211%210%21n_tag%3A-29919%3Bd%3A520a946f%3Bm03_new_user%3A-29895&curPageLogUid=dUpyz78sVp2F&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005001462325195%7C_p_origin_prod%3A){: target="_blank" }. The package arrived well protected, and inside you'll find:

- the {{ page.ref }} camera
- a roughly 1-meter RJ45 network cable
- a hardware kit with screws and wall plugs
- a drilling template
- a quick installation guide

{% picture posts/{{ page.guid }}/deballage-camera-dahua-sd1a404db-gny-ptz.png --alt unboxing and box contents of the Dahua SD1A404DB-GNY PTZ camera --img width="940" height="529" %}

The first impression is that of a **compact and well-finished product**. The housing is entirely made of aluminium and high-density ABS, the polycarbonate dome is firmly attached. You immediately feel a professional quality product.

{% include product-embed.html image="dahua-wifi.png" title="Dahua SD1A404DB-GNY-W" brand="Dahua" description="WiFi version of the 4MP PTZ camera Dahua SD1A404DB-GNY-W WizSense, 4x optical zoom, Starlight, SMD 3.0, IP66, IK08, PoE + WiFi" amazlink="4wCz9wQ" %}

## The {{ page.ref }} Camera

What immediately won me over with this camera is its **ultra-compact form factor**. With a diameter of only **128 mm** and a height of **65.4 mm** for a featherweight of **500 grams**, it's incomparably more discreet than the Reolink Trackmix Poe and its 228 x 147 x 110 mm for 1.21 kg. **Ideal for installation under a porch or on a facade without spoiling the aesthetics of the house.**

{% picture posts/{{ page.guid }}/detail-camera-dahua-sd1a404db-gny-compact-ptz.png --alt detail of the Dahua SD1A404DB-GNY PTZ camera compact size and optics --img width="940" height="529" %}

The Dahua {{ page.ref }} features a **1/2.8" 4 Megapixel CMOS sensor** coupled with a **4x optical zoom** (2.8-12mm). Thanks to **Starlight** technology, it goes down to **0.005 lux in colour** and **0.0005 lux in black and white**, allowing it to produce sharp images even in very low light conditions. The built-in infrared reaches up to **20 metres**.

1. Transparent polycarbonate dome
2. Built-in infrared LEDs
3. 4x optical zoom lens (2.8-12mm)
4. Built-in microphone
5. MicroSD slot (up to 512 GB)

{% picture posts/{{ page.guid }}/dimensions-camera-dahua-sd1a404db-gny-ptz.png --alt compact dimensions of the Dahua SD1A404DB-GNY PTZ camera comparison --img width="940" height="529" %}

> The major advantage of this camera is that it goes almost unnoticed, the dimensions are significantly smaller than the competition in this price range.

{% include product-embed.html image="dahua-poe.png" title="Dahua SD1A404DB-GNY" brand="Dahua" description="4MP PTZ Camera Dahua SD1A404DB-GNY WizSense, 4x optical zoom, Starlight, SMD 3.0, IP66, IK08, PoE, built-in microphone" amazlink="3QL8b6Z" %}

### Technical Specifications {{ page.ref }}

I've compiled below **all the technical specifications** so you can get a complete picture of the product.

**Sensor and Optics**

|Image Sensor|1/2.8" 4 Megapixel CMOS|
|Max Resolution|2560 × 1440 (4MP) at 25/30 fps|
|Lens|2.8 mm – 12 mm, F1.8|
|Optical Zoom|4x|
|Field of View|H: 96.9°–31.6°, V: 51.4°–17.8°, D: 116.2°–36.4°|
|Min. Illumination|0.005 lux @ F1.8 (colour), 0.0005 lux (B&W), 0 lux (IR)|
|WDR|120 dB|
|IR Night Vision|Up to 20 m (65.62 ft)|
|Technology|Starlight|

**Pan & Tilt**

|Pan Range|0° to 355°|
|Tilt Range|5° to 90°|
|Pan Speed|0.1°/s – 70°/s|
|Tilt Speed|0.1°/s – 30°/s|
|Presets|300 programmable positions|
|Tours/Patrols|8 tours (up to 32 presets per tour)|
|PTZ Protocol|DH-SD (native), ONVIF (external)|

**Compression and Network**

|Video Format|Smart H.265+ / H.265 / H.264+ / H.264|
|ONVIF|Profiles S, G, T|
|Protocols|RTSP, HTTP, HTTPS, ONVIF, TCP/IP, UDP|
|Ethernet Port|RJ45 10/100 Mbps|

**Artificial Intelligence (WizSense)**

|SMD 3.0|Smart Motion Detection (humans/vehicles)|
|Perimeter Protection|Tripwire, intrusion detection|
|Face Detection|Yes|
|People Counting|Yes (queue, area occupancy)|

**Audio and Storage**

|Audio|Built-in microphone (1 input / 1 output)|
|Local Storage|MicroSD slot (up to 512 GB)|

**Power and Protection**

|Power Supply|12V DC 2A / PoE (IEEE 802.3af)|
|Weatherproofing|IP66|
|Vandal Resistance|IK08|
|Operating Temperature|-30°C to +60°C|

**Dimensions and Weight**

|Dimensions|Ø128 mm × 65.4 mm (H)|
|Weight|500 g|

#### **Pros** {{ page.ref }}
{: .blue}

- Ultra-compact form factor (Ø128 mm, 500g)
- 4x motorised optical zoom
- WizSense AI SMD 3.0 (humans/vehicles)
- Full ONVIF Profiles S, G, T
- Starlight 0.005 lux
- 120 dB WDR
- 300 PTZ presets / 8 patrol tours
- IP66 + IK08
- PoE (single cable)
- Very comprehensive settings via web interface
- Compatible with Frigate autotracking

#### **Cons** {{ page.ref }}
{: .red}

- 4x zoom is limited (vs 25x on larger PTZ cameras)
- 355° pan (no continuous 360° rotation)
- 20m IR range (sufficient but modest)
- No white light projector (IR only)

## Dahua Web Interface

One of the **big strengths of Dahua** compared to Reolink is the web configuration interface. By connecting to the camera's IP address from your browser, you access an **extremely comprehensive settings panel**.

{% picture posts/{{ page.guid }}/interface-web-dahua-sd1a404db-gny-parametrage-flux.png --alt Dahua SD1A404DB-GNY web interface video stream settings --img width="940" height="529" %}

You can configure:

- **Video streams**: resolution, compression (H.264/H.265/H.265+), bitrate, FPS, CBR/VBR mode for each stream (main, sub, extra)
- **Detection zones**: tripwire, intrusion, SMD, people counting
- **PTZ presets**: up to 300 recordable positions
- **Patrol tours**: 8 programmable patrols
- **Audio**: mic volume, enable/disable
- **Network**: ONVIF, RTSP, ports, DDNS, NTP
- **Storage**: MicroSD recording, scheduling

{% picture posts/{{ page.guid }}/interface-web-dahua-sd1a404db-gny-detection-ia.png --alt Dahua SD1A404DB-GNY web interface AI detection SMD 3.0 configuration --img width="940" height="529" %}

> This level of configuration is a real advantage when integrating the camera into a system like Frigate, as you can optimise each stream independently.

## PTZ Functions

PTZ is the heart of this camera. **Pan-Tilt-Zoom**, three essential functions for active surveillance and target tracking.

### Pan and Tilt

The Dahua {{ page.ref }} offers a **pan range of 0° to 355°** with rotation speeds from **0.1°/s to 70°/s**. Tilt goes from **5° to 90°** at speeds of **0.1°/s to 30°/s**. Movements are **smooth and silent**, the motor is well calibrated and generates almost no noise even at high speed.

### 4x Optical Zoom

The **4x optical zoom** (2.8-12mm) allows you to switch from a wide-angle field of view of **96.9°** to a narrow field of **31.6°**. It's sufficient for residential surveillance or small businesses. For parking lot or large area surveillance, you'll need models with more substantial zoom (25x or 30x).

{%- include alert.html type="help" text="The zoom operates <b>continuously and smoothly</b> unlike Reolink cameras where zoom advances in increments when controlled via ONVIF. This is something I noted in my Reolink Trackmix Poe test." %}

### Presets and Patrols

You can program up to **300 preset positions** and **8 patrol tours** containing up to 32 presets each. This is particularly useful for:

- monitoring strategic zones at regular intervals
- defining a "home" (parking) position where the camera returns automatically
- creating automated surveillance rounds

### Autotracking via Frigate

The Dahua {{ page.ref }} doesn't have native autotracking, **but it's perfectly compatible with Frigate's software autotracking** thanks to its full ONVIF support, particularly `RelativePanTiltTranslationSpace`. This is precisely what differentiates it from Reolink where this ONVIF function is not operational.

![Frigate autotracking in action with the Dahua SD1A404DB-GNY camera person detection]({{ site.baseurl }}/assets/images/posts/{{ page.guid }}/autotracking-frigate-dahua-sd1a404db-gny-detection.webp{{ cachebuster }}){: width="640" height="360" class="lazyload pictaninpost"}

## Home Assistant Integration

Several methods are available to integrate the Dahua {{ page.ref }} into Home Assistant:

### Method 1: ONVIF Integration (built-in)

The simplest method, directly available in Home Assistant without additional installation.

{% include homeassistantlink.html integration="onvif" %}

In **Settings → Devices & Services → Add Integration → ONVIF**, enter:

- Camera **IP Address**
- **ONVIF Port**: 80 (default on Dahua)
- **Username** and **password**

You'll get: live stream, motion events, **PTZ control** (pan, tilt, zoom) and snapshots.

### Method 2: Dahua Integration via HACS (rroller/dahua)

For more advanced control, install the **Dahua** integration available in HACS:

[Link to the rroller/dahua GitHub repository](https://github.com/rroller/dahua){: target="_blank"}

This integration surfaces **IVS events** (smart detection), SMD alerts, alarm management and many additional sensor entities not available via ONVIF.

{% picture posts/{{ page.guid }}/integration-dahua-home-assistant-hacs-entites.png --alt Dahua integration in Home Assistant via HACS with many entities --img width="940" height="267" %}

### Method 3: Frigate + go2rtc (recommended)

This is the method I recommend and use daily. The complete stack is:

**Dahua Camera → go2rtc → Frigate → Home Assistant**

This architecture provides:
- **AI detection** (person, car, animal...)
- **low-latency streaming** via go2rtc/WebRTC
- **PTZ autotracking**
- full integration with HA via the **Frigate integration** (available in HACS)

{%- include alert.html type="warning" text="To use this method you'll need to install <b>Frigate</b>, <b>Mosquitto MQTT</b> and the <b>Frigate HACS</b> integration in Home Assistant." %}

## Frigate Integration

Let's get to the main course: **full integration into Frigate** with stream configuration, ONVIF and autotracking.

### Dahua RTSP Streams

RTSP URLs follow the standard Dahua format:

|Stream|URL|
|**Main Stream** (high resolution)|`rtsp://user:pass@IP/cam/realmonitor?channel=1&subtype=0`|
|**Sub Stream** (low resolution)|`rtsp://user:pass@IP/cam/realmonitor?channel=1&subtype=1`|
|**Extra Stream**|`rtsp://user:pass@IP/cam/realmonitor?channel=1&subtype=2`|

### Complete Frigate Code with Autotracking

Below is the **complete and functional configuration** I use for the Dahua {{ page.ref }} in Frigate, including go2rtc, video streams, ONVIF and autotracking:

{% highlight yaml %}
{% raw %}

# ============================================
# Frigate Configuration - Dahua SD1A404DB-GNY
# ============================================

# Hardware acceleration (adapt to your hardware)
ffmpeg:
  hwaccel_args: preset-vaapi
  output_args:
    record: preset-record-generic-audio-copy
  global_args: -hide_banner -loglevel warning

# Detector (Google Coral recommended)
detectors:
  coral:
    type: edgetpu
    device: pci

# go2rtc configuration
go2rtc:
  rtsp:
    username: [LOGIN]
    password: [PASS]
  webrtc:
    candidates:
      - [FRIGATE-IP]:8555
      - stun:8555

  streams:
    dahua_ptz_main:
      - ffmpeg:[LOGIN]:[PASS]@[CAMERA-IP]/cam/realmonitor?channel=1&subtype=0
      - rtsp://[LOGIN]:[PASS]@[CAMERA-IP]/cam/realmonitor?channel=1&subtype=0
    dahua_ptz_sub:
      - rtsp://[LOGIN]:[PASS]@[CAMERA-IP]/cam/realmonitor?channel=1&subtype=1

# Dahua SD1A404DB-GNY Camera
cameras:

  dahua_ptz:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/dahua_ptz_main
          input_args: preset-rtsp-restream
          roles:
            - record
            - audio
        - path: rtsp://127.0.0.1:8554/dahua_ptz_sub
          input_args: preset-rtsp-restream
          roles:
            - detect

    detect:
      width: 1280
      height: 720
      fps: 5

    live:
      streams:
        Main Stream: dahua_ptz_main
        Sub Stream: dahua_ptz_sub

    # ONVIF configuration for PTZ control
    onvif:
      host: [CAMERA-IP]
      port: 80
      user: [LOGIN]
      password: [PASS]

    # PTZ Autotracking
    autotracking:
      enabled: true
      calibrate_on_startup: false
      zooming: disabled
      zoom_factor: 0.3
      track:
        - person
        - car
      return_preset: home
      timeout: 10

    record:
      enabled: true
      retain:
        days: 7
      events:
        retain:
          default: 14

    snapshots:
      enabled: true
      retain:
        default: 14

{% endraw %}
{% endhighlight %}

### Code Explanations

**go2rtc** — we use go2rtc as a stream manager to avoid multiple connections to the camera. The main stream (subtype=0) at 4MP for recording, and the extra stream (subtype=2) at 720p for detection to **reduce CPU load**.

**onvif** — the ONVIF port is **80** on Dahua cameras (not 8000 as with some manufacturers). This is essential for PTZ control and autotracking.

**autotracking** — the above configuration enables autotracking that will automatically follow people and vehicles detected by Frigate by controlling the PTZ via ONVIF.

### Step-by-Step Autotracking Setup

{%- include alert.html type="warning" text="Before configuring autotracking in Frigate, you must first <b>create a PTZ preset named 'home'</b> in the Dahua camera web interface. This is the rest position the camera will return to after tracking." %}

**Step 1 — Create the "home" preset in the camera**

Log into the camera web interface → **PTZ** tab → position the camera to your desired default view → save the preset as **"home"**

**Step 2 — Enable ONVIF**

In the web interface: **Network → ONVIF** → enable the service and verify the port is **80**

**Step 3 — Initial calibration**

On first launch with `calibrate_on_startup: true`, Frigate will automatically rotate the camera in all directions to **calibrate movement speed and field of view**. Let it run, it takes about 1 minute.

**Step 4 — After calibration**

Once calibration succeeds, Frigate auto-populates `movement_weights` in your configuration. Then change `calibrate_on_startup: false` to avoid recalibrating on every restart.

{% highlight yaml %}
    # PTZ Autotracking
    autotracking:
      enabled: true
      calibrate_on_startup: true <====
      zooming: absolute
      zoom_factor: 0.3
      track:
        - person
        - car
      return_preset: home
      timeout: 10
{% endhighlight %}

> You'll need to recalibrate if you change the detection FPS, return preset, or zoom settings.

### Frigate Rendering

Once the configuration is in place, you'll find the Dahua {{ page.ref }} in the Frigate interface with all PTZ controls working: pan, tilt, zoom, presets and autotracking.

{% picture posts/{{ page.guid }}/rendu-camera-dahua-sd1a404db-gny-dans-frigate.png --alt Dahua SD1A404DB-GNY camera rendering in the Frigate interface with PTZ control --img width="940" height="451" %}

AI detection works perfectly, the Google Coral processes images from the 720p sub stream and identifies people and vehicles with excellent reliability thanks to **SMD 3.0** which pre-filters on the camera side.

### Frigate Card in Home Assistant

Thanks to the **advanced camera card custom card** available in HACS, you can integrate the Frigate stream directly into the Home Assistant dashboard with all PTZ controls.

{% highlight yaml %}
type: custom:advanced-camera-card
cameras:
  - camera_entity: camera.dahua_ptz
    live_provider: go2rtc
    go2rtc:
      modes:
        - webrtc
        - mse
frigate:
  url: http://[FRIGATE-IP]:5000
menu:
  style: outside
  position: bottom
  buttons:
    ptz:
      enabled: true
    microphone:
      enabled: true
      type: toggle
    screenshot:
      enabled: true
    clips:
      enabled: true
    snapshots:
      enabled: true
    timeline:
      enabled: true
    fullscreen:
      enabled: true
live:
  auto_unmute: []
  controls:
    builtin: true
    ptz:
      mode: frigate
dimensions:
  aspect_ratio_mode: static
  aspect_ratio: "16:9"
{% endhighlight %}

{% picture posts/{{ page.guid }}/rendu-carte-frigate-home-assistant-dahua-ptz.png --alt Frigate card rendering in Home Assistant for the Dahua SD1A404DB-GNY camera with PTZ control --img width="940" height="337" %}

Unlike the Reolink Trackmix Poe where zoom advanced jerkily, **with the Dahua zoom is smooth and continuous** when holding the + and - buttons, the ONVIF relative function is fully operational.

{% include product-embed.html image="dahua-poe.png" title="Dahua SD1A404DB-GNY" brand="Dahua" description="4MP PTZ Camera Dahua SD1A404DB-GNY WizSense, 4x optical zoom, Starlight, SMD 3.0, IP66, IK08, PoE, built-in microphone" amazlink="3QL8b6Z" %}

## WiFi Version {{ page.ref }}-W

Dahua also offers the **WiFi version** of this camera under the reference **SD1A404DB-GNY-W**. It retains all the characteristics of the PoE version with the addition of **WiFi connectivity**. Handy if you can't run a network cable to the desired location.

{%- include alert.html type="warning" text="For use with Frigate and continuous video recording, I strongly recommend the <b>wired PoE version</b>. WiFi can introduce latency and packet loss that impact RTSP stream quality." %}

{% include product-embed.html image="dahua-wifi.png" title="Dahua SD1A404DB-GNY-W" brand="Dahua" description="WiFi version of the 4MP PTZ camera Dahua SD1A404DB-GNY-W WizSense, 4x optical zoom, Starlight, SMD 3.0, IP66, IK08, PoE + WiFi" amazlink="4wCz9wQ" %}

## Connection Box

For a clean and waterproof installation, I recommend using a **dedicated junction box**. It allows you to neatly house the RJ45 and power cables while maintaining the IP66 waterproofing of the entire setup.

{% include product-embed.html image="boitier-derivation-connection-rangement-fil-camera-dahua.png" title="Connection Box" brand="NoName" description="Waterproof junction and connection box compatible with Dahua SD1A series camera" amazlink="4fpMDWG" %}

## Conclusion

The Dahua {{ page.ref }} is for me **the best PTZ camera in this price range** for a complete home automation integration. Where the Reolink Trackmix Poe falls short with its imposing dimensions and non-functional ONVIF autotracking in Frigate, the Dahua excels with its **ultra-compact form factor**, its **complete ONVIF support** and its **professional-grade settings panel**.

The integration into **Frigate with autotracking** works perfectly, PTZ control is smooth, the continuous zoom is a real joy to use compared to the competition. **WizSense AI SMD 3.0** adds an intelligent layer directly from the camera, and **Starlight** image quality with **120dB WDR** is impressive day and night.

> If you're looking for a compact, discreet PTZ camera that's 100% compatible with Frigate autotracking for your smart home, **the Dahua {{ page.ref }} is my unreserved recommendation.**
