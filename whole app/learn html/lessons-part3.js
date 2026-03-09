// Lesson Data - Part 3: Media, Forms, Block/Inline, Semantic
const lessonsPart3 = [
    // Phase 5: Media
    {
        id: 25, phase: 5, phaseTitle: "Media", title: "Audio Element",
        content: {
            explanation: [
                { en: "The <audio> tag embeds sound content. Unlike <img>, it's not self-closing and can contain fallback content and multiple <source> elements.", ar: "وسم <audio> يضمّن محتوى صوتي. على عكس <img>، إنه غير ذاتي الإغلاق ويمكن أن يحتوي على محتوى بديل وعناصر <source> متعددة." },
                { en: "The controls attribute adds play/pause, volume, and timeline controls. Without it, audio is invisible and can't be controlled by users.", ar: "سمة controls تضيف أزرار تشغيل/إيقاف، الصوت، والمخطط الزمني. بدونها، الصوت غير مرئي ولا يمكن التحكم فيه من قبل المستخدمين." },
                { en: "Common audio formats: MP3 (universal support), WAV (uncompressed, large), OGG (open format, some browser support), AAC (Apple, Safari).", ar: "صيغ الصوت الشائعة: MP3 (دعم شامل)، WAV (غير مضغوط، كبير)، OGG (صيغة مفتوحة، دعم بعض المتصفحات)، AAC (Apple، Safari)." },
                { en: "Use multiple <source> elements for browser compatibility. The browser will use the first format it supports.", ar: "استخدم عناصر <source> متعددة للتوافق مع المتصفحات. المتصفح سيستخدم أول صيغة يدعمها." },
                { en: "autoplay starts playing immediately (often blocked by browsers). loop repeats the audio. muted starts muted (helps autoplay work).", ar: "autoplay يبدأ التشغيل فوراً (غالباً يُحظر من المتصفحات). loop يكرر الصوت. muted يبدأ صامتاً (يساعد autoplay على العمل)." },
                { en: "preload attribute hints how much to load: 'none' (don't preload), 'metadata' (only duration/info), 'auto' (load entire file if possible).", ar: "سمة preload تلمّح كم يجب تحميله: 'none' (لا تحمّل)، 'metadata' (فقط المدة/المعلومات)، 'auto' (حمّل الملف بالكامل إن أمكن)." },
                { en: "Fallback content between <audio> and </audio> shows if the browser doesn't support audio. Include download links for accessibility.", ar: "المحتوى البديل بين <audio> و</audio> يظهر إذا لم يدعم المتصفح الصوت. أضف روابط التحميل لإمكانية الوصول." },
                { en: "JavaScript can control audio through the HTMLAudioElement API: play(), pause(), currentTime, volume, ended event, etc.", ar: "JavaScript يمكنه التحكم في الصوت عبر واجهة HTMLAudioElement: play()، pause()، currentTime، volume، حدث ended، إلخ." },
                { en: "For accessibility, provide transcripts for audio content. Deaf users can't hear audio, so text alternatives are essential.", ar: "لإمكانية الوصول، وفر نصوصاً مكتوبة للمحتوى الصوتي. المستخدمون الصم لا يستطيعون سماع الصوت، لذا البدائل النصية ضرورية." },
                { en: "Pro Tip: Never autoplay audio with sound! It's annoying, bad for accessibility, and most browsers block it anyway. Let users control playback.", ar: "نصيحة احترافية: لا تستخدم التشغيل التلقائي مع الصوت أبداً! إنه مزعج، سيء لإمكانية الوصول، ومعظم المتصفحات تحظره على أي حال. دع المستخدمين يتحكمون في التشغيل." }
            ],
            why: "Audio enhances user experience through podcasts, music, notifications, and voice content. Proper audio implementation ensures: 1) Cross-browser compatibility, 2) Accessibility for all users, 3) Good performance, 4) User control over playback!",
            whyAr: "الصوت يعزز تجربة المستخدم من خلال البودكاست، الموسيقى، الإشعارات، والمحتوى الصوتي. التنفيذ الصحيح للصوت يضمن: 1) التوافق عبر المتصفحات، 2) إمكانية الوصول لجميع المستخدمين، 3) أداء جيد، 4) تحكم المستخدم في التشغيل!",
            examples: [
                { level: "Beginner", code: "<!-- Basic audio with controls -->\n<audio controls>\n  <source src=\"song.mp3\" type=\"audio/mpeg\">\n  <source src=\"song.ogg\" type=\"audio/ogg\">\n  Your browser doesn't support audio. \n  <a href=\"song.mp3\">Download the audio</a>.\n</audio>", desc: "Audio player with multiple formats and fallback" },
                { level: "Intermediate", code: "<!-- Audio with attributes -->\n<audio controls preload=\"metadata\" loop>\n  <source src=\"background-music.mp3\" type=\"audio/mpeg\">\n</audio>\n\n<!-- Muted autoplay (for background) -->\n<audio autoplay muted loop id=\"bg-audio\">\n  <source src=\"ambient.mp3\" type=\"audio/mpeg\">\n</audio>\n<button onclick=\"document.getElementById('bg-audio').muted = false\">\n  Unmute 🔊\n</button>", desc: "Audio with loop, autoplay muted, and unmute button" },
                { level: "Advanced", code: "<!-- Custom audio player with JavaScript -->\n<audio id=\"player\" src=\"podcast.mp3\" preload=\"metadata\"></audio>\n\n<div class=\"audio-player\">\n  <button onclick=\"document.getElementById('player').play()\">▶ Play</button>\n  <button onclick=\"document.getElementById('player').pause()\">⏸ Pause</button>\n  <input type=\"range\" id=\"volume\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\"\n         onchange=\"document.getElementById('player').volume = this.value\">\n  <span id=\"time\">0:00 / 0:00</span>\n</div>\n\n<script>\n  const player = document.getElementById('player');\n  player.ontimeupdate = () => {\n    const current = formatTime(player.currentTime);\n    const duration = formatTime(player.duration);\n    document.getElementById('time').textContent = `${current} / ${duration}`;\n  };\n  function formatTime(s) {\n    return Math.floor(s/60) + ':' + String(Math.floor(s%60)).padStart(2,'0');\n  }\n</script>", desc: "Custom audio player with JavaScript controls" },
                { level: "Advanced", code: "<!-- Accessible audio with transcript -->\n<figure>\n  <audio controls>\n    <source src=\"interview.mp3\" type=\"audio/mpeg\">\n  </audio>\n  <figcaption>Interview with CEO - 15 minutes</figcaption>\n</figure>\n\n<details>\n  <summary>View Transcript</summary>\n  <div class=\"transcript\">\n    <p><strong>Host:</strong> Welcome to our podcast...</p>\n    <p><strong>CEO:</strong> Thank you for having me...</p>\n    <!-- Full transcript here -->\n  </div>\n</details>", desc: "Accessible audio with transcript for deaf users" }
            ],
            mistakes: [
                { bad: "<audio src=\"music.mp3\"></audio>", good: "<audio src=\"music.mp3\" controls></audio>", why: "Without 'controls', users can't see or interact with the audio player. Always add controls for user media." },
                { bad: "<audio autoplay src=\"song.mp3\" controls></audio>", good: "<audio src=\"song.mp3\" controls></audio>", why: "Autoplay with sound is blocked by browsers and annoys users. Let users click play themselves." },
                { bad: "<audio controls>\n  <source src=\"audio.mp3\">\n</audio>", good: "<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n</audio>", why: "Always specify type attribute on <source>. It helps browsers decide which format to use without downloading." },
                { bad: "<audio src=\"podcast.wav\" controls></audio>", good: "<audio controls>\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  <source src=\"podcast.ogg\" type=\"audio/ogg\">\n</audio>", why: "WAV files are huge (uncompressed). Use MP3 for size, and provide multiple formats for compatibility." }
            ],
            mcqs: [
                { q: "Which attribute adds player controls?", options: ["player", "controls", "buttons", "ui"], correct: 1 },
                { q: "What's the most compatible audio format?", options: ["WAV", "OGG", "MP3", "FLAC"], correct: 2 },
                { q: "What does preload='none' do?", options: ["Plays immediately", "Doesn't preload anything", "Mutes audio", "Hides controls"], correct: 1 },
                { q: "Is autoplay with sound allowed?", options: ["Yes always", "Usually blocked by browsers", "Only on mobile", "Only in Chrome"], correct: 1 },
                { q: "What makes audio accessible for deaf users?", options: ["Louder volume", "Transcripts", "Bigger controls", "Autoplay"], correct: 1 },
                { q: "Can you style audio controls with CSS?", options: ["Fully customizable", "Limited styling", "Need JavaScript for custom player", "No styling possible"], correct: 2 }
            ]
        }
    },
    {
        id: 26, phase: 5, phaseTitle: "Media", title: "Video Element",
        content: {
            explanation: [
                { en: "The <video> tag embeds video content. Like <audio>, it supports multiple sources, controls, and fallback content.", ar: "وسم <video> يضمّن محتوى الفيديو. مثل <audio>، يدعم مصادر متعددة، وأزرار التحكم، والمحتوى البديل." },
                { en: "Essential attributes: controls (shows player), width/height (sets dimensions), src (video source). Always specify dimensions to prevent layout shifts.", ar: "السمات الأساسية: controls (يظهر المشغل)، width/height (يحدد الأبعاد)، src (مصدر الفيديو). حدد الأبعاد دائماً لمنع تحولات التخطيط." },
                { en: "Common formats: MP4 (H.264, universal support), WebM (open format, modern browsers), OGG (older open format). MP4 is the safest choice.", ar: "الصيغ الشائعة: MP4 (H.264، دعم شامل)، WebM (صيغة مفتوحة، متصفحات حديثة)، OGG (صيغة مفتوحة قديمة). MP4 هو الخيار الأكثر أماناً." },
                { en: "poster attribute shows an image before playback starts. Great for thumbnails: <video poster=\"thumbnail.jpg\">", ar: "سمة poster تظهر صورة قبل بدء التشغيل. رائعة للصور المصغرة: <video poster=\"thumbnail.jpg\">" },
                { en: "playsinline attribute allows videos to play inline on mobile (iOS Safari). Without it, videos may open in fullscreen.", ar: "سمة playsinline تسمح للفيديوهات بالتشغيل المباشر على الجوال (iOS Safari). بدونها، قد تُفتح الفيديوهات في وضع ملء الشاشة." },
                { en: "autoplay with muted works (browsers allow muted autoplay). Common for hero sections: <video autoplay muted loop playsinline>", ar: "autoplay مع muted يعمل (المتصفحات تسمح بالتشغيل التلقائي الصامت). شائع لأقسام البطل: <video autoplay muted loop playsinline>" },
                { en: "For accessibility, add <track> elements for captions/subtitles. Use kind=\"captions\" for deaf users, kind=\"subtitles\" for translations.", ar: "لإمكانية الوصول، أضف عناصر <track> للتسميات التوضيحية/الترجمات. استخدم kind=\"captions\" للصم، kind=\"subtitles\" للترجمات." },
                { en: "preload options: 'none' (saves bandwidth), 'metadata' (loads duration/dimensions), 'auto' (browser decides). 'metadata' is a good default.", ar: "خيارات preload: 'none' (يوفر النطاق الترددي)، 'metadata' (يحمّل المدة/الأبعاد)، 'auto' (المتصفح يقرر). 'metadata' افتراضي جيد." },
                { en: "Video is resource-intensive. Consider: lazy loading for off-screen videos, compressed formats, adaptive bitrate streaming for long videos.", ar: "الفيديو يستهلك موارد كثيرة. افكر في: التحميل الكسول للفيديوهات خارج الشاشة، الصيغ المضغوطة، البث التكيفي للفيديوهات الطويلة." },
                { en: "Pro Tip: For background videos, always use muted + loop + playsinline + autoplay. Optimize video size - large videos kill page performance.", ar: "نصيحة احترافية: لفيديوهات الخلفية، استخدم دائماً muted + loop + playsinline + autoplay. حسّن حجم الفيديو - الفيديوهات الكبيرة تقتل أداء الصفحة." }
            ],
            why: "Video is the most engaging content type online. Proper implementation ensures: 1) Cross-browser playback, 2) Fast loading, 3) Accessibility with captions, 4) Good mobile experience. Video can make or break user engagement!",
            whyAr: "الفيديو هو أكثر أنواع المحتوى جاذبية عبر الإنترنت. التنفيذ الصحيح يضمن: 1) التشغيل عبر المتصفحات، 2) تحميل سريع، 3) إمكانية الوصول مع التسميات التوضيحية، 4) تجربة جوال جيدة. الفيديو قد يصنع أو يكسر تفاعل المستخدم!",
            examples: [
                { level: "Beginner", code: "<!-- Basic video player -->\n<video width=\"640\" height=\"360\" controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n  Your browser doesn't support video.\n</video>", desc: "Video with controls and multiple formats" },
                { level: "Intermediate", code: "<!-- Video with poster and preload -->\n<video width=\"800\" height=\"450\" controls\n       poster=\"thumbnail.jpg\"\n       preload=\"metadata\">\n  <source src=\"tutorial.mp4\" type=\"video/mp4\">\n  \n  <!-- Captions for accessibility -->\n  <track src=\"captions-en.vtt\" kind=\"captions\" \n         srclang=\"en\" label=\"English\" default>\n  <track src=\"captions-ar.vtt\" kind=\"captions\" \n         srclang=\"ar\" label=\"العربية\">\n</video>", desc: "Video with poster, preload, and captions" },
                { level: "Advanced", code: "<!-- Background video hero section -->\n<section class=\"hero\">\n  <video class=\"bg-video\" autoplay muted loop playsinline>\n    <source src=\"hero-bg.mp4\" type=\"video/mp4\">\n  </video>\n  <div class=\"hero-content\">\n    <h1>Welcome to Our Site</h1>\n    <p>Amazing things await</p>\n  </div>\n</section>\n\n<style>\n  .hero {\n    position: relative;\n    height: 100vh;\n    overflow: hidden;\n  }\n  .bg-video {\n    position: absolute;\n    top: 50%; left: 50%;\n    min-width: 100%; min-height: 100%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n    object-fit: cover;\n  }\n  .hero-content {\n    position: relative;\n    z-index: 1;\n    color: white;\n    text-align: center;\n    padding-top: 40vh;\n  }\n</style>", desc: "Full-screen background video" },
                { level: "Advanced", code: "<!-- Lazy-loaded video with Intersection Observer -->\n<video class=\"lazy-video\" data-src=\"video.mp4\" \n       width=\"640\" height=\"360\" controls preload=\"none\"\n       poster=\"placeholder.jpg\">\n</video>\n\n<script>\nconst videos = document.querySelectorAll('.lazy-video');\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const video = entry.target;\n      video.src = video.dataset.src;\n      video.load();\n      observer.unobserve(video);\n    }\n  });\n}, { threshold: 0.25 });\n\nvideos.forEach(video => observer.observe(video));\n</script>", desc: "Lazy loading video for performance" }
            ],
            mistakes: [
                { bad: "<video src=\"video.mp4\"></video>", good: "<video src=\"video.mp4\" controls width=\"640\" height=\"360\"></video>", why: "Without controls, users can't play/pause. Without dimensions, layout shifts during loading." },
                { bad: "<video autoplay src=\"video.mp4\" controls></video>", good: "<video autoplay muted loop playsinline src=\"video.mp4\"></video>", why: "Autoplay without muted is blocked. Add muted for autoplay, plus loop and playsinline for background videos." },
                { bad: "<video src=\"video.mp4\" controls width=\"1920\" height=\"1080\"></video>\n<!-- 50MB video file -->", good: "<video src=\"compressed-video.mp4\" controls width=\"640\" height=\"360\"></video>\n<!-- Compressed to 5MB -->", why: "Huge video files kill loading speed. Compress videos and use appropriate dimensions for display size." },
                { bad: "<video controls>\n  <source src=\"movie.mp4\">\n</video>", good: "<video controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <track src=\"captions.vtt\" kind=\"captions\" srclang=\"en\">\n</video>", why: "Missing type attribute and captions. Always specify type and add captions for accessibility." }
            ],
            mcqs: [
                { q: "What attributes control video size?", options: ["size", "dimensions", "width and height", "scale"], correct: 2 },
                { q: "Which format has best browser support?", options: ["WebM", "OGG", "MP4", "AVI"], correct: 2 },
                { q: "What shows before video plays?", options: ["preview", "poster", "thumbnail", "cover"], correct: 1 },
                { q: "What's needed for autoplay to work?", options: ["Nothing", "muted attribute", "loop attribute", "controls"], correct: 1 },
                { q: "What adds captions/subtitles?", options: ["<caption>", "<track>", "<subtitle>", "<text>"], correct: 1 },
                { q: "For background video, which attributes?", options: ["controls only", "autoplay muted loop playsinline", "src only", "poster"], correct: 1 }
            ]
        }
    },
    {
        id: 27, phase: 5, phaseTitle: "Media", title: "Iframe (Embedding)",
        content: {
            explanation: [
                { en: "<iframe> embeds external content from another source into your page: YouTube videos, Google Maps, other websites, or your own documents.", ar: "<iframe> يضمّن محتوى خارجي من مصدر آخر في صفحتك: فيديوهات YouTube، خرائط Google، مواقع أخرى، أو مستنداتك." },
                { en: "iframe stands for 'inline frame'. It creates a window within your page showing content from another URL.", ar: "iframe تعني 'إطار سطري'. ينشئ نافذة داخل صفحتك تعرض محتوى من رابط آخر." },
                { en: "Essential attributes: src (URL to embed), width/height (dimensions), title (accessibility description).", ar: "السمات الأساسية: src (الرابط للتضمين)، width/height (الأبعاد)، title (وصف إمكانية الوصول)." },
                { en: "YouTube, Vimeo, Google Maps provide embed codes. Click 'Share' > 'Embed' to get the <iframe> code ready to paste.", ar: "YouTube، Vimeo، Google Maps يوفرون أكواد التضمين. اضغط 'مشاركة' > 'تضمين' للحصول على كود <iframe> جاهز للصق." },
                { en: "allowfullscreen attribute enables fullscreen mode for embedded videos. Without it, the fullscreen button won't work.", ar: "سمة allowfullscreen تمكّن وضع ملء الشاشة للفيديوهات المضمنة. بدونها، زر ملء الشاشة لن يعمل." },
                { en: "loading=\"lazy\" defers loading of off-screen iframes. Great for performance when you have multiple embeds on a page.", ar: "loading=\"lazy\" يؤجل تحميل الإطارات خارج الشاشة. رائع للأداء عندما يكون لديك تضمينات متعددة على الصفحة." },
                { en: "Security: sandbox attribute restricts iframe capabilities. Use it to prevent embedded content from running scripts, forms, or navigating.", ar: "الأمان: سمة sandbox تقيّد قدرات الإطار. استخدمها لمنع المحتوى المضمن من تشغيل السكربتات أو النماذج أو التنقل." },
                { en: "Some sites block embedding with X-Frame-Options header. You can't embed Google, Facebook, or most major sites directly.", ar: "بعض المواقع تمنع التضمين بترويسة X-Frame-Options. لا يمكنك تضمين Google أو Facebook أو معظم المواقع الكبرى مباشرة." },
                { en: "For accessibility, always add a title attribute describing the iframe content. Screen readers announce this to users.", ar: "لإمكانية الوصول، أضف دائماً سمة title تصف محتوى الإطار. قارئات الشاشة تعلن هذا للمستخدمين." },
                { en: "Pro Tip: Iframes load separately and can slow your page. Use lazy loading, and consider facade pattern (show image, load iframe on click).", ar: "نصيحة احترافية: الإطارات تُحمّل بشكل منفصل وقد تبطئ صفحتك. استخدم التحميل الكسول، وفكر في نمط الواجهة (اعرض صورة، حمّل الإطار عند الضغط)." }
            ],
            why: "Iframes enable rich third-party content without building it yourself: maps, videos, payment forms, social feeds. Understanding iframes is essential for modern web integration!",
            whyAr: "الإطارات تمكّن محتوى خارجي غني بدون بنائه بنفسك: خرائط، فيديوهات، نماذج دفع، تغذيات اجتماعية. فهم الإطارات أساسي للتكامل مع الويب الحديث!",
            examples: [
                { level: "Beginner", code: "<!-- YouTube embed -->\n<iframe width=\"560\" height=\"315\"\n  src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\"\n  title=\"YouTube video player\"\n  frameborder=\"0\"\n  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n  allowfullscreen>\n</iframe>", desc: "YouTube video embed (standard code)" },
                { level: "Intermediate", code: "<!-- Google Maps embed -->\n<iframe \n  src=\"https://www.google.com/maps/embed?pb=!1m18!1m12...\"\n  width=\"600\" \n  height=\"450\" \n  style=\"border:0;\" \n  allowfullscreen=\"\" \n  loading=\"lazy\"\n  title=\"Company location on Google Maps\">\n</iframe>\n\n<!-- Responsive iframe wrapper -->\n<style>\n  .responsive-iframe {\n    position: relative;\n    padding-bottom: 56.25%; /* 16:9 ratio */\n    height: 0;\n    overflow: hidden;\n  }\n  .responsive-iframe iframe {\n    position: absolute;\n    top: 0; left: 0;\n    width: 100%; height: 100%;\n  }\n</style>\n<div class=\"responsive-iframe\">\n  <iframe src=\"...\" title=\"...\"></iframe>\n</div>", desc: "Google Maps with responsive wrapper" },
                { level: "Advanced", code: "<!-- Sandboxed iframe for security -->\n<iframe \n  src=\"https://external-widget.com/widget\"\n  sandbox=\"allow-scripts allow-same-origin\"\n  title=\"External widget\"\n  width=\"400\" height=\"300\">\n</iframe>\n\n<!-- Lazy-loaded facade pattern -->\n<div class=\"video-facade\" onclick=\"loadYouTube(this)\">\n  <img src=\"https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg\" alt=\"Video thumbnail\">\n  <button class=\"play-btn\">▶ Play</button>\n</div>\n\n<script>\nfunction loadYouTube(el) {\n  const iframe = document.createElement('iframe');\n  iframe.src = 'https://www.youtube.com/embed/VIDEO_ID?autoplay=1';\n  iframe.allow = 'autoplay; encrypted-media';\n  iframe.allowFullscreen = true;\n  el.replaceWith(iframe);\n}\n</script>", desc: "Security sandbox and performance facade pattern" }
            ],
            mistakes: [
                { bad: "<iframe src=\"https://youtube.com/watch?v=xxx\"></iframe>", good: "<iframe src=\"https://youtube.com/embed/xxx\" allowfullscreen title=\"Video title\"></iframe>", why: "Use /embed/ URL for YouTube, not /watch. Also add title for accessibility and allowfullscreen for video." },
                { bad: "<iframe src=\"widget.html\"></iframe>", good: "<iframe src=\"widget.html\" title=\"Contact form\" width=\"400\" height=\"300\"></iframe>", why: "Missing title (accessibility), width, and height. Always specify dimensions and describe content." },
                { bad: "<iframe src=\"untrusted-site.com/widget\"></iframe>", good: "<iframe src=\"untrusted-site.com/widget\" sandbox=\"allow-scripts\"></iframe>", why: "For untrusted content, use sandbox to limit what embedded content can do." }
            ],
            mcqs: [
                { q: "What does iframe stand for?", options: ["Internet frame", "Inline frame", "Image frame", "Input frame"], correct: 1 },
                { q: "Which attribute enables fullscreen?", options: ["fullscreen", "allowfullscreen", "enable-fullscreen", "fs"], correct: 1 },
                { q: "What prevents some sites from being embedded?", options: ["CSS", "X-Frame-Options header", "JavaScript", "HTML5"], correct: 1 },
                { q: "What attribute helps accessibility?", options: ["alt", "title", "description", "label"], correct: 1 },
                { q: "What does sandbox attribute do?", options: ["Adds styling", "Restricts iframe capabilities", "Enables fullscreen", "Adds loading"], correct: 1 },
                { q: "How to improve iframe performance?", options: ["Remove title", "Use loading='lazy'", "Add more iframes", "Increase size"], correct: 1 }
            ]
        }
    },
    // Phase 6: Forms
    {
        id: 28, phase: 6, phaseTitle: "Forms", title: "Form Tag Basics",
        content: {
            explanation: [
                { en: "The <form> element wraps all form inputs and defines how data is collected and submitted to a server.", ar: "عنصر <form> يغلف جميع مدخلات النموذج ويحدد كيفية جمع البيانات وإرسالها إلى الخادم." },
                { en: "action attribute specifies WHERE data is sent (URL/endpoint). method specifies HOW it's sent (GET or POST).", ar: "سمة action تحدد أين تُرسل البيانات (الرابط/نقطة النهاية). method تحدد كيف تُرسل (GET أو POST)." },
                { en: "GET method: Data appears in URL (?name=value). Good for searches, bookmarkable, limited size (~2000 chars), visible to everyone.", ar: "طريقة GET: البيانات تظهر في الرابط (?name=value). جيدة للبحث، قابلة للحفظ، حجم محدود (~2000 حرف)، مرئية للجميع." },
                { en: "POST method: Data sent in request body, not visible in URL. Use for sensitive data (passwords), file uploads, and large data.", ar: "طريقة POST: البيانات تُرسل في جسم الطلب، غير مرئية في الرابط. استخدمها للبيانات الحساسة (كلمات المرور)، رفع الملفات، والبيانات الكبيرة." },
                { en: "Every input needs a name attribute. Without it, the data won't be sent! <input name=\"email\"> sends email=value.", ar: "كل مدخل يحتاج سمة name. بدونها، البيانات لن تُرسل! <input name=\"email\"> يرسل email=value." },
                { en: "enctype attribute: 'application/x-www-form-urlencoded' (default), 'multipart/form-data' (required for file uploads), 'text/plain'.", ar: "سمة enctype: 'application/x-www-form-urlencoded' (افتراضي)، 'multipart/form-data' (مطلوب لرفع الملفات)، 'text/plain'." },
                { en: "The submit button (<input type=\"submit\"> or <button type=\"submit\">) triggers form submission. Without it, users can't submit.", ar: "زر الإرسال (<input type=\"submit\"> أو <button type=\"submit\">) يفعّل إرسال النموذج. بدونه، المستخدمون لا يستطيعون الإرسال." },
                { en: "novalidate attribute disables browser's built-in validation. Useful when you want custom JavaScript validation only.", ar: "سمة novalidate تعطّل التحقق المدمج في المتصفح. مفيدة عندما تريد تحقق JavaScript مخصص فقط." },
                { en: "autocomplete=\"on/off\" controls browser autofill. 'off' for sensitive fields, 'on' for convenience (name, email, address).", ar: "autocomplete=\"on/off\" يتحكم في الملء التلقائي للمتصفح. 'off' للحقول الحساسة، 'on' للراحة (الاسم، البريد، العنوان)." },
                { en: "Pro Tip: In modern apps, forms often use JavaScript (fetch/AJAX) instead of traditional submission. But understanding form basics is essential!", ar: "نصيحة احترافية: في التطبيقات الحديثة، النماذج غالباً تستخدم JavaScript (fetch/AJAX) بدلاً من الإرسال التقليدي. لكن فهم أساسيات النماذج ضروري!" }
            ],
            why: "Forms are how users interact with websites: logging in, signing up, searching, submitting data. Understanding forms is fundamental to web development!",
            whyAr: "النماذج هي كيفية تفاعل المستخدمين مع المواقع: تسجيل الدخول، التسجيل، البحث، إرسال البيانات. فهم النماذج أساسي لتطوير الويب!",
            examples: [
                { level: "Beginner", code: "<!-- Basic contact form -->\n<form action=\"/submit\" method=\"POST\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\" required>\n  \n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n  \n  <label for=\"message\">Message:</label>\n  <textarea id=\"message\" name=\"message\"></textarea>\n  \n  <button type=\"submit\">Send</button>\n</form>", desc: "Basic contact form with POST method" },
                { level: "Intermediate", code: "<!-- Search form with GET -->\n<form action=\"/search\" method=\"GET\">\n  <input type=\"search\" name=\"q\" placeholder=\"Search...\">\n  <button type=\"submit\">🔍 Search</button>\n</form>\n<!-- Submits to: /search?q=user+query -->\n\n<!-- File upload form -->\n<form action=\"/upload\" method=\"POST\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"document\" accept=\".pdf,.doc\">\n  <button type=\"submit\">Upload</button>\n</form>", desc: "GET for search, POST with file upload" },
                { level: "Advanced", code: "<!-- Modern form with JavaScript handling -->\n<form id=\"login-form\">\n  <input type=\"email\" name=\"email\" required>\n  <input type=\"password\" name=\"password\" required>\n  <button type=\"submit\">Login</button>\n</form>\n\n<script>\ndocument.getElementById('login-form').addEventListener('submit', async (e) => {\n  e.preventDefault(); // Stop normal submit\n  const formData = new FormData(e.target);\n  \n  try {\n    const response = await fetch('/api/login', {\n      method: 'POST',\n      body: JSON.stringify(Object.fromEntries(formData)),\n      headers: { 'Content-Type': 'application/json' }\n    });\n    const data = await response.json();\n    console.log('Success:', data);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n});\n</script>", desc: "JavaScript form handling with fetch API" }
            ],
            mistakes: [
                { bad: "<form>\n  <input type=\"text\">\n  <button>Submit</button>\n</form>", good: "<form action=\"/submit\" method=\"POST\">\n  <input type=\"text\" name=\"username\">\n  <button type=\"submit\">Submit</button>\n</form>", why: "Missing action (where to send), method (how to send), name on input (what to send), and type on button." },
                { bad: "<form method=\"GET\">\n  <input type=\"password\" name=\"pass\">\n</form>", good: "<form method=\"POST\">\n  <input type=\"password\" name=\"pass\">\n</form>", why: "NEVER send passwords with GET - they appear in the URL and browser history! Always use POST for sensitive data." },
                { bad: "<form action=\"/upload\" method=\"POST\">\n  <input type=\"file\" name=\"doc\">\n</form>", good: "<form action=\"/upload\" method=\"POST\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"doc\">\n</form>", why: "File uploads require enctype=\"multipart/form-data\". Without it, only filename is sent, not the file!" }
            ],
            mcqs: [
                { q: "Which method is for sensitive data?", options: ["GET", "POST", "PUT", "DELETE"], correct: 1 },
                { q: "What attribute specifies where data is sent?", options: ["method", "action", "target", "destination"], correct: 1 },
                { q: "GET method puts data where?", options: ["In request body", "In URL", "In cookies", "Nowhere"], correct: 1 },
                { q: "What's required for file uploads?", options: ["method='FILE'", "enctype='multipart/form-data'", "type='upload'", "file='true'"], correct: 1 },
                { q: "What attribute on inputs sends data?", options: ["id", "class", "name", "value"], correct: 2 },
                { q: "What disables browser validation?", options: ["validate='false'", "novalidate", "no-check", "skip-validation"], correct: 1 }
            ]
        }
    },
    {
        id: 29, phase: 6, phaseTitle: "Forms", title: "Input Types",
        content: {
            explanation: [
                { en: "HTML5 provides 20+ input types. Each type provides: specific keyboard on mobile, built-in validation, and appropriate UI controls.", ar: "HTML5 يوفر 20+ نوع إدخال. كل نوع يوفر: لوحة مفاتيح محددة على الجوال، تحقق مدمج، وعناصر تحكم واجهة مناسبة." },
                { en: "text: Basic single-line text. email: Validates email format, shows @ keyboard on mobile. password: Hides characters as dots.", ar: "text: نص سطر واحد أساسي. email: يتحقق من صيغة البريد، يظهر لوحة مفاتيح @ على الجوال. password: يخفي الحروف كنقاط." },
                { en: "number: Only numbers allowed, shows numeric keyboard. Has min, max, step attributes. tel: Phone number input, triggers phone keyboard.", ar: "number: أرقام فقط مسموحة، يظهر لوحة أرقام. له سمات min، max، step. tel: إدخال رقم هاتف، يفعّل لوحة الهاتف." },
                { en: "date, time, datetime-local: Native date/time pickers. Excellent UX on mobile, but styling is browser-dependent.", ar: "date، time، datetime-local: محددات تاريخ/وقت أصلية. تجربة مستخدم ممتازة على الجوال، لكن التنسيق يعتمد على المتصفح." },
                { en: "checkbox: Multiple selections possible. radio: Single selection from group (same name attribute). Both use checked attribute.", ar: "checkbox: اختيارات متعددة ممكنة. radio: اختيار واحد من مجموعة (نفس سمة name). كلاهما يستخدم سمة checked." },
                { en: "file: File upload. Use accept to filter types (.pdf, image/*). multiple allows selecting several files.", ar: "file: رفع ملف. استخدم accept لتصفية الأنواع (.pdf، image/*). multiple يسمح باختيار عدة ملفات." },
                { en: "range: Slider control between min and max. color: Color picker. search: Like text but with clear button and search styling.", ar: "range: شريط تمرير بين min وmax. color: منتقي الألوان. search: مثل text لكن مع زر مسح وتنسيق بحث." },
                { en: "url: Validates URL format. hidden: Invisible field for passing data. submit/reset/button: Form action buttons.", ar: "url: يتحقق من صيغة الرابط. hidden: حقل غير مرئي لتمرير البيانات. submit/reset/button: أزرار إجراءات النموذج." },
                { en: "Common attributes: placeholder (hint text), required (mandatory), disabled (can't interact), readonly (can't edit), value (default value).", ar: "السمات الشائعة: placeholder (نص تلميح)، required (إلزامي)، disabled (لا يمكن التفاعل)، readonly (لا يمكن التعديل)، value (القيمة الافتراضية)." },
                { en: "Pro Tip: Always use the most specific input type! It improves UX (right keyboard), accessibility, and gets free validation.", ar: "نصيحة احترافية: استخدم دائماً نوع الإدخال الأكثر تحديداً! يحسن تجربة المستخدم (اللوحة الصحيحة)، وإمكانية الوصول، ويحصل على تحقق مجاني." }
            ],
            why: "Choosing the right input type dramatically improves user experience: mobile keyboards, native pickers, built-in validation. Smart input types = fewer errors!",
            whyAr: "اختيار نوع الإدخال الصحيح يحسن تجربة المستخدم بشكل كبير: لوحات مفاتيح الجوال، المحددات الأصلية، التحقق المدمج. أنواع الإدخال الذكية = أخطاء أقل!",
            examples: [
                { level: "Beginner", code: "<!-- Common input types -->\n<input type=\"text\" placeholder=\"Your name\">\n<input type=\"email\" placeholder=\"email@example.com\">\n<input type=\"password\" placeholder=\"Password\">\n<input type=\"tel\" placeholder=\"+1 234 567 8900\">\n<input type=\"number\" min=\"0\" max=\"100\" step=\"5\">\n<input type=\"url\" placeholder=\"https://...\">\n<input type=\"search\" placeholder=\"Search...\">\n<input type=\"hidden\" name=\"token\" value=\"abc123\">", desc: "Text, email, password, tel, number, url input types" },
                { level: "Intermediate", code: "<!-- Date and time inputs -->\n<label>Date: <input type=\"date\"></label>\n<label>Time: <input type=\"time\"></label>\n<label>DateTime: <input type=\"datetime-local\"></label>\n<label>Month: <input type=\"month\"></label>\n<label>Week: <input type=\"week\"></label>\n\n<!-- Selection inputs -->\n<label>Color: <input type=\"color\" value=\"#ff0000\"></label>\n<label>Range: <input type=\"range\" min=\"0\" max=\"100\" value=\"50\"></label>\n\n<!-- File input -->\n<label>Upload: <input type=\"file\" accept=\"image/*\" multiple></label>", desc: "Date, time, color, range, and file inputs" },
                { level: "Advanced", code: "<!-- Checkbox group -->\n<fieldset>\n  <legend>Select toppings:</legend>\n  <label><input type=\"checkbox\" name=\"toppings\" value=\"cheese\" checked> Cheese</label>\n  <label><input type=\"checkbox\" name=\"toppings\" value=\"pepperoni\"> Pepperoni</label>\n  <label><input type=\"checkbox\" name=\"toppings\" value=\"mushrooms\"> Mushrooms</label>\n</fieldset>\n\n<!-- Radio group -->\n<fieldset>\n  <legend>Choose size:</legend>\n  <label><input type=\"radio\" name=\"size\" value=\"small\"> Small</label>\n  <label><input type=\"radio\" name=\"size\" value=\"medium\" checked> Medium</label>\n  <label><input type=\"radio\" name=\"size\" value=\"large\"> Large</label>\n</fieldset>\n\n<!-- Custom styled range with value display -->\n<label>\n  Volume: <input type=\"range\" id=\"vol\" min=\"0\" max=\"100\" oninput=\"this.nextElementSibling.value = this.value\">\n  <output>50</output>\n</label>", desc: "Checkbox, radio groups, and interactive range" }
            ],
            mistakes: [
                { bad: "<input type=\"text\" placeholder=\"Enter email\">", good: "<input type=\"email\" placeholder=\"Enter email\" required>", why: "Use type=\"email\" for emails! Gets validation, @ keyboard on mobile. Don't use text for specific data types." },
                { bad: "<input type=\"radio\" name=\"option1\">\n<input type=\"radio\" name=\"option2\">", good: "<input type=\"radio\" name=\"choice\" value=\"a\">\n<input type=\"radio\" name=\"choice\" value=\"b\">", why: "Radio buttons must share the SAME name to work as a group. Different names means all can be selected." },
                { bad: "<input type=\"number\" value=\"abc\">", good: "<input type=\"number\" min=\"1\" max=\"100\" value=\"1\">", why: "Number inputs need numeric values and should have min/max constraints for validation." }
            ],
            mcqs: [
                { q: "Which type validates email format?", options: ["text", "mail", "email", "contact"], correct: 2 },
                { q: "Which input shows a date picker?", options: ["calendar", "datepicker", "date", "datetime"], correct: 2 },
                { q: "For radio buttons to work together, they need?", options: ["Same id", "Same name", "Same class", "Same value"], correct: 1 },
                { q: "Which input allows multiple file selection?", options: ["file multiple", "multifile", "files", "type='file' multiple"], correct: 3 },
                { q: "What shows a slider UI?", options: ["slider", "range", "scale", "bar"], correct: 1 },
                { q: "Which type hides the input value?", options: ["hidden", "password", "secret", "private"], correct: 1 }
            ]
        }
    },
    {
        id: 30, phase: 6, phaseTitle: "Forms", title: "Labels",
        content: {
            explanation: [
                { en: "The <label> element associates text with a form input. It's essential for accessibility and improves usability.", ar: "عنصر <label> يربط النص بمدخل النموذج. إنه ضروري لإمكانية الوصول ويحسن قابلية الاستخدام." },
                { en: "Two ways to link labels: 1) for attribute matches input's id, 2) Wrap input inside label element.", ar: "طريقتان لربط التسميات: 1) سمة for تطابق id المدخل، 2) غلّف المدخل داخل عنصر label." },
                { en: "Method 1: <label for=\"email\">Email:</label><input id=\"email\"> - Explicit association, works anywhere on page.", ar: "الطريقة 1: <label for=\"email\">البريد:</label><input id=\"email\"> - ربط صريح، يعمل في أي مكان بالصفحة." },
                { en: "Method 2: <label>Email: <input type=\"email\"></label> - Implicit association, keeps markup together.", ar: "الطريقة 2: <label>البريد: <input type=\"email\"></label> - ربط ضمني، يحافظ على الكود معاً." },
                { en: "Clicking a label focuses its associated input! This increases the clickable area, especially helpful for checkboxes and radios.", ar: "الضغط على التسمية يركز على المدخل المرتبط بها! هذا يزيد مساحة الضغط، مفيد خاصة للمربعات والأزرار." },
                { en: "Screen readers announce labels when users focus on inputs. Without labels, screen readers only say 'edit text' with no context!", ar: "قارئات الشاشة تعلن التسميات عند تركيز المستخدم على المدخلات. بدون تسميات، القارئات تقول فقط 'تحرير نص' بدون سياق!" },
                { en: "Labels are required for accessibility compliance (WCAG). Every input needs an associated label or aria-label.", ar: "التسميات مطلوبة لامتثال إمكانية الوصول (WCAG). كل مدخل يحتاج تسمية مرتبطة أو aria-label." },
                { en: "For hidden inputs (like checkboxes styled as toggle switches), labels are the ONLY way users can understand the control.", ar: "للمدخلات المخفية (مثل المربعات المُنسقة كمفاتيح تبديل)، التسميات هي الطريقة الوحيدة ليفهم المستخدمون العنصر." },
                { en: "Don't put interactive elements inside labels (buttons, links). The click behavior becomes unpredictable.", ar: "لا تضع عناصر تفاعلية داخل التسميات (أزرار، روابط). سلوك الضغط يصبح غير متوقع." },
                { en: "Pro Tip: Always style labels to look clickable (cursor: pointer). Users expect to click them!", ar: "نصيحة احترافية: نسّق التسميات دائماً لتبدو قابلة للضغط (cursor: pointer). المستخدمون يتوقعون الضغط عليها!" }
            ],
            why: "Labels are crucial for accessibility - blind users DEPEND on them! They also improve UX by making forms easier to use for everyone.",
            whyAr: "التسميات حاسمة لإمكانية الوصول - المستخدمون المكفوفون يعتمدون عليها! كما أنها تحسن تجربة المستخدم بجعل النماذج أسهل للجميع.",
            examples: [
                { level: "Beginner", code: "<!-- Method 1: for/id association -->\n<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\">\n\n<!-- Method 2: Wrapping -->\n<label>\n  Password:\n  <input type=\"password\" name=\"password\">\n</label>", desc: "Two ways to associate labels with inputs" },
                { level: "Intermediate", code: "<!-- Labels make checkboxes/radios much easier to click -->\n<label>\n  <input type=\"checkbox\" name=\"agree\"> \n  I agree to the terms and conditions\n</label>\n\n<!-- Multiple radios with labels -->\n<fieldset>\n  <legend>Preferred contact:</legend>\n  <label><input type=\"radio\" name=\"contact\" value=\"email\"> Email</label>\n  <label><input type=\"radio\" name=\"contact\" value=\"phone\"> Phone</label>\n  <label><input type=\"radio\" name=\"contact\" value=\"sms\"> SMS</label>\n</fieldset>", desc: "Labels with checkboxes and radio buttons" },
                { level: "Advanced", code: "<!-- Styled form with proper labels -->\n<style>\n  .form-group { margin-bottom: 15px; }\n  .form-group label {\n    display: block;\n    margin-bottom: 5px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  .form-group input {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n  .form-group input:focus {\n    border-color: #4f46e5;\n    outline: none;\n    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);\n  }\n</style>\n\n<div class=\"form-group\">\n  <label for=\"email\">Email Address</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n</div>", desc: "Styled form input with accessible label" }
            ],
            mistakes: [
                { bad: "Email: <input type=\"email\" id=\"email\">", good: "<label for=\"email\">Email:</label>\n<input type=\"email\" id=\"email\">", why: "Text without <label> isn't associated with input. Screen readers can't tell users what the field is for." },
                { bad: "<label>Email</label>\n<input type=\"email\">", good: "<label for=\"email\">Email</label>\n<input type=\"email\" id=\"email\">", why: "Label without 'for' attribute isn't connected to input. Add matching for/id pair." },
                { bad: "<input type=\"checkbox\" id=\"agree\">\nI agree to the terms", good: "<label>\n  <input type=\"checkbox\" id=\"agree\">\n  I agree to the terms\n</label>", why: "Text next to checkbox isn't clickable without label. Wrap both in <label> for better UX." }
            ],
            mcqs: [
                { q: "How do you link a label to an input?", options: ["name attribute", "for and id", "class", "link attribute"], correct: 1 },
                { q: "What happens when you click a label?", options: ["Nothing", "Opens dialog", "Focuses the associated input", "Submits form"], correct: 2 },
                { q: "Which method wraps input inside label?", options: ["Explicit", "Implicit", "External", "Internal"], correct: 1 },
                { q: "Why are labels important for accessibility?", options: ["Styling", "Screen readers need them", "Required by browsers", "For animations"], correct: 1 },
                { q: "Can you nest buttons inside labels?", options: ["Yes", "No, avoid it", "Only in forms", "Only with CSS"], correct: 1 }
            ]
        }
    },
    {
        id: 31, phase: 6, phaseTitle: "Forms", title: "Textarea",
        content: {
            explanation: [{ en: "The <textarea> element creates multi-line text input areas.", ar: "عنصر <textarea> ينشئ مناطق إدخال نص متعددة الأسطر." }],
            examples: [{ level: "Beginner", code: "<textarea rows=\"5\" cols=\"40\" placeholder=\"Enter message\"></textarea>", desc: "Textarea" }],
            mcqs: [{ q: "Which attributes control textarea size?", options: ["width/height", "size", "rows/cols", "dimension"], correct: 2 }]
        }
    },
    {
        id: 32, phase: 6, phaseTitle: "Forms", title: "Select Dropdowns",
        content: {
            explanation: [{ en: "The <select> element creates dropdown menus with <option> elements.", ar: "عنصر <select> ينشئ قوائم منسدلة مع عناصر <option>." }],
            examples: [{ level: "Beginner", code: "<select>\n  <option value=\"\">Choose...</option>\n  <option value=\"1\">Option 1</option>\n  <option value=\"2\">Option 2</option>\n</select>", desc: "Dropdown menu" }],
            mcqs: [{ q: "What tag creates individual options?", options: ["<item>", "<choice>", "<option>", "<li>"], correct: 2 }]
        }
    },
    {
        id: 33, phase: 6, phaseTitle: "Forms", title: "Form Validation",
        content: {
            explanation: [{ en: "HTML5 provides built-in validation: required, min, max, pattern, minlength, maxlength.", ar: "HTML5 يوفر تحقق مدمج: required, min, max, pattern, minlength, maxlength." }],
            examples: [{ level: "Intermediate", code: "<input type=\"text\" required minlength=\"3\" maxlength=\"50\">\n<input type=\"number\" min=\"1\" max=\"100\">", desc: "Validation attributes" }],
            mcqs: [{ q: "Which attribute makes a field mandatory?", options: ["mandatory", "needed", "required", "must"], correct: 2 }]
        }
    },
    {
        id: 34, phase: 6, phaseTitle: "Forms", title: "Form Accessibility",
        content: {
            explanation: [{ en: "Use fieldset/legend for grouping, proper labels, and aria attributes for complex forms.", ar: "استخدم fieldset/legend للتجميع، والتسميات المناسبة، وسمات aria للنماذج المعقدة." }],
            examples: [{ level: "Advanced", code: "<fieldset>\n  <legend>Personal Info</legend>\n  <label for=\"name\">Name:</label>\n  <input id=\"name\" aria-required=\"true\">\n</fieldset>", desc: "Accessible form structure" }],
            mcqs: [{ q: "What groups related form fields?", options: ["div", "section", "fieldset", "group"], correct: 2 }]
        }
    },
    // Phase 7: Block vs Inline
    {
        id: 35, phase: 7, phaseTitle: "Block vs Inline", title: "Block Elements",
        content: {
            explanation: [
                { en: "Block elements start on a new line and take up the full width available. They 'block' other content from appearing beside them.", ar: "العناصر الكتلية تبدأ في سطر جديد وتأخذ العرض الكامل المتاح. إنها 'تحجب' المحتوى الآخر من الظهور بجانبها." },
                { en: "Common block elements: <div>, <p>, <h1>-<h6>, <ul>, <ol>, <li>, <table>, <form>, <header>, <footer>, <section>, <article>, <nav>, <main>, <aside>.", ar: "العناصر الكتلية الشائعة: <div>، <p>، <h1>-<h6>، <ul>، <ol>، <li>، <table>، <form>، <header>، <footer>، <section>، <article>، <nav>، <main>، <aside>." },
                { en: "Block elements create structural rectangles in your layout. Think of them as building blocks stacking vertically.", ar: "العناصر الكتلية تنشئ مستطيلات هيكلية في تخطيطك. فكر فيها كوحدات بناء تتراكم عمودياً." },
                { en: "You can set width, height, margin (all sides), and padding on block elements. These properties work fully on blocks.", ar: "يمكنك تعيين width، height، margin (كل الجوانب)، وpadding على العناصر الكتلية. هذه الخصائص تعمل بالكامل على الكتل." },
                { en: "Block elements can contain other block elements AND inline elements. Example: <div> can hold <p>, <h1>, <span>, etc.", ar: "العناصر الكتلية يمكن أن تحتوي على عناصر كتلية أخرى وعناصر سطرية. مثال: <div> يمكن أن يحتوي على <p>، <h1>، <span>، إلخ." },
                { en: "<div> is the generic block container. It has no semantic meaning - use it only for styling/layout purposes.", ar: "<div> هو الحاوي الكتلي العام. ليس له معنى دلالي - استخدمه فقط لأغراض التنسيق/التخطيط." },
                { en: "Semantic block elements (<header>, <footer>, etc.) work like <div> but tell browsers and screen readers what the content means.", ar: "العناصر الكتلية الدلالية (<header>، <footer>، إلخ) تعمل مثل <div> لكنها تخبر المتصفحات وقارئات الشاشة ماذا يعني المحتوى." },
                { en: "CSS display: block; forces any element to behave as a block. You can turn inline elements into blocks!", ar: "CSS display: block; يجبر أي عنصر على التصرف ككتلة. يمكنك تحويل العناصر السطرية إلى كتل!" },
                { en: "Pro Tip: Understanding block behavior is essential for CSS layouts. Flexbox and Grid work best with block containers.", ar: "نصيحة احترافية: فهم سلوك الكتلة ضروري لتخطيطات CSS. Flexbox وGrid يعملان بشكل أفضل مع الحاويات الكتلية." }
            ],
            why: "Block elements are the foundation of page layout. They create the structure that holds your content organized in vertical sections!",
            whyAr: "العناصر الكتلية هي أساس تخطيط الصفحة. إنها تنشئ الهيكل الذي يحتفظ بمحتواك منظماً في أقسام عمودية!",
            examples: [
                { level: "Beginner", code: "<!-- Block elements stack vertically -->\n<div style=\"background: lightblue; padding: 10px;\">\n  First block - takes full width\n</div>\n<div style=\"background: lightgreen; padding: 10px;\">\n  Second block - below first\n</div>\n<p style=\"background: lightyellow; padding: 10px;\">\n  Paragraphs are blocks too!\n</p>", desc: "Block elements stacking vertically" },
                { level: "Intermediate", code: "<!-- Block elements with width/margin control -->\n<div style=\"width: 50%; margin: 0 auto; background: #f0f0f0; padding: 20px;\">\n  This div is 50% width, centered with margin: auto\n</div>\n\n<!-- Nested block elements -->\n<article style=\"border: 1px solid #ddd; padding: 15px;\">\n  <h2>Article Title</h2>\n  <p>First paragraph inside article</p>\n  <p>Second paragraph inside article</p>\n</article>", desc: "Width control and nesting" },
                { level: "Advanced", code: "<!-- Common page structure with blocks -->\n<header>Logo and navigation</header>\n<nav>Menu links</nav>\n<main>\n  <article>\n    <h1>Main Content</h1>\n    <section>Section 1</section>\n    <section>Section 2</section>\n  </article>\n  <aside>Sidebar content</aside>\n</main>\n<footer>Copyright info</footer>\n\n<style>\n  header, nav, main, footer {\n    display: block;\n    padding: 20px;\n    margin-bottom: 10px;\n    background: #f5f5f5;\n  }\n  main {\n    display: flex; /* Blocks work great with Flexbox! */\n  }\n  article { flex: 1; }\n  aside { width: 300px; }\n</style>", desc: "Page layout structure" }
            ],
            mistakes: [
                { bad: "<span style=\"width: 200px; height: 100px;\">Text</span>", good: "<div style=\"width: 200px; height: 100px;\">Text</div>", why: "Width/height don't work on inline <span>. Use block element <div> or add display: block to span." },
                { bad: "<p><div>Nested</div></p>", good: "<div><p>Paragraph inside</p></div>", why: "You can't put block elements inside <p>! Browsers will break this apart. Put <p> inside <div> instead." }
            ],
            mcqs: [
                { q: "Do block elements start on new lines?", options: ["Yes", "No", "Sometimes", "Only with CSS"], correct: 0 },
                { q: "Which is a block element?", options: ["<span>", "<a>", "<div>", "<strong>"], correct: 2 },
                { q: "Can you set width on block elements?", options: ["No", "Yes", "Only height", "With JavaScript"], correct: 1 },
                { q: "What CSS makes inline behave as block?", options: ["inline: false", "display: block", "block: true", "type: block"], correct: 1 },
                { q: "What's the generic block container?", options: ["<span>", "<div>", "<block>", "<container>"], correct: 1 }
            ]
        }
    },
    {
        id: 36, phase: 7, phaseTitle: "Block vs Inline", title: "Inline Elements",
        content: {
            explanation: [
                { en: "Inline elements flow within text and don't start new lines. They only take up as much width as their content needs.", ar: "العناصر السطرية تتدفق داخل النص ولا تبدأ أسطر جديدة. إنها تأخذ فقط العرض الذي يحتاجه محتواها." },
                { en: "Common inline elements: <span>, <a>, <strong>, <em>, <b>, <i>, <img>, <input>, <label>, <button>, <code>, <br>.", ar: "العناصر السطرية الشائعة: <span>، <a>، <strong>، <em>، <b>، <i>، <img>، <input>، <label>، <button>، <code>، <br>." },
                { en: "Inline elements can sit next to each other horizontally on the same line. They wrap to the next line only when there's no room.", ar: "العناصر السطرية يمكن أن تجلس بجانب بعضها أفقياً على نفس السطر. إنها تنتقل للسطر التالي فقط عند عدم وجود مساحة." },
                { en: "Width and height DON'T work on inline elements! Only horizontal margin/padding work. Vertical padding appears but doesn't push content.", ar: "العرض والارتفاع لا يعملان على العناصر السطرية! فقط الهوامش/الحشوات الأفقية تعمل. الحشوة العمودية تظهر لكن لا تدفع المحتوى." },
                { en: "<span> is the generic inline container. Like <div> for blocks, use <span> when you need to style text without semantic meaning.", ar: "<span> هو الحاوي السطري العام. مثل <div> للكتل، استخدم <span> عندما تحتاج لتنسيق نص بدون معنى دلالي." },
                { en: "Inline elements should NOT contain block elements. <a><div>...</div></a> is invalid in HTML4 (HTML5 allows it for <a>).", ar: "العناصر السطرية لا يجب أن تحتوي على عناصر كتلية. <a><div>...</div></a> غير صالح في HTML4 (HTML5 يسمح بذلك لـ <a>)." },
                { en: "Special case: <img> and <input> are 'replaced' inline elements. They can have width/height because their content is replaced.", ar: "حالة خاصة: <img> و<input> هي عناصر سطرية 'مُستبدلة'. يمكن أن يكون لها عرض/ارتفاع لأن محتواها مُستبدل." },
                { en: "CSS display: inline; makes any element behave inline. Useful for making block elements flow in text.", ar: "CSS display: inline; يجعل أي عنصر يتصرف بشكل سطري. مفيد لجعل العناصر الكتلية تتدفق في النص." },
                { en: "display: inline-block; combines both: sits inline, but respects width/height like blocks. Great for buttons, badges, tags!", ar: "display: inline-block; يجمع بين الاثنين: يجلس سطرياً، لكن يحترم العرض/الارتفاع مثل الكتل. رائع للأزرار، الشارات، العلامات!" },
                { en: "Pro Tip: When inline elements have weird spacing, it's often whitespace in your HTML. Remove line breaks between elements or use flexbox.", ar: "نصيحة احترافية: عندما تكون للعناصر السطرية مسافات غريبة، غالباً ما تكون مسافات بيضاء في HTML. أزل فواصل الأسطر بين العناصر أو استخدم flexbox." }
            ],
            why: "Inline elements are for content WITHIN text: links, emphasis, small interactive elements. Understanding inline behavior prevents layout frustrations!",
            whyAr: "العناصر السطرية للمحتوى داخل النص: الروابط، التأكيد، العناصر التفاعلية الصغيرة. فهم السلوك السطري يمنع إحباطات التخطيط!",
            examples: [
                { level: "Beginner", code: "<!-- Inline elements flow with text -->\n<p>\n  This paragraph has <strong>bold</strong> text, \n  <em>italic</em> text, and a \n  <a href=\"#\">link</a> all inline.\n</p>\n\n<!-- span for styling text -->\n<p>\n  The price is <span style=\"color: red; font-weight: bold;\">$99</span> only!\n</p>", desc: "Inline elements flowing in text" },
                { level: "Intermediate", code: "<!-- inline-block for buttons/badges -->\n<style>\n  .tag {\n    display: inline-block;\n    padding: 4px 12px;\n    background: #e0e7ff;\n    color: #4f46e5;\n    border-radius: 20px;\n    font-size: 14px;\n    margin: 4px;\n  }\n</style>\n\n<div>\n  <span class=\"tag\">HTML</span>\n  <span class=\"tag\">CSS</span>\n  <span class=\"tag\">JavaScript</span>\n</div>", desc: "inline-block for tag badges" },
                { level: "Advanced", code: "<!-- Comparing inline vs block behavior -->\n<style>\n  .inline { display: inline; background: #fef3c7; padding: 10px; }\n  .block { display: block; background: #d1fae5; padding: 10px; width: 200px; }\n  .inline-block { display: inline-block; background: #dbeafe; padding: 10px; width: 150px; }\n</style>\n\n<p>Text <span class=\"inline\">inline (width ignored)</span> more text</p>\n<p>Text <span class=\"block\">block (breaks line)</span> more text</p>\n<p>Text <span class=\"inline-block\">inline-block (best of both)</span> more text</p>", desc: "Comparing display behaviors" }
            ],
            mistakes: [
                { bad: "<span style=\"width: 100px; height: 50px;\">Box</span>", good: "<span style=\"display: inline-block; width: 100px; height: 50px;\">Box</span>", why: "Width/height don't work on inline elements. Add display: inline-block to make them work!" },
                { bad: "<span><p>Paragraph in span</p></span>", good: "<div><p>Paragraph in div</p></div>", why: "Block element <p> inside inline <span> is invalid. Use block container <div> for block content." }
            ],
            mcqs: [
                { q: "Which is inline?", options: ["div", "p", "span", "ul"], correct: 2 },
                { q: "Can you set width on inline elements?", options: ["Yes", "No", "Only with !important", "Only height"], correct: 1 },
                { q: "What combines inline and block behavior?", options: ["inline-mixed", "inline-block", "block-inline", "flex"], correct: 1 },
                { q: "What's the generic inline container?", options: ["<div>", "<span>", "<inline>", "<text>"], correct: 1 },
                { q: "Can inline elements contain blocks?", options: ["Yes always", "Generally no", "Only with CSS", "Only <a> in HTML5"], correct: 3 }
            ]
        }
    },
    {
        id: 37, phase: 7, phaseTitle: "Block vs Inline", title: "Layout Behavior",
        content: {
            explanation: [{ en: "Understanding block vs inline is essential for CSS layouts. CSS can change display behavior.", ar: "فهم الكتلي مقابل السطري ضروري لتخطيطات CSS. CSS يمكن أن يغير سلوك العرض." }],
            examples: [{ level: "Intermediate", code: "<style>\n  span { display: block; }\n  div { display: inline; }\n</style>", desc: "Changing display" }],
            mcqs: [{ q: "Can CSS change block to inline?", options: ["No", "Yes, with display property", "Only in HTML5", "Never"], correct: 1 }]
        }
    },
    // Phase 8: Semantic HTML
    {
        id: 38, phase: 8, phaseTitle: "Semantic HTML", title: "Header Element",
        content: {
            explanation: [
                { en: "The <header> element represents introductory content. It typically contains the site logo, navigation, and title.", ar: "عنصر <header> يمثل المحتوى التمهيدي. يحتوي عادة على شعار الموقع، التنقل، والعنوان." },
                { en: "<header> is semantic: it tells browsers and screen readers 'this is the header section'. Screen readers announce it as a landmark.", ar: "<header> دلالي: يخبر المتصفحات وقارئات الشاشة 'هذا هو قسم الرأس'. قارئات الشاشة تعلنه كعلامة مميزة." },
                { en: "You can have multiple <header> elements on a page. Common uses: page header, article header, section header.", ar: "يمكنك وجود عناصر <header> متعددة على الصفحة. الاستخدامات الشائعة: رأس الصفحة، رأس المقالة، رأس القسم." },
                { en: "The page's main <header> is usually a direct child of <body> and contains site-wide navigation.", ar: "رأس الصفحة الرئيسي عادة طفل مباشر لـ <body> ويحتوي على تنقل كامل الموقع." },
                { en: "<header> inside <article> or <section> represents that content's introduction - title, author info, publication date.", ar: "<header> داخل <article> أو <section> يمثل مقدمة ذلك المحتوى - العنوان، معلومات الكاتب، تاريخ النشر." },
                { en: "Header typically contains: logo, navigation (<nav>), search bar, user account menu, call-to-action buttons.", ar: "الرأس يحتوي عادة على: الشعار، التنقل (<nav>)، شريط البحث، قائمة حساب المستخدم، أزرار الإجراء." },
                { en: "<header> should NOT contain <footer>, another <header>, or <main>. It's for introductory content only.", ar: "<header> لا يجب أن يحتوي على <footer>، <header> آخر، أو <main>. إنه للمحتوى التمهيدي فقط." },
                { en: "CSS: Headers are often position: fixed or sticky at the top. Use z-index to keep it above other content.", ar: "CSS: الرؤوس غالباً position: fixed أو sticky في الأعلى. استخدم z-index لإبقائها فوق المحتوى الآخر." },
                { en: "Pro Tip: Use role='banner' only on the main page <header>. Article headers don't need the role attribute.", ar: "نصيحة احترافية: استخدم role='banner' فقط على <header> الصفحة الرئيسية. رؤوس المقالات لا تحتاج سمة الدور." }
            ],
            why: "Semantic headers improve accessibility (screen reader navigation), SEO (search engines understand page structure), and code readability!",
            whyAr: "الرؤوس الدلالية تحسن إمكانية الوصول (تنقل قارئات الشاشة)، تحسين محركات البحث (محركات البحث تفهم هيكل الصفحة)، وقابلية قراءة الكود!",
            examples: [
                { level: "Beginner", code: "<!-- Main page header -->\n<header>\n  <img src=\"logo.svg\" alt=\"Company Logo\">\n  <nav>\n    <a href=\"/\">Home</a>\n    <a href=\"/about\">About</a>\n    <a href=\"/contact\">Contact</a>\n  </nav>\n</header>", desc: "Basic page header with logo and nav" },
                { level: "Intermediate", code: "<!-- Styled header with navigation -->\n<header class=\"site-header\">\n  <div class=\"logo\">\n    <a href=\"/\"><img src=\"logo.svg\" alt=\"Brand\"></a>\n  </div>\n  <nav class=\"main-nav\">\n    <a href=\"/\">Home</a>\n    <a href=\"/products\">Products</a>\n    <a href=\"/about\">About</a>\n  </nav>\n  <div class=\"header-actions\">\n    <input type=\"search\" placeholder=\"Search...\">\n    <a href=\"/login\" class=\"btn\">Login</a>\n  </div>\n</header>\n\n<!-- Article has its own header -->\n<article>\n  <header>\n    <h1>Blog Post Title</h1>\n    <p class=\"meta\">By John Doe | March 15, 2024</p>\n  </header>\n  <p>Article content...</p>\n</article>", desc: "Multiple headers: page and article" },
                { level: "Advanced", code: "<style>\n  .site-header {\n    position: sticky;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 2rem;\n    background: white;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n    z-index: 1000;\n  }\n  .main-nav {\n    display: flex;\n    gap: 2rem;\n  }\n  .main-nav a {\n    text-decoration: none;\n    color: #333;\n    font-weight: 500;\n  }\n  .main-nav a:hover {\n    color: #4f46e5;\n  }\n</style>\n\n<header class=\"site-header\">\n  <a href=\"/\">Logo</a>\n  <nav class=\"main-nav\">...</nav>\n  <button>Menu</button>\n</header>", desc: "Sticky header with modern styling" }
            ],
            mistakes: [
                { bad: "<div class=\"header\">...</div>", good: "<header>...</header>", why: "Use semantic <header>, not <div class='header'>. Semantic elements have meaning for browsers and screen readers." },
                { bad: "<header>\n  <footer>Copyright</footer>\n</header>", good: "<header>Navigation</header>\n<footer>Copyright</footer>", why: "Don't nest <footer> inside <header>. They're separate page sections." }
            ],
            mcqs: [
                { q: "What does <header> typically contain?", options: ["Footer content", "Logo and navigation", "Main content", "Sidebar"], correct: 1 },
                { q: "Can a page have multiple headers?", options: ["No", "Yes", "Only two", "Only with CSS"], correct: 1 },
                { q: "Is <header> a landmark for screen readers?", options: ["No", "Yes", "Sometimes", "Only with role"], correct: 1 },
                { q: "Should article headers use role='banner'?", options: ["Yes", "No", "Always", "Never"], correct: 1 },
                { q: "What CSS makes header stick to top?", options: ["fixed: top", "position: sticky; top: 0", "stick: true", "anchor: top"], correct: 1 }
            ]
        }
    },
    {
        id: 39, phase: 8, phaseTitle: "Semantic HTML", title: "Nav Element",
        content: {
            explanation: [{ en: "The <nav> element wraps major navigation links.", ar: "عنصر <nav> يغلف روابط التنقل الرئيسية." }],
            examples: [{ level: "Beginner", code: "<nav>\n  <a href=\"/\">Home</a>\n  <a href=\"/about\">About</a>\n  <a href=\"/contact\">Contact</a>\n</nav>", desc: "Navigation" }],
            mcqs: [{ q: "Is <nav> for all links?", options: ["Yes", "No, only major navigation", "Only external", "Only internal"], correct: 1 }]
        }
    },
    {
        id: 40, phase: 8, phaseTitle: "Semantic HTML", title: "Main Element",
        content: {
            explanation: [{ en: "The <main> element contains the primary content. Only one per page.", ar: "عنصر <main> يحتوي على المحتوى الأساسي. واحد فقط لكل صفحة." }],
            examples: [{ level: "Beginner", code: "<main>\n  <h1>Page Title</h1>\n  <p>Main content here...</p>\n</main>", desc: "Main content" }],
            mcqs: [{ q: "How many <main> elements per page?", options: ["Unlimited", "Two", "One", "None"], correct: 2 }]
        }
    },
    {
        id: 41, phase: 8, phaseTitle: "Semantic HTML", title: "Section & Article",
        content: {
            explanation: [
                { en: "<section> groups thematically related content. <article> is for self-contained, independently distributable content.", ar: "<section> يجمع محتوى مترابط موضوعياً. <article> للمحتوى المكتفي ذاتياً والقابل للتوزيع المستقل." },
                { en: "Article test: Can this content be understood if taken out of context? Blog posts, news articles, comments, forum posts = articles.", ar: "اختبار المقالة: هل يمكن فهم هذا المحتوى إذا أُخذ خارج السياق؟ منشورات المدونة، المقالات الإخبارية، التعليقات، منشورات المنتديات = مقالات." },
                { en: "Section test: Does this content represent a thematic grouping? Introduction, Features, Pricing, Contact = sections.", ar: "اختبار القسم: هل يمثل هذا المحتوى تجميعاً موضوعياً؟ المقدمة، الميزات، التسعير، الاتصال = أقسام." },
                { en: "Sections should have a heading (h1-h6). If you can't think of a heading, maybe it shouldn't be a section.", ar: "الأقسام يجب أن يكون لها عنوان (h1-h6). إذا لم تستطع التفكير في عنوان، ربما لا ينبغي أن يكون قسماً." },
                { en: "Articles can contain sections (article with multiple topic sections). Sections can contain articles (blog section with article posts).", ar: "المقالات يمكن أن تحتوي على أقسام (مقالة بأقسام متعددة الموضوعات). الأقسام يمكن أن تحتوي على مقالات (قسم مدونة مع منشورات مقالات)." },
                { en: "Nested articles are valid! Comment sections: <article> for post, nested <article>s for each comment.", ar: "المقالات المتداخلة صالحة! أقسام التعليقات: <article> للمنشور، <article>s متداخلة لكل تعليق." },
                { en: "Screen readers can navigate by sections and articles. This creates a richer navigation experience for blind users.", ar: "قارئات الشاشة يمكنها التنقل حسب الأقسام والمقالات. هذا يخلق تجربة تنقل أغنى للمستخدمين المكفوفين." },
                { en: "Don't use sections just as styling containers. If it's only for CSS purposes, use <div> instead.", ar: "لا تستخدم الأقسام كحاويات تنسيق فقط. إذا كانت لأغراض CSS فقط، استخدم <div> بدلاً من ذلك." },
                { en: "Pro Tip: Think of <article> as a 'complete unit' and <section> as a 'chapter'. Both add semantic meaning your CSS div can't.", ar: "نصيحة احترافية: فكر في <article> كـ'وحدة كاملة' و<section> كـ'فصل'. كلاهما يضيف معنى دلالي لا يستطيع div CSS فعله." }
            ],
            why: "Sections and articles organize content semantically. They help: 1) Screen reader navigation, 2) SEO content understanding, 3) Clear code structure. Use them thoughtfully!",
            whyAr: "الأقسام والمقالات تنظم المحتوى دلالياً. تساعد في: 1) تنقل قارئات الشاشة، 2) فهم محتوى SEO، 3) هيكل كود واضح. استخدمها بعناية!",
            examples: [
                { level: "Beginner", code: "<!-- Article: self-contained content -->\n<article>\n  <h2>How to Learn HTML</h2>\n  <p>HTML is the foundation of web development...</p>\n</article>\n\n<!-- Section: thematic grouping -->\n<section>\n  <h2>Our Features</h2>\n  <ul>\n    <li>Fast</li>\n    <li>Secure</li>\n    <li>Easy</li>\n  </ul>\n</section>", desc: "Basic article vs section" },
                { level: "Intermediate", code: "<!-- Blog with articles -->\n<section class=\"blog\">\n  <h2>Latest Posts</h2>\n  \n  <article>\n    <h3>Post Title 1</h3>\n    <p>Post excerpt...</p>\n    <a href=\"/post-1\">Read more</a>\n  </article>\n  \n  <article>\n    <h3>Post Title 2</h3>\n    <p>Post excerpt...</p>\n    <a href=\"/post-2\">Read more</a>\n  </article>\n</section>\n\n<!-- Article with multiple sections -->\n<article>\n  <h1>Complete Guide to CSS</h1>\n  <section>\n    <h2>Introduction</h2>\n    <p>...</p>\n  </section>\n  <section>\n    <h2>Selectors</h2>\n    <p>...</p>\n  </section>\n</article>", desc: "Articles within sections, sections within articles" },
                { level: "Advanced", code: "<!-- Full page with proper structure -->\n<main>\n  <article class=\"main-content\">\n    <header>\n      <h1>Building Accessible Websites</h1>\n      <p>By Jane Smith | April 2024</p>\n    </header>\n    \n    <section id=\"intro\">\n      <h2>What is Accessibility?</h2>\n      <p>...</p>\n    </section>\n    \n    <section id=\"guidelines\">\n      <h2>WCAG Guidelines</h2>\n      <p>...</p>\n    </section>\n    \n    <section id=\"comments\">\n      <h2>Comments (5)</h2>\n      <article class=\"comment\">\n        <header>\n          <strong>User1</strong>\n          <time>2 hours ago</time>\n        </header>\n        <p>Great article!</p>\n      </article>\n    </section>\n    \n    <footer>\n      <p>Tags: #accessibility #html</p>\n    </footer>\n  </article>\n</main>", desc: "Complete article structure with nested elements" }
            ],
            mistakes: [
                { bad: "<section class=\"card\">...</section>\n<!-- Just for styling a card -->", good: "<div class=\"card\">...</div>\n<!-- Use div for pure styling -->", why: "Section is for thematic grouping with a heading. Use div if you just need a styling container." },
                { bad: "<article>\n  <article>Nested</article>\n</article>\n<!-- For styling purposes -->", good: "<article>\n  <section>Part 1</section>\n</article>\n<!-- Logical nesting -->", why: "Nest articles only when logically appropriate (like comments on posts). For content parts, use sections." }
            ],
            mcqs: [
                { q: "Which is for self-contained content?", options: ["section", "article", "div", "main"], correct: 1 },
                { q: "Should sections have headings?", options: ["No", "Yes", "Optional", "Only with CSS"], correct: 1 },
                { q: "Can articles contain sections?", options: ["No", "Yes", "Only one", "Never"], correct: 1 },
                { q: "When to use div instead of section?", options: ["Always", "For pure styling", "For content", "For forms"], correct: 1 },
                { q: "Which helps screen reader navigation?", options: ["div", "span", "section and article", "class attribute"], correct: 2 }
            ]
        }
    },
    {
        id: 42, phase: 8, phaseTitle: "Semantic HTML", title: "Aside Element",
        content: {
            explanation: [{ en: "The <aside> element contains tangentially related content, like sidebars.", ar: "عنصر <aside> يحتوي على محتوى مرتبط بشكل جانبي، مثل الأشرطة الجانبية." }],
            examples: [{ level: "Beginner", code: "<aside>\n  <h3>Related Articles</h3>\n  <ul>...</ul>\n</aside>", desc: "Sidebar content" }],
            mcqs: [{ q: "What is <aside> used for?", options: ["Main content", "Navigation", "Related/sidebar content", "Footer"], correct: 2 }]
        }
    },
    {
        id: 43, phase: 8, phaseTitle: "Semantic HTML", title: "Footer Element",
        content: {
            explanation: [
                { en: "The <footer> element contains closing information for a page or section: copyright, contact, links, related content.", ar: "عنصر <footer> يحتوي على المعلومات الختامية للصفحة أو القسم: حقوق النشر، الاتصال، الروابط، المحتوى ذو الصلة." },
                { en: "<footer> is a landmark element. Screen readers announce it, allowing users to jump directly to footer information.", ar: "<footer> عنصر علامة مميزة. قارئات الشاشة تعلنه، مما يسمح للمستخدمين بالقفز مباشرة لمعلومات التذييل." },
                { en: "Page footer: copyright notice, privacy policy, terms of service, contact info, social links, sitemap.", ar: "تذييل الصفحة: إشعار حقوق النشر، سياسة الخصوصية، شروط الخدمة، معلومات الاتصال، روابط التواصل الاجتماعي، خريطة الموقع." },
                { en: "Article/section footer: author info, publication date, tags, share buttons, related articles.", ar: "تذييل المقالة/القسم: معلومات الكاتب، تاريخ النشر، الوسوم، أزرار المشاركة، المقالات ذات الصلة." },
                { en: "You can have multiple <footer> elements: one for the page, and others inside articles and sections.", ar: "يمكنك وجود عناصر <footer> متعددة: واحد للصفحة، وآخرين داخل المقالات والأقسام." },
                { en: "<footer> should NOT contain <header>, <main>, or nested <footer>. It's for closing content only.", ar: "<footer> لا يجب أن يحتوي على <header>، <main>، أو <footer> متداخل. إنه للمحتوى الختامي فقط." },
                { en: "Common footer pattern: multi-column layout with links, newsletter signup, and copyright bar at bottom.", ar: "نمط التذييل الشائع: تخطيط متعدد الأعمدة مع الروابط، الاشتراك في النشرة، وشريط حقوق النشر في الأسفل." },
                { en: "The <address> element inside footer provides contact information. It's semantic and renders italic by default.", ar: "عنصر <address> داخل التذييل يوفر معلومات الاتصال. إنه دلالي ويعرض بخط مائل افتراضياً." },
                { en: "Pro Tip: Footer is often overlooked but critical for trust. Include legal links, contact info, and social proof.", ar: "نصيحة احترافية: التذييل غالباً ما يُهمل لكنه حاسم للثقة. أضف الروابط القانونية، معلومات الاتصال، والإثبات الاجتماعي." }
            ],
            why: "Footers complete the page structure. They provide: 1) Essential legal/contact info, 2) Navigation to important pages, 3) Trust signals, 4) Accessibility landmarks!",
            whyAr: "التذييلات تكمل هيكل الصفحة. توفر: 1) معلومات قانونية/اتصال أساسية، 2) تنقل لصفحات مهمة، 3) إشارات ثقة، 4) علامات إمكانية وصول!",
            examples: [
                { level: "Beginner", code: "<!-- Simple page footer -->\n<footer>\n  <p>&copy; 2024 Company Name. All rights reserved.</p>\n  <nav>\n    <a href=\"/privacy\">Privacy</a>\n    <a href=\"/terms\">Terms</a>\n    <a href=\"/contact\">Contact</a>\n  </nav>\n</footer>", desc: "Basic footer with copyright and links" },
                { level: "Intermediate", code: "<!-- Article footer -->\n<article>\n  <h1>Article Title</h1>\n  <p>Content...</p>\n  \n  <footer>\n    <p>Written by <a href=\"/author\">John Doe</a></p>\n    <p>Published: <time datetime=\"2024-03-15\">March 15, 2024</time></p>\n    <div class=\"tags\">\n      <a href=\"/tag/html\">#HTML</a>\n      <a href=\"/tag/css\">#CSS</a>\n    </div>\n    <div class=\"share\">\n      <button>Share on Twitter</button>\n      <button>Share on Facebook</button>\n    </div>\n  </footer>\n</article>", desc: "Article footer with author, date, tags" },
                { level: "Advanced", code: "<footer class=\"site-footer\">\n  <div class=\"footer-content\">\n    <div class=\"footer-section\">\n      <h3>Company</h3>\n      <a href=\"/about\">About Us</a>\n      <a href=\"/careers\">Careers</a>\n      <a href=\"/blog\">Blog</a>\n    </div>\n    <div class=\"footer-section\">\n      <h3>Support</h3>\n      <a href=\"/help\">Help Center</a>\n      <a href=\"/contact\">Contact</a>\n      <a href=\"/faq\">FAQ</a>\n    </div>\n    <div class=\"footer-section\">\n      <h3>Legal</h3>\n      <a href=\"/privacy\">Privacy Policy</a>\n      <a href=\"/terms\">Terms of Service</a>\n      <a href=\"/cookies\">Cookie Policy</a>\n    </div>\n    <div class=\"footer-section\">\n      <h3>Follow Us</h3>\n      <div class=\"social-links\">\n        <a href=\"#\">Twitter</a>\n        <a href=\"#\">Facebook</a>\n        <a href=\"#\">LinkedIn</a>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"footer-bottom\">\n    <p>&copy; 2024 Company. All rights reserved.</p>\n    <address>\n      Contact: <a href=\"mailto:hello@company.com\">hello@company.com</a>\n    </address>\n  </div>\n</footer>\n\n<style>\n  .site-footer {\n    background: #1a1a2e;\n    color: #eee;\n    padding: 40px 20px 20px;\n  }\n  .footer-content {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 30px;\n    max-width: 1200px;\n    margin: 0 auto 30px;\n  }\n  .footer-section a {\n    display: block;\n    color: #aaa;\n    text-decoration: none;\n    margin: 8px 0;\n  }\n  .footer-bottom {\n    border-top: 1px solid #333;\n    padding-top: 20px;\n    text-align: center;\n  }\n</style>", desc: "Full multi-column footer with styling" }
            ],
            mistakes: [
                { bad: "<div class=\"footer\">...</div>", good: "<footer>...</footer>", why: "Use semantic <footer>, not <div class='footer'>. Semantic elements are recognized by screen readers and search engines." },
                { bad: "<footer>\n  <header>Page Header</header>\n</footer>", good: "<header>Page Header</header>\n<footer>Footer content</footer>", why: "Don't nest <header> inside <footer>. They're separate page landmarks." }
            ],
            mcqs: [
                { q: "What typically goes in <footer>?", options: ["Logo only", "Main content", "Copyright and links", "Navigation only"], correct: 2 },
                { q: "Can footer contain navigation?", options: ["No", "Yes", "Only external links", "Only internal links"], correct: 1 },
                { q: "Is <footer> a landmark?", options: ["No", "Yes", "Only main footer", "With role attribute"], correct: 1 },
                { q: "What element for contact info in footer?", options: ["<contact>", "<address>", "<info>", "<details>"], correct: 1 },
                { q: "Can you have multiple footers?", options: ["No", "Yes", "Only two", "Only in articles"], correct: 1 }
            ]
        }
    }
];

window.lessonsData = window.lessonsData.concat(lessonsPart3);
