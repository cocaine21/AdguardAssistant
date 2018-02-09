// ==UserScript==
// @name Adguard Assistant Dev
// @name:ru Помощник AdGuard Dev
// @name:uk Помічник AdGuard Dev
// @name:pl Asystent AdGuarda Dev
// @name:de AdGuard-Assistent Dev
// @name:zh 使用 AdGuard 助手 Dev
// @name:zh-TW AdGuard 助理 Dev
// @name:he העוזר האישי של אדגארד Dev
// @name:it Assistente AdGuard Dev
// @name:fa دستیار AdGuard Dev
// @name:tr AdGuard Assistant Dev
// @name:ja AdGuardアシスタント Dev
// @name:es AdGuard Assistant Dev
// @name:pt-BR AdGuard Assistente Dev
// @name:pt Assistente do AdGuard Dev
// @name:ar AdGuardمساعد Dev
// @name:ko AdGuard 도우미 Dev
// @name:sk AdGuard asistant Dev
// @name:no AdGuard-assistent Dev
// @name:da AdGuard Assistent Dev
// @name:fr Assistant AdGuard  Dev
// @name:id Asisten Aguard Dev
// @name:sv AdGuard-assistent Dev
// @name:sr AdGuard pomoćnik Dev
// @namespace Adguard
// @description Provides easy and convenient way to manage filtering right from the browser
// @description:ru Позволяет легко и быстро управлять фильтрацией прямо из браузера
// @description:uk Забезпечує легкий і зручний спосіб керування фільтрацією прямо з веб-переглядача
// @description:pl Zapewnia łatwy i wygodny sposób na zarządzanie filtrowaniem bezpośrednio z przeglądarki
// @description:de Bietet einen einfachen und nützlichen Weg die Filterung direkt im Browser zu verwalten
// @description:zh 提供简单方便的方法来管理浏览器筛选
// @description:zh-TW 提供簡單的且方便的方法以直接地從該瀏覽器管理過濾
// @description:he מספק דרך קלה ונוחה לנהל סינון תקין ישירות מהדפדפן
// @description:it Fornisce un modo facile e comodo per gestire il filtraggio direttamente dal browser
// @description:fa روش راحت و آسان برای مدیریت فیلترینگ مستیق از داخل مرورگر.
// @description:tr Filtrelemeyi, tarayıcıdan doğrudan kolayca yönetmenizi sağlar.
// @description:ja ブラウザから簡単にフィルタリングを管理する便利な機能を提供します。
// @description:es Proporciona una forma fácil y cómoda de manejar el filtrado desde el navegador
// @description:pt-BR Fornece uma maneira fácil e conveniente de gerenciar a filtragem diretamente do seu navegador
// @description:pt Fornece uma forma fácil e conveniente de gerir a filtragem a partir do seu navegador
// @description:ar يوفر طريقه سهله ومريحه لأداره التصفية الحقيقة من المتصفح
// @description:ko 브라우저에서 바로 필터링 관리를 쉽고 간편하게 할 수 있도록 도와줍니다.
// @description:sk Poskytuje jednoduchý a pohodlný spôsob manažmentu filtrov priamo z prehliadača
// @description:no Tilbyr en enkel og praktisk måte å administrere filtrering rett fra nettleseren
// @description:da Sørger for en nem og behagelig måde til at administrere filtrering lige fra browseren
// @description:fr Fournit un moyen facile et pratique pour gérer le filtrage des droit à partir du navigateur
// @description:id Menyediakan cara mudah dan nyaman untuk mengelola penyaringan langsung dari peramban
// @description:sv Erbjuder ett enkelt och bekvämt sätt att hantera filtrering direkt i webbläsaren
// @description:sr Pruža jednostavan i zgodan način upravljanja filtriranjem direktno iz preglednika
// @version 4.1.2
// @downloadURL https://AdguardTeam.github.io/AdguardAssistant/assistant.user.js
// @updateURL https://AdguardTeam.github.io/AdguardAssistant/assistant.meta.js
// @include *
// @exclude *://mil.ru/*
// @exclude *wikipedia.org*
// @exclude *icloud.com*
// @exclude *hangouts.google.com*
// @exclude *www.facebook.com/plugins/сomments*
// @exclude *www.facebook.com/v*/plugins*
// @exclude *disqus.com/embed/comments*
// @exclude *vk.com/widget*
// @exclude *twitter.com/intent/*
// @exclude *www.youtube.com/embed/*
// @exclude *player.vimeo.com*
// @exclude *coub.com/embed*
// @exclude *staticxx.facebook.com/connect/xd_arbiter/*
// @exclude *vk.com/q_frame*
// @exclude *tpc.googlesyndication.com*
// @exclude *syndication.twitter.com*
// @exclude *platform.twitter.com*
// @grant   GM_getValue
// @grant   GM_setValue
// @grant   GM_getResourceText
// @grant   GM_addStyle
// @grant   property:settings
// ==/UserScript==

(function() {
var en = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "Filtering on this website"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Do not filter for 30 seconds"
    },
    "menu_block_ad_on_site": {
        "message": "Block ad on this website"
    },
    "menu_report_abuse": {
        "message": "Report the website"
    },
    "menu_site_report": {
        "message": "Website security report"
    },
    "menu_settings": {
        "message": "Assistant settings"
    },
    "assistant_select_element": {
        "message": "Element blocking"
    },
    "assistant_select_element_ext": {
        "message": "Choose an element on the page to block"
    },
    "assistant_select_element_cancel": {
        "message": "Cancel"
    },
    "assistant_block_element": {
        "message": "Element blocking"
    },
    "assistant_block_element_explain": {
        "message": "Adjust element blocking rule"
    },
    "assistant_slider_explain": {
        "message": "Move the slider to change the size of the frame the new rule will work for:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Advanced settings"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Apply the rule to all websites"
    },
    "assistant_block_by_reference": {
        "message": "Block by reference link"
    },
    "assistant_block_similar": {
        "message": "Block similar"
    },
    "assistant_another_element": {
        "message": "Select another element"
    },
    "assistant_preview": {
        "message": "Preview"
    },
    "assistant_block": {
        "message": "Block"
    },
    "assistant_settings": {
        "message": "Assistant settings"
    },
    "assistant_preview_header": {
        "message": "Element blocking - preview"
    },
    "assistant_preview_header_info": {
        "message": "Make sure that element is blocked as intended"
    },
    "assistant_preview_end": {
        "message": "Exit preview"
    },
    "wot_unknown_description": {
        "message": "Reputation is not defined"
    },
    "wot_bad_description": {
        "message": "This website has very bad reputation\naccording to "
    },
    "wot_poor_description": {
        "message": "This website has bad reputation\naccording to "
    },
    "wot_unsatisfactory_description": {
        "message": "This website has poor reputation\naccording to "
    },
    "wot_good_description": {
        "message": "This website has good reputation\naccording to "
    },
    "wot_excellent_description": {
        "message": "This website has excellent reputation\naccording to "
    },
    "settings_choose_size_and_position": {
        "message": "Adjust AdGuard Assistant size and position"
    },
    "settings_icon_size": {
        "message": "Icon size:"
    },
    "settings_small": {
        "message": "Small"
    },
    "settings_big": {
        "message": "Large"
    },
    "settings_position": {
        "message": "Position:"
    },
    "settings_left_top": {
        "message": "Top left"
    },
    "settings_right_top": {
        "message": "Top right"
    },
    "settings_left_bottom": {
        "message": "Bottom left"
    },
    "settings_right_bottom": {
        "message": "Bottom right"
    },
    "settings_cancel": {
        "message": "Cancel"
    },
    "settings_save": {
        "message": "Save changes"
    }
}
var ru = {
    "assistant_select_element_start": "\u041d\u0430\u0447\u0430\u0442\u044c",
    "assistant_select_element_text": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0435\u0436\u0438\u043c \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432.",
    "menu_filtration_status": {
        "message": "\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u044d\u0442\u043e\u043c \u0441\u0430\u0439\u0442\u0435"
    },
    "menu_do_not_filter_30_sec": {
        "message": "\u041d\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c 30 \u0441\u0435\u043a\u0443\u043d\u0434"
    },
    "menu_block_ad_on_site": {
        "message": "\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"
    },
    "menu_report_abuse": {
        "message": "\u041f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0430\u0439\u0442"
    },
    "menu_site_report": {
        "message": "\u041e\u0442\u0447\u0451\u0442 \u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430"
    },
    "menu_settings": {
        "message": "\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a"
    },
    "assistant_select_element": {
        "message": " \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430"
    },
    "assistant_select_element_ext": {
        "message": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0434\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c"
    },
    "assistant_select_element_cancel": {
        "message": "\u041e\u0442\u043c\u0435\u043d\u0430"
    },
    "assistant_block_element": {
        "message": "\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430"
    },
    "assistant_block_element_explain": {
        "message": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430"
    },
    "assistant_slider_explain": {
        "message": "\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0439\u0442\u0435 \u0431\u0435\u0433\u0443\u043d\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0431\u043b\u043e\u043a\u0430, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0430\u0439\u0442\u043e\u0432"
    },
    "assistant_block_by_reference": {
        "message": "\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435"
    },
    "assistant_block_similar": {
        "message": "\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0438\u0435"
    },
    "assistant_another_element": {
        "message": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442"
    },
    "assistant_preview": {
        "message": "\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"
    },
    "assistant_block": {
        "message": "\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c"
    },
    "assistant_settings": {
        "message": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0430"
    },
    "assistant_preview_header": {
        "message": "\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 - \u043f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"
    },
    "assistant_preview_header_info": {
        "message": "\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u043a\u0430\u043a \u0437\u0430\u0434\u0443\u043c\u0430\u043d\u043e"
    },
    "assistant_preview_end": {
        "message": "\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"
    },
    "wot_unknown_description": {
        "message": "\u0420\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u044f \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430"
    },
    "wot_bad_description": {
        "message": "\u0423 \u0441\u0430\u0439\u0442\u0430 \u043e\u0447\u0435\u043d\u044c \u043f\u043b\u043e\u0445\u0430\u044f \u0440\u0435\u0443\u0442\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0430\u043d\u043d\u044b\u043c "
    },
    "wot_poor_description": {
        "message": "\u0423 \u0441\u0430\u0439\u0442\u0430 \u043f\u043b\u043e\u0445\u0430\u044f \u0440\u0435\u0443\u0442\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0430\u043d\u043d\u044b\u043c "
    },
    "wot_unsatisfactory_description": {
        "message": "\u0423 \u0441\u0430\u0439\u0442\u0430 \u043d\u0435\u0443\u0434\u0432\u043e\u043b\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0443\u0442\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0430\u043d\u043d\u044b\u043c "
    },
    "wot_good_description": {
        "message": "\u0423 \u0441\u0430\u0439\u0442\u0430 \u0445\u043e\u0440\u043e\u0448\u0430\u044f \u0440\u0435\u0443\u0442\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0430\u043d\u043d\u044b\u043c "
    },
    "wot_excellent_description": {
        "message": "\u0423 \u0441\u0430\u0439\u0442\u0430 \u043e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u0440\u0435\u0443\u0442\u0430\u0446\u0438\u044f \u043f\u043e \u0434\u0430\u043d\u043d\u044b\u043c "
    },
    "settings_choose_size_and_position": {
        "message": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0438 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043c\u043e\u0449\u043d\u0438\u043a\u0430 AdGuard"
    },
    "settings_icon_size": {
        "message": "\u0420\u0430\u0437\u043c\u0435\u0440 \u0438\u043a\u043e\u043d\u043a\u0438:"
    },
    "settings_small": {
        "message": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f"
    },
    "settings_big": {
        "message": "\u0411\u043e\u043b\u044c\u0448\u0430\u044f"
    },
    "settings_position": {
        "message": "\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435:"
    },
    "settings_left_top": {
        "message": "\u0412\u0432\u0435\u0440\u0445\u0443 \u0441\u043b\u0435\u0432\u0430"
    },
    "settings_right_top": {
        "message": "\u0412\u0432\u0435\u0440\u0445\u0443 \u0441\u043f\u0440\u0430\u0432\u0430"
    },
    "settings_left_bottom": {
        "message": "\u0412\u043d\u0438\u0437\u0443 \u0441\u043b\u0435\u0432\u0430"
    },
    "settings_right_bottom": {
        "message": "\u0412\u043d\u0438\u0437\u0443 \u0441\u043f\u0440\u0430\u0432\u0430"
    },
    "settings_cancel": {
        "message": "\u041e\u0442\u043c\u0435\u043d\u0430"
    },
    "settings_save": {
        "message": "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"
    }
}
var uk = {
    "assistant_select_element_start": "\u041f\u043e\u0447\u0430\u0442\u0438",
    "assistant_select_element_text": "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456, \u044f\u043a\u0438\u0439 \u0442\u0440\u0435\u0431\u0430 \u0437\u0430\u0431\u043b\u043e\u043a\u0443\u0432\u0430\u0442\u0438. \u041e\u043d\u043e\u0432\u0456\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443, \u0449\u043e\u0431 \u0441\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0436\u0438\u043c \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f.",
    "menu_filtration_status": {
        "message": "\u0424\u0456\u043b\u044c\u0442\u0440\u0430\u0446\u0456\u044f \u043d\u0430 \u0434\u0430\u043d\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0456"
    },
    "menu_do_not_filter_30_sec": {
        "message": "\u041d\u0435 \u0444\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 30 \u0441\u0435\u043a\u0443\u043d\u0434"
    },
    "menu_block_ad_on_site": {
        "message": "\u0417\u0430\u0431\u043b\u043e\u043a\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0434\u0430\u043d\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0456"
    },
    "menu_report_abuse": {
        "message": "\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u0438\u0442\u0438 \u043f\u0440\u043e \u0441\u0430\u0439\u0442"
    },
    "menu_site_report": {
        "message": "\u0417\u0432\u0456\u0442 \u043f\u0440\u043e \u0431\u0435\u0437\u043f\u0435\u043a\u0443 \u0441\u0430\u0439\u0442\u0443"
    },
    "menu_settings": {
        "message": "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u043e\u043c\u0456\u0447\u043d\u0438\u043a\u0430"
    },
    "assistant_select_element": {
        "message": "\u0411\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0443"
    },
    "assistant_select_element_ext": {
        "message": "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u0446\u0456, \u044f\u043a\u0438\u0439 \u0442\u0440\u0435\u0431\u0430 \u0437\u0430\u0431\u043b\u043e\u043a\u0443\u0432\u0430\u0442\u0438"
    },
    "assistant_select_element_cancel": {
        "message": "\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"
    },
    "assistant_block_element": {
        "message": "\u0411\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0443"
    },
    "assistant_block_element_explain": {
        "message": "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0439\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0443"
    },
    "assistant_slider_explain": {
        "message": "\u041f\u0435\u0440\u0435\u0441\u0443\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0432\u0437\u0443\u043d\u043e\u043a, \u0449\u043e\u0431 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0440\u043e\u0437\u043c\u0456\u0440 \u0431\u043b\u043e\u043a\u0443, \u0434\u043b\u044f \u044f\u043a\u043e\u0433\u043e \u0434\u0456\u044f\u0442\u0438\u043c\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u043e:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "\u0420\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u0456 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u0434\u043e \u0432\u0441\u0456\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432"
    },
    "assistant_block_by_reference": {
        "message": "\u0411\u043b\u043e\u043a\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c"
    },
    "assistant_block_similar": {
        "message": "\u0411\u043b\u043e\u043a\u0443\u0432\u0430\u0442\u0438 \u0441\u0445\u043e\u0436\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438"
    },
    "assistant_another_element": {
        "message": "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0456\u043d\u0448\u0438\u0439 \u0435\u043b\u0435\u043c\u0435\u043d\u0442"
    },
    "assistant_preview": {
        "message": "\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434"
    },
    "assistant_block": {
        "message": "\u0417\u0430\u0431\u043b\u043e\u043a\u0443\u0432\u0430\u0442\u0438"
    },
    "assistant_settings": {
        "message": "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u043e\u043c\u0456\u0447\u043d\u0438\u043a\u0430"
    },
    "assistant_preview_header": {
        "message": "\u0411\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0443 - \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434"
    },
    "assistant_preview_header_info": {
        "message": "\u041f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u0439\u0442\u0435\u0441\u044f, \u0449\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0437\u0430\u0431\u043b\u043e\u043a\u043e\u0432\u0430\u043d\u0438\u0439 \u044f\u043a \u0441\u043b\u0456\u0434"
    },
    "assistant_preview_end": {
        "message": "\u0417\u0430\u043a\u0456\u043d\u0447\u0438\u0442\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434"
    },
    "wot_unknown_description": {
        "message": "\u0420\u0435\u043f\u0443\u0442\u0430\u0446\u0456\u044f \u043d\u0435 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0430"
    },
    "wot_bad_description": {
        "message": "\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u043c\u0430\u0454 \u0434\u0443\u0436\u0435 \u043f\u043e\u0433\u0430\u043d\u0443 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0456\u044e\n\u0437\u0430 \u0432\u0435\u0440\u0441\u0456\u0454\u044e "
    },
    "wot_poor_description": {
        "message": "\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u043c\u0430\u0454 \u043f\u043e\u0433\u0430\u043d\u0443 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0456\u044e\n\u0437\u0430 \u0432\u0435\u0440\u0441\u0456\u0454\u044e "
    },
    "wot_unsatisfactory_description": {
        "message": "\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u043c\u0430\u0454 \u043d\u0435\u0437\u0430\u0434\u043e\u0432\u0456\u043b\u044c\u043d\u0443 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0456\u044e\n\u0437\u0430 \u0432\u0435\u0440\u0441\u0456\u0454\u044e "
    },
    "wot_good_description": {
        "message": "\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u043c\u0430\u0454 \u0434\u043e\u0431\u0440\u0443 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0456\u044e\n\u0437\u0430 \u0432\u0435\u0440\u0441\u0456\u0454\u044e "
    },
    "wot_excellent_description": {
        "message": "\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u043c\u0430\u0454 \u0434\u0443\u0436\u0435 \u0432\u0456\u0434\u043c\u0456\u043d\u043d\u0443 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0456\u044e\n\u0437\u0430 \u0432\u0435\u0440\u0441\u0456\u0454\u044e "
    },
    "settings_choose_size_and_position": {
        "message": "\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0439\u0442\u0435 \u0440\u043e\u0437\u043c\u0456\u0440 \u0456 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044f \u043f\u043e\u043c\u0456\u0447\u043d\u0438\u043a\u0430 AdGuard"
    },
    "settings_icon_size": {
        "message": "\u0420\u043e\u0437\u043c\u0456\u0440 \u0456\u043a\u043e\u043d\u043a\u0438:"
    },
    "settings_small": {
        "message": "\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430"
    },
    "settings_big": {
        "message": "\u0412\u0435\u043b\u0438\u043a\u0430"
    },
    "settings_position": {
        "message": "\u041f\u043e\u0437\u0438\u0446\u0456\u044f:"
    },
    "settings_left_top": {
        "message": "\u0417\u0432\u0435\u0440\u0445\u0443 \u0437\u043b\u0456\u0432\u0430"
    },
    "settings_right_top": {
        "message": "\u0417\u0432\u0435\u0440\u0445\u0443 \u0441\u043f\u0440\u0430\u0432\u0430"
    },
    "settings_left_bottom": {
        "message": "\u0412\u043d\u0438\u0437\u0443 \u0437\u043b\u0456\u0432\u0430"
    },
    "settings_right_bottom": {
        "message": "\u0412\u043d\u0438\u0437\u0443 \u0441\u043f\u0440\u0430\u0432\u0430"
    },
    "settings_cancel": {
        "message": "\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"
    },
    "settings_save": {
        "message": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"
    }
}
var pl = {
    "assistant_select_element_start": "Rozpocznij",
    "assistant_select_element_text": "Wybierz element na stronie do zablokowania. Od\u015bwie\u017c stron\u0119, aby anulowa\u0107 tryb blokowania elementu.",
    "menu_filtration_status": {
        "message": "Filtrowanie na tej stronie internetowej"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Nie filtruj przez 30 sekund"
    },
    "menu_block_ad_on_site": {
        "message": "Zablokuj reklam\u0119 na tej stronie internetowej"
    },
    "menu_report_abuse": {
        "message": "Raportuj stron\u0119 internetow\u0105"
    },
    "menu_site_report": {
        "message": "Raport bezpiecze\u0144stwa strony internetowej"
    },
    "menu_settings": {
        "message": "Ustawienia Asystenta"
    },
    "assistant_select_element": {
        "message": "Blokowanie element\u00f3w"
    },
    "assistant_select_element_ext": {
        "message": "Wybierz element na stronie by zablokowa\u0107"
    },
    "assistant_select_element_cancel": {
        "message": "Anuluj"
    },
    "assistant_block_element": {
        "message": "Blokowanie element\u00f3w"
    },
    "assistant_block_element_explain": {
        "message": "Dostosuj regu\u0142\u0119 blokowania element\u00f3w"
    },
    "assistant_slider_explain": {
        "message": "Przesu\u0144 suwak by zmieni\u0107 rozmiar ramki, dla kt\u00f3rej b\u0119dzie obowi\u0105zywa\u0107 nowa regu\u0142a:"
    },
    "assistant_slider_min": {
        "message": "Minimum"
    },
    "assistant_slider_max": {
        "message": "Maksimum"
    },
    "assistant_extended_settings": {
        "message": "Ustawienia zaawansowane"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Zastosuj regu\u0142\u0119 dla wszystkich stron internetowych"
    },
    "assistant_block_by_reference": {
        "message": "Blokuj u\u017cywaj\u0105c linka referencyjnego"
    },
    "assistant_block_similar": {
        "message": "Blokuj podobne"
    },
    "assistant_another_element": {
        "message": "Wybierz inny element"
    },
    "assistant_preview": {
        "message": "Podgl\u0105d"
    },
    "assistant_block": {
        "message": "Blokuj"
    },
    "assistant_settings": {
        "message": "Ustawienia Asystenta"
    },
    "assistant_preview_header": {
        "message": "Blokowanie element\u00f3w - podgl\u0105d"
    },
    "assistant_preview_header_info": {
        "message": "Upewnij si\u0119, \u017ce element jest blokowany jak zamierzono"
    },
    "assistant_preview_end": {
        "message": "Zamknij podgl\u0105d"
    },
    "wot_unknown_description": {
        "message": "Reputacja nie jest zdefiniowana"
    },
    "wot_bad_description": {
        "message": "Ta strona internetowa ma bardzo z\u0142\u0105 reputacj\u0119 zgodnie z"
    },
    "wot_poor_description": {
        "message": "Ta strona internetowa ma z\u0142\u0105 reputacj\u0119 zgodnie z"
    },
    "wot_unsatisfactory_description": {
        "message": "Ta strona internetowa ma s\u0142ab\u0105 reputacj\u0119 zgodnie z"
    },
    "wot_good_description": {
        "message": "Ta strona internetowa ma dobr\u0105 reputacj\u0119 zgodnie z"
    },
    "wot_excellent_description": {
        "message": "Ta strona internetowa ma doskona\u0142\u0105 reputacj\u0119 zgodnie z"
    },
    "settings_choose_size_and_position": {
        "message": "Dostosuj rozmiar i pozycj\u0119 Asystenta AdGuarda"
    },
    "settings_icon_size": {
        "message": "Rozmiar ikony:"
    },
    "settings_small": {
        "message": "Ma\u0142y"
    },
    "settings_big": {
        "message": "Du\u017cy"
    },
    "settings_position": {
        "message": "Pozycja:"
    },
    "settings_left_top": {
        "message": "Lewy g\u00f3rny"
    },
    "settings_right_top": {
        "message": "Prawy g\u00f3rny"
    },
    "settings_left_bottom": {
        "message": "Na dole po lewej"
    },
    "settings_right_bottom": {
        "message": "Na dole po prawej"
    },
    "settings_cancel": {
        "message": "Anuluj"
    },
    "settings_save": {
        "message": "Zapisz zmiany"
    }
}
var de = {
    "assistant_select_element_start": "Starten",
    "assistant_select_element_text": "W\u00e4hlen Sie ein zu blockierendes Element auf der Seite aus. Laden Sie die Seite neu, um den Blockiermodus zu verlassen.",
    "menu_filtration_status": {
        "message": "Auf dieser Webseite filtern"
    },
    "menu_do_not_filter_30_sec": {
        "message": "F\u00fcr 30 Sekunden nicht blockieren"
    },
    "menu_block_ad_on_site": {
        "message": "Werbung auf dieser Seite blockieren"
    },
    "menu_report_abuse": {
        "message": "Diese Webseite melden"
    },
    "menu_site_report": {
        "message": "Webseiten-Sicherheitsbericht"
    },
    "menu_settings": {
        "message": "Assistenten-Einstellungen"
    },
    "assistant_select_element": {
        "message": "Element-Blockierung"
    },
    "assistant_select_element_ext": {
        "message": "W\u00e4hlen Sie ein zu blockierendes Element auf der Seite aus"
    },
    "assistant_select_element_cancel": {
        "message": "Abbrechen"
    },
    "assistant_block_element": {
        "message": "Element-Blockierung"
    },
    "assistant_block_element_explain": {
        "message": "Anpassen der Regel der Element-Blockierung"
    },
    "assistant_slider_explain": {
        "message": "Bewegen Sie den Schieberegler, um die Ausma\u00dfgr\u00f6\u00dfe der neuen Regeln zu \u00e4ndern:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Erweiterte Einstellungen"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Regel auf alle Webseiten anwenden"
    },
    "assistant_block_by_reference": {
        "message": "Durch Referenzlink blockieren"
    },
    "assistant_block_similar": {
        "message": "\u00c4hnliche Elemente blockieren"
    },
    "assistant_another_element": {
        "message": "Ein anderes Element w\u00e4hlen"
    },
    "assistant_preview": {
        "message": "Vorschau"
    },
    "assistant_block": {
        "message": "Blockieren"
    },
    "assistant_settings": {
        "message": "Assistenten-Einstellungen"
    },
    "assistant_preview_header": {
        "message": "Element-Blockierung - Vorschau"
    },
    "assistant_preview_header_info": {
        "message": "Pr\u00fcfen Sie, ob das Element blockiert ist"
    },
    "assistant_preview_end": {
        "message": "Vorschau beenden"
    },
    "wot_unknown_description": {
        "message": "Kein Ruf festgelegt"
    },
    "wot_bad_description": {
        "message": "Diese Webseite hat einen sehr schlechten Ruf laut "
    },
    "wot_poor_description": {
        "message": "Diese Webseite hat einen schlechten Ruf laut "
    },
    "wot_unsatisfactory_description": {
        "message": "Diese Webseite hat einen schlechten Ruf laut "
    },
    "wot_good_description": {
        "message": "Diese Webseite hat einen guten Ruf laut "
    },
    "wot_excellent_description": {
        "message": "Diese Webseite hat einen exzellenten Ruf laut "
    },
    "settings_choose_size_and_position": {
        "message": "Anpassen der Gr\u00f6\u00dfe und Position des AdGuard-Assistenten"
    },
    "settings_icon_size": {
        "message": "Symbol-Gr\u00f6\u00dfe:"
    },
    "settings_small": {
        "message": "Klein"
    },
    "settings_big": {
        "message": "Gro\u00df"
    },
    "settings_position": {
        "message": "Position:"
    },
    "settings_left_top": {
        "message": "Oben links"
    },
    "settings_right_top": {
        "message": "Oben rechts"
    },
    "settings_left_bottom": {
        "message": "Unten links"
    },
    "settings_right_bottom": {
        "message": "Unten rechts"
    },
    "settings_cancel": {
        "message": "Abbrechen"
    },
    "settings_save": {
        "message": "\u00c4nderungen speichern"
    }
}
var zh_CN = {
    "assistant_select_element_start": "\u5f00\u59cb",
    "assistant_select_element_text": "\u9009\u62e9\u8981\u62e6\u622a\u7684\u7f51\u9875\u5143\u7d20\u3002\u8981\u53d6\u6d88\u5143\u7d20\u62e6\u622a\u6a21\u5f0f\uff0c\u8bf7\u5237\u65b0\u7f51\u9875\u3002",
    "menu_filtration_status": {
        "message": "\u5bf9\u6b64\u7f51\u7ad9\u8fdb\u884c\u8fc7\u6ee4"
    },
    "menu_do_not_filter_30_sec": {
        "message": "\u6682\u505c\u8fc7\u6ee4 30 \u79d2"
    },
    "menu_block_ad_on_site": {
        "message": "\u62e6\u622a\u6b64\u7f51\u7ad9\u4e0a\u7684\u5e7f\u544a"
    },
    "menu_report_abuse": {
        "message": "\u62a5\u544a\u6b64\u7f51\u7ad9"
    },
    "menu_site_report": {
        "message": "\u7f51\u7ad9\u5b89\u5168\u62a5\u544a"
    },
    "menu_settings": {
        "message": "\u52a9\u624b\u8bbe\u7f6e"
    },
    "assistant_select_element": {
        "message": "\u62e6\u622a\u5143\u7d20"
    },
    "assistant_select_element_ext": {
        "message": "\u9009\u62e9\u6b64\u9875\u9762\u4e0a\u9700\u8981\u62e6\u622a\u7684\u5143\u7d20"
    },
    "assistant_select_element_cancel": {
        "message": "\u53d6\u6d88"
    },
    "assistant_block_element": {
        "message": "\u62e6\u622a\u5143\u7d20"
    },
    "assistant_block_element_explain": {
        "message": "\u8c03\u6574\u5143\u7d20\u62e6\u622a\u89c4\u5219"
    },
    "assistant_slider_explain": {
        "message": "\u4f7f\u7528\u6ed1\u5757\u6539\u53d8\u8981\u7531\u65b0\u89c4\u5219\u5c06\u8981\u62e6\u622a\u7684\u6846\u67b6\u5927\u5c0f\uff1a"
    },
    "assistant_slider_min": {
        "message": "\u6700\u5c0f"
    },
    "assistant_slider_max": {
        "message": "\u6700\u5927"
    },
    "assistant_extended_settings": {
        "message": "\u9ad8\u7ea7\u8bbe\u7f6e"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\u5e94\u7528\u89c4\u5219\u81f3\u6240\u6709\u7f51\u7ad9"
    },
    "assistant_block_by_reference": {
        "message": "\u901a\u8fc7\u53c2\u8003\u94fe\u63a5\u8fdb\u884c\u62e6\u622a"
    },
    "assistant_block_similar": {
        "message": "\u62e6\u622a\u7c7b\u4f3c\u5143\u7d20"
    },
    "assistant_another_element": {
        "message": "\u9009\u62e9\u5176\u5b83\u5143\u7d20"
    },
    "assistant_preview": {
        "message": "\u9884\u89c8"
    },
    "assistant_block": {
        "message": "\u62e6\u622a"
    },
    "assistant_settings": {
        "message": "AdGuard \u52a9\u624b\u8bbe\u7f6e"
    },
    "assistant_preview_header": {
        "message": "\u5143\u7d20\u62e6\u622a - \u9884\u89c8"
    },
    "assistant_preview_header_info": {
        "message": "\u8bf7\u786e\u4fdd\u5143\u7d20\u62e6\u622a\u65b9\u5f0f\u7b26\u5408\u9884\u671f"
    },
    "assistant_preview_end": {
        "message": "\u9000\u51fa\u9884\u89c8"
    },
    "wot_unknown_description": {
        "message": "\u58f0\u671b\u5c1a\u672a\u5b9a\u4e49"
    },
    "wot_bad_description": {
        "message": "\u6b64\u7f51\u7ad9\u5728\u4ee5\u4e0b\u6570\u636e\u5e93\u4e2d\u58f0\u671b\u6781\u4f4e"
    },
    "wot_poor_description": {
        "message": "\u6b64\u7f51\u7ad9\u5728\u4ee5\u4e0b\u6570\u636e\u5e93\u4e2d\u58f0\u671b\u4f4e\u4e0b "
    },
    "wot_unsatisfactory_description": {
        "message": "\u6b64\u7f51\u7ad9\u5728\u4ee5\u4e0b\u6570\u636e\u5e93\u4e2d\u58f0\u671b\u4e0d\u4f73 "
    },
    "wot_good_description": {
        "message": "\u6b64\u7f51\u7ad9\u5728\u4ee5\u4e0b\u6570\u636e\u5e93\u4e2d\u58f0\u671b\u826f\u597d "
    },
    "wot_excellent_description": {
        "message": "\u6b64\u7f51\u7ad9\u5728\u4ee5\u4e0b\u6570\u636e\u5e93\u4e2d\u58f0\u671b\u6781\u4f73 "
    },
    "settings_choose_size_and_position": {
        "message": "\u8c03\u6574 AdGuard \u52a9\u624b\u7684\u5927\u5c0f\u4e0e\u4f4d\u7f6e"
    },
    "settings_icon_size": {
        "message": "\u56fe\u6807\u5927\u5c0f\uff1a"
    },
    "settings_small": {
        "message": "\u5c0f"
    },
    "settings_big": {
        "message": "\u5927"
    },
    "settings_position": {
        "message": "\u4f4d\u7f6e\uff1a"
    },
    "settings_left_top": {
        "message": "\u5de6\u4e0a\u89d2"
    },
    "settings_right_top": {
        "message": "\u53f3\u4e0a\u89d2"
    },
    "settings_left_bottom": {
        "message": "\u5de6\u4e0b\u89d2"
    },
    "settings_right_bottom": {
        "message": "\u53f3\u4e0b\u89d2"
    },
    "settings_cancel": {
        "message": "\u53d6\u6d88"
    },
    "settings_save": {
        "message": "\u4fdd\u5b58\u66f4\u6539"
    }
}
var zh_TW = {
    "assistant_select_element_start": "\u958b\u59cb",
    "assistant_select_element_text": "\u9078\u64c7\u65bc\u6b64\u9801\u9762\u4e0a\u4e4b\u5143\u4ef6\u4f86\u5c01\u9396\u3002\u91cd\u65b0\u6574\u7406\u8a72\u9801\u9762\u4ee5\u53d6\u6d88\u5143\u4ef6\u5c01\u9396\u6a21\u5f0f\u3002",
    "menu_filtration_status": {
        "message": "\u65bc\u6b64\u7db2\u7ad9\u4e0a\u4e4b\u904e\u6ffe"
    },
    "menu_do_not_filter_30_sec": {
        "message": "\u65bc30\u79d2\u5167\u4e0d\u8981\u904e\u6ffe"
    },
    "menu_block_ad_on_site": {
        "message": "\u5c01\u9396\u65bc\u6b64\u7db2\u7ad9\u4e0a\u4e4b\u5ee3\u544a"
    },
    "menu_report_abuse": {
        "message": "\u5831\u544a\u8a72\u7db2\u7ad9"
    },
    "menu_site_report": {
        "message": "\u7db2\u7ad9\u5b89\u5168\u5831\u544a"
    },
    "menu_settings": {
        "message": "\u52a9\u7406\u8a2d\u5b9a"
    },
    "assistant_select_element": {
        "message": "\u5143\u4ef6\u5c01\u9396"
    },
    "assistant_select_element_ext": {
        "message": "\u9078\u64c7\u65bc\u6b64\u9801\u9762\u4e0a\u4e4b\u5143\u4ef6\u4f86\u5c01\u9396"
    },
    "assistant_select_element_cancel": {
        "message": "\u53d6\u6d88"
    },
    "assistant_block_element": {
        "message": "\u5143\u4ef6\u5c01\u9396"
    },
    "assistant_block_element_explain": {
        "message": "\u8abf\u6574\u5143\u4ef6\u5c01\u9396\u898f\u5247"
    },
    "assistant_slider_explain": {
        "message": "\u79fb\u52d5\u6ed1\u6a19\u4ee5\u66f4\u6539\u6846\u67b6\u7684\u5c3a\u5bf8\u3002\u65b0\u7684\u898f\u5247\u5c07\u4f5c\u7528\u65bc\uff1a"
    },
    "assistant_slider_min": {
        "message": "\u6700\u5c0f"
    },
    "assistant_slider_max": {
        "message": "\u6700\u5927"
    },
    "assistant_extended_settings": {
        "message": "\u9032\u968e\u8a2d\u5b9a"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\u5957\u7528\u6b64\u5c0d\u6240\u6709\u7684\u7db2\u7ad9\u4e4b\u898f\u5247"
    },
    "assistant_block_by_reference": {
        "message": "\u6309\u7167\u53c3\u8003\u9023\u7d50\u5c01\u9396"
    },
    "assistant_block_similar": {
        "message": "\u5c01\u9396\u76f8\u4f3c\u4e4b\u7269"
    },
    "assistant_another_element": {
        "message": "\u9078\u64c7\u53e6\u4e00\u500b\u5143\u4ef6"
    },
    "assistant_preview": {
        "message": "\u9810\u89bd"
    },
    "assistant_block": {
        "message": "\u5c01\u9396"
    },
    "assistant_settings": {
        "message": "\u52a9\u7406\u8a2d\u5b9a"
    },
    "assistant_preview_header": {
        "message": "\u5143\u4ef6\u5c01\u9396 - \u9810\u89bd"
    },
    "assistant_preview_header_info": {
        "message": "\u78ba\u5b9a\u5143\u4ef6\u5982\u9810\u671f\u7684\u88ab\u5c01\u9396"
    },
    "assistant_preview_end": {
        "message": "\u96e2\u958b\u9810\u89bd"
    },
    "wot_unknown_description": {
        "message": "\u4fe1\u8b7d\u672a\u88ab\u754c\u5b9a"
    },
    "wot_bad_description": {
        "message": "\u8a72\u7db2\u7ad9\u6709\u975e\u5e38\u58de\u7684\u4fe1\u8b7d\uff0c\u6839\u64da"
    },
    "wot_poor_description": {
        "message": "\u8a72\u7db2\u7ad9\u6709\u58de\u7684\u4fe1\u8b7d\uff0c\u6839\u64da"
    },
    "wot_unsatisfactory_description": {
        "message": "\u8a72\u7db2\u7ad9\u6709\u4e0d\u597d\u7684\u4fe1\u8b7d\uff0c\u6839\u64da"
    },
    "wot_good_description": {
        "message": "\u8a72\u7db2\u7ad9\u6709\u597d\u7684\u4fe1\u8b7d\uff0c\u6839\u64da"
    },
    "wot_excellent_description": {
        "message": "\u8a72\u7db2\u7ad9\u6709\u6975\u597d\u7684\u4fe1\u8b7d\uff0c\u6839\u64da"
    },
    "settings_choose_size_and_position": {
        "message": "\u8abf\u6574 AdGuard \u52a9\u7406 \u5c3a\u5bf8\u548c\u4f4d\u7f6e"
    },
    "settings_icon_size": {
        "message": "\u5716\u793a\u5c3a\u5bf8\uff1a"
    },
    "settings_small": {
        "message": "\u5c0f\u7684"
    },
    "settings_big": {
        "message": "\u5927\u7684"
    },
    "settings_position": {
        "message": "\u4f4d\u7f6e\uff1a"
    },
    "settings_left_top": {
        "message": "\u5de6\u4e0a\u89d2"
    },
    "settings_right_top": {
        "message": "\u53f3\u4e0a\u89d2"
    },
    "settings_left_bottom": {
        "message": "\u5de6\u4e0b\u89d2"
    },
    "settings_right_bottom": {
        "message": "\u53f3\u4e0b\u89d2"
    },
    "settings_cancel": {
        "message": "\u53d6\u6d88"
    },
    "settings_save": {
        "message": "\u5132\u5b58\u66f4\u6539"
    }
}
var he = {
    "assistant_select_element_start": "\u05d4\u05ea\u05d7\u05dc",
    "assistant_select_element_text": ".\u05d1\u05d7\u05e8 \u05d0\u05dc\u05de\u05e0\u05d8 \u05d1\u05d3\u05e3 \u05dc\u05d7\u05e1\u05d9\u05de\u05d4 .\u05e8\u05e2\u05e0\u05df \u05d0\u05ea \u05d4\u05d3\u05e3 \u05db\u05d3\u05d9 \u05dc\u05d1\u05d8\u05dc \u05d0\u05ea \u05de\u05e6\u05d1 \u05d7\u05e1\u05d9\u05de\u05ea \u05d4\u05d0\u05dc\u05de\u05e0\u05d8\u05d9\u05dd",
    "menu_filtration_status": {
        "message": "\u05e1\u05d9\u05e0\u05d5\u05df \u05d1\u05d0\u05ea\u05e8 \u05d6\u05d4"
    },
    "menu_do_not_filter_30_sec": {
        "message": "\u05d0\u05dc \u05ea\u05e1\u05e0\u05df \u05db- 30 \u05e9\u05e0\u05d9\u05d5\u05ea"
    },
    "menu_block_ad_on_site": {
        "message": "\u05d7\u05e1\u05d5\u05dd \u05e4\u05e8\u05e1\u05d5\u05de\u05ea \u05d1\u05d0\u05ea\u05e8 \u05d6\u05d4"
    },
    "menu_report_abuse": {
        "message": "\u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d4\u05d0\u05ea\u05e8"
    },
    "menu_site_report": {
        "message": "\u05d3\u05d9\u05d5\u05d5\u05d7 \u05d0\u05d1\u05d8\u05d7\u05ea \u05d0\u05ea\u05e8"
    },
    "menu_settings": {
        "message": "\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d4\u05e2\u05d5\u05d6\u05e8 \u05d4\u05d0\u05d9\u05e9\u05d9"
    },
    "assistant_select_element": {
        "message": "\u05d7\u05d5\u05e1\u05dd \u05d0\u05dc\u05de\u05e0\u05d8"
    },
    "assistant_select_element_ext": {
        "message": "\u05d1\u05d7\u05e8 \u05d0\u05dc\u05de\u05e0\u05d8 \u05d1\u05d3\u05e3 \u05dc\u05d7\u05e1\u05d9\u05de\u05d4"
    },
    "assistant_select_element_cancel": {
        "message": "\u05d1\u05d8\u05dc"
    },
    "assistant_block_element": {
        "message": "\u05d7\u05e1\u05d9\u05de\u05ea \u05d0\u05dc\u05de\u05e0\u05d8"
    },
    "assistant_block_element_explain": {
        "message": "\u05d4\u05ea\u05d0\u05dd \u05db\u05dc\u05dc \u05d7\u05e1\u05d9\u05de\u05ea \u05d0\u05dc\u05de\u05e0\u05d8"
    },
    "assistant_slider_explain": {
        "message": ":\u05d4\u05d6\u05d6 \u05d0\u05ea \u05d4\u05de\u05d7\u05d5\u05d5\u05df \u05db\u05d3\u05d9 \u05dc\u05e9\u05e0\u05d5\u05ea \u05d0\u05ea \u05d2\u05d5\u05d3\u05dc \u05d4\u05de\u05e1\u05d2\u05e8\u05ea \u05d1\u05d4 \u05d9\u05e2\u05d1\u05d5\u05d3 \u05d4\u05db\u05dc\u05dc \u05d4\u05d7\u05d3\u05e9"
    },
    "assistant_slider_min": {
        "message": "\u05de\u05d9\u05e0\u05d9\u05de\u05d5\u05dd"
    },
    "assistant_slider_max": {
        "message": "\u05de\u05e7\u05e1\u05d9\u05de\u05d5\u05dd"
    },
    "assistant_extended_settings": {
        "message": "\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05de\u05ea\u05e7\u05d3\u05de\u05d5\u05ea"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\u05d4\u05d7\u05dc \u05d0\u05ea \u05d4\u05db\u05dc\u05dc \u05e2\u05dc \u05db\u05dc \u05d4\u05d0\u05ea\u05e8\u05d9\u05dd"
    },
    "assistant_block_by_reference": {
        "message": "\u05d7\u05e1\u05d5\u05dd \u05d4\u05e4\u05e0\u05d9\u05d9\u05ea \u05e7\u05d9\u05e9\u05d5\u05e8"
    },
    "assistant_block_similar": {
        "message": "\u05d7\u05e1\u05d5\u05dd \u05d3\u05d5\u05de\u05d4"
    },
    "assistant_another_element": {
        "message": "\u05d1\u05d7\u05e8 \u05d0\u05dc\u05de\u05e0\u05d8 \u05d0\u05d7\u05e8"
    },
    "assistant_preview": {
        "message": "\u05ea\u05e6\u05d5\u05d2\u05d4 \u05de\u05e7\u05d3\u05d9\u05de\u05d4"
    },
    "assistant_block": {
        "message": "\u05d7\u05e1\u05d5\u05dd"
    },
    "assistant_settings": {
        "message": "\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d4\u05e2\u05d5\u05d6\u05e8 \u05d4\u05d0\u05d9\u05e9\u05d9"
    },
    "assistant_preview_header": {
        "message": "\u05ea\u05e6\u05d5\u05d2\u05d4 \u05de\u05e7\u05d3\u05d9\u05de\u05d4 - \u05d7\u05e1\u05d9\u05de\u05ea \u05d0\u05dc\u05de\u05e0\u05d8"
    },
    "assistant_preview_header_info": {
        "message": "\u05d5\u05d3\u05d0 \u05db\u05d9 \u05d0\u05dc\u05de\u05e0\u05d8 \u05d6\u05d4 \u05d7\u05e1\u05d5\u05dd \u05d1\u05db\u05d5\u05d5\u05e0\u05d4"
    },
    "assistant_preview_end": {
        "message": "\u05e6\u05d0 \u05de\u05ea\u05e6\u05d5\u05d2\u05d4 \u05de\u05e7\u05d3\u05d9\u05de\u05d4"
    },
    "wot_unknown_description": {
        "message": "\u05de\u05d5\u05e0\u05d9\u05d8\u05d9\u05df \u05d0\u05d9\u05e0\u05d5 \u05de\u05d5\u05d2\u05d3\u05e8"
    },
    "wot_bad_description": {
        "message": "\u05dc\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d9\u05e9 \u05de\u05d5\u05e0\u05d9\u05d8\u05d9\u05df \u05e8\u05e2 \u05de\u05d0\u05d5\u05d3 \u05e2\u05dc \u05e4\u05d9"
    },
    "wot_poor_description": {
        "message": "\u05dc\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d9\u05e9 \u05de\u05d5\u05e0\u05d9\u05d8\u05d9\u05df \u05e8\u05e2 \u05e2\u05dc \u05e4\u05d9"
    },
    "wot_unsatisfactory_description": {
        "message": "\u05dc\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d9\u05e9 \u05de\u05d5\u05e0\u05d9\u05d8\u05d9\u05df \u05d3\u05dc \u05e2\u05dc \u05e4\u05d9"
    },
    "wot_good_description": {
        "message": "\u05dc\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d9\u05e9 \u05de\u05d5\u05e0\u05d9\u05d8\u05d9\u05df \u05d8\u05d5\u05d1 \u05e2\u05dc \u05e4\u05d9"
    },
    "wot_excellent_description": {
        "message": "\u05dc\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d9\u05e9 \u05de\u05d5\u05e0\u05d9\u05d8\u05d9\u05df \u05de\u05e2\u05d5\u05dc\u05d4 \u05e2\u05dc \u05e4\u05d9"
    },
    "settings_choose_size_and_position": {
        "message": "\u05d4\u05ea\u05d0\u05dd \u05d2\u05d5\u05d3\u05dc \u05d5\u05de\u05d9\u05e7\u05d5\u05dd \u05e9\u05dc \u05d4\u05e2\u05d5\u05d6\u05e8 \u05d4\u05d0\u05d9\u05e9\u05d9 \u05e9\u05dc \u05d0\u05d3\u05d2\u05d0\u05e8\u05d3"
    },
    "settings_icon_size": {
        "message": ":\u05d2\u05d5\u05d3\u05dc \u05e6\u05dc\u05de\u05d9\u05ea"
    },
    "settings_small": {
        "message": "\u05e7\u05d8\u05df"
    },
    "settings_big": {
        "message": "\u05d2\u05d3\u05d5\u05dc"
    },
    "settings_position": {
        "message": ":\u05de\u05d9\u05e7\u05d5\u05dd"
    },
    "settings_left_top": {
        "message": "\u05d1\u05d7\u05dc\u05e7 \u05d4\u05e2\u05dc\u05d9\u05d5\u05df \u05de\u05e9\u05de\u05d0\u05dc"
    },
    "settings_right_top": {
        "message": "\u05d1\u05d7\u05dc\u05e7 \u05d4\u05e2\u05dc\u05d9\u05d5\u05df \u05de\u05d9\u05de\u05d9\u05df"
    },
    "settings_left_bottom": {
        "message": "\u05e6\u05d3 \u05e9\u05de\u05d0\u05dc \u05dc\u05de\u05d8\u05d4"
    },
    "settings_right_bottom": {
        "message": "\u05e6\u05d3 \u05d9\u05de\u05d9\u05df \u05dc\u05de\u05d8\u05d4"
    },
    "settings_cancel": {
        "message": "\u05d1\u05d8\u05dc"
    },
    "settings_save": {
        "message": "\u05e9\u05de\u05d5\u05e8 \u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd"
    }
}
var it = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "Filtraggio su questo sito"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Non filtrare per 30 secondi"
    },
    "menu_block_ad_on_site": {
        "message": "Blocca annunci su questo sito"
    },
    "menu_report_abuse": {
        "message": "Segnala il sito"
    },
    "menu_site_report": {
        "message": "Rapporto di sicurezza del sito internet"
    },
    "menu_settings": {
        "message": "Impostazioni assistente"
    },
    "assistant_select_element": {
        "message": "Bloccaggio elemento"
    },
    "assistant_select_element_ext": {
        "message": "Scegli un elemento da bloccare sulla pagina"
    },
    "assistant_select_element_cancel": {
        "message": "Annulla"
    },
    "assistant_block_element": {
        "message": "Bloccaggio elemento"
    },
    "assistant_block_element_explain": {
        "message": "Modifica la regola di bloccaggio elemento"
    },
    "assistant_slider_explain": {
        "message": "Muovi la barra per cambiare la grandezza del frame da per il quale la nuova regola funzioner\u00e0:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Impostazioni avanzate"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Applica la regola a tutti i siti"
    },
    "assistant_block_by_reference": {
        "message": "Blocca tramite link di referenza"
    },
    "assistant_block_similar": {
        "message": "Blocca simile"
    },
    "assistant_another_element": {
        "message": "Seleziona un altro elemento"
    },
    "assistant_preview": {
        "message": "Anteprima"
    },
    "assistant_block": {
        "message": "Blocca"
    },
    "assistant_settings": {
        "message": "Impostazioni assistente"
    },
    "assistant_preview_header": {
        "message": "Bloccaggio elemento - anteprima"
    },
    "assistant_preview_header_info": {
        "message": "Assicurati che l'elemento \u00e8 bloccato come richiesto"
    },
    "assistant_preview_end": {
        "message": "Esci dall'anteprima"
    },
    "wot_unknown_description": {
        "message": "La reputazione non \u00e8 definita"
    },
    "wot_bad_description": {
        "message": "Questo sito ha una pessima reputazione\n\nsecondo "
    },
    "wot_poor_description": {
        "message": "Questo sito ha una cattiva reputazione\n\nsecondo "
    },
    "wot_unsatisfactory_description": {
        "message": "Questo sito ha una discreta reputazione\n\nsecondo "
    },
    "wot_good_description": {
        "message": "Questo sito ha una buona reputazione\n\nsecondo "
    },
    "wot_excellent_description": {
        "message": "Questo sito ha un'ottima reputazione\n\nsecondo "
    },
    "settings_choose_size_and_position": {
        "message": "Regola dimensione e posizione di Assistente AdGuard"
    },
    "settings_icon_size": {
        "message": "Grandezza dell'icona:"
    },
    "settings_small": {
        "message": "Piccola"
    },
    "settings_big": {
        "message": "Grande"
    },
    "settings_position": {
        "message": "Posizione:"
    },
    "settings_left_top": {
        "message": "In alto a sinistra"
    },
    "settings_right_top": {
        "message": "In alto a destra"
    },
    "settings_left_bottom": {
        "message": "In basso a sinistra"
    },
    "settings_right_bottom": {
        "message": "In basso a destra"
    },
    "settings_cancel": {
        "message": "Annulla"
    },
    "settings_save": {
        "message": "Salva cambiamenti"
    }
}
var fa = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "\u0641\u06cc\u0644\u062a\u0631\u06cc\u0646\u06af \u062f\u0631 \u0627\u06cc\u0646 \u0648\u0628\u0633\u0627\u06cc\u062a"
    },
    "menu_do_not_filter_30_sec": {
        "message": "\u0628\u0647 \u0645\u062f\u062a 30 \u062b\u0627\u0646\u06cc\u0647 \u0641\u06cc\u0644\u062a\u0631 \u0646\u06a9\u0646"
    },
    "menu_block_ad_on_site": {
        "message": "\u0645\u0633\u062f\u0648\u062f\u0633\u0627\u0632\u06cc \u062a\u0628\u0644\u06cc\u063a \u062f\u0631 \u0627\u06cc\u0646 \u0648\u0628\u0633\u0627\u06cc\u062a"
    },
    "menu_report_abuse": {
        "message": "\u06af\u0632\u0627\u0631\u0634 \u0648\u0628\u0633\u0627\u06cc\u062a"
    },
    "menu_site_report": {
        "message": "\u06af\u0632\u0627\u0631\u0634 \u0627\u0645\u0646\u06cc\u062a\u06cc \u0648\u0628\u0633\u0627\u06cc\u062a"
    },
    "menu_settings": {
        "message": "\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u062f\u0633\u062a\u06cc\u0627\u0631"
    },
    "assistant_select_element": {
        "message": "\u0645\u0633\u062f\u0648\u062f\u0633\u0627\u0632\u06cc \u0639\u0646\u0635\u0631"
    },
    "assistant_select_element_ext": {
        "message": "\u0639\u0646\u0635\u0631\u06cc \u062f\u0631 \u0635\u0641\u062d\u0647 \u0628\u0631\u0627\u06cc \u0645\u0633\u062f\u0648\u062f\u0633\u0627\u0632\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"
    },
    "assistant_select_element_cancel": {
        "message": "\u0644\u063a\u0648"
    },
    "assistant_block_element": {
        "message": "\u0645\u0633\u062f\u0648\u062f\u0633\u0627\u0632\u06cc \u0639\u0646\u0635\u0631"
    },
    "assistant_block_element_explain": {
        "message": "\u062a\u0646\u0638\u06cc\u0645 \u062f\u0633\u062a\u0648\u0631 \u0645\u0633\u062f\u0648\u062f\u0633\u0627\u0632\u06cc \u0639\u0646\u0635\u0631"
    },
    "assistant_slider_explain": {
        "message": "\u062c\u0627\u0628\u062c\u0627\u06cc\u06cc \u0644\u063a\u0632\u0646\u062f\u0647 \u0628\u0631\u0627\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u0627\u0646\u062f\u0627\u0632\u0647 \u0641\u0631\u06cc\u0645 \u06a9\u0647 \u062f\u0633\u062a\u0648\u0631 \u062c\u062f\u06cc\u062f\u06cc \u06a9\u0627\u0631 \u062e\u0648\u0627\u0647\u062f \u06a9\u0631\u062f:"
    },
    "assistant_slider_min": {
        "message": "\u062d\u062f\u0627\u0642\u0644"
    },
    "assistant_slider_max": {
        "message": "\u062d\u062f\u0627\u06a9\u062b\u0631"
    },
    "assistant_extended_settings": {
        "message": "\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u067e\u06cc\u0634\u0631\u0641\u062a\u0647"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\u0627\u0650\u0639\u0645\u0627\u0644 \u062f\u0633\u062a\u0648\u0631 \u062f\u0631 \u0647\u0645\u0647 \u0648\u0628\u0633\u0627\u06cc\u062a \u0647\u0627"
    },
    "assistant_block_by_reference": {
        "message": "\u0645\u0633\u062f\u0648\u062f\u0633\u0627\u0632\u06cc \u0628\u0627 \u0644\u06cc\u0646\u06a9 \u0645\u0631\u062c\u0639"
    },
    "assistant_block_similar": {
        "message": "\u0645\u0633\u062f\u0648\u062f\u0633\u0627\u0632\u06cc \u0645\u0634\u0627\u0628\u0647"
    },
    "assistant_another_element": {
        "message": "\u0639\u0646\u0635\u0631 \u062f\u06cc\u06af\u0631\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"
    },
    "assistant_preview": {
        "message": "\u067e\u06cc\u0634\u0646\u0645\u0627\u06cc\u0634"
    },
    "assistant_block": {
        "message": "\u0645\u0633\u062f\u0648\u062f"
    },
    "assistant_settings": {
        "message": "\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u062f\u0633\u062a\u06cc\u0627\u0631"
    },
    "assistant_preview_header": {
        "message": "\u0645\u0633\u062f\u0648\u062f\u0633\u0627\u0632\u06cc \u0639\u0646\u0635\u0631 - \u067e\u06cc\u0634\u0646\u0645\u0627\u06cc\u0634"
    },
    "assistant_preview_header_info": {
        "message": "\u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f \u0639\u0646\u0635\u0631 \u0628\u0647 \u0634\u06a9\u0644 \u062f\u0644\u062e\u0648\u0627\u0647 \u0645\u0633\u062f\u0648\u062f \u0634\u0648\u062f"
    },
    "assistant_preview_end": {
        "message": "\u062e\u0631\u0648\u062c \u0627\u0632 \u067e\u06cc\u0634\u0646\u0645\u0627\u06cc\u0634"
    },
    "wot_unknown_description": {
        "message": "\u0627\u0639\u062a\u0628\u0627\u0631 \u062a\u0639\u0631\u06cc\u0641 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a"
    },
    "wot_bad_description": {
        "message": "\u0627\u06cc\u0646 \u0648\u0628\u0633\u0627\u06cc\u062a \u0627\u0639\u062a\u0628\u0627\u0631 \u062e\u06cc\u0644\u06cc \u0628\u062f\u06cc \u062f\u0627\u0631\u062f\n\u0628\u0631 \u0637\u0628\u0642 "
    },
    "wot_poor_description": {
        "message": "\u0627\u06cc\u0646 \u0648\u0628\u0633\u0627\u06cc\u062a \u0627\u0639\u062a\u0628\u0627\u0631 \u0628\u062f\u06cc \u062f\u0627\u0631\u062f\n\u0628\u0631 \u0637\u0628\u0642 "
    },
    "wot_unsatisfactory_description": {
        "message": "\u0627\u06cc\u0646 \u0648\u0628\u0633\u0627\u06cc\u062a \u0627\u0639\u062a\u0628\u0627\u0631 \u06a9\u0645\u06cc \u062f\u0627\u0631\u062f\n\u0628\u0631 \u0637\u0628\u0642 "
    },
    "wot_good_description": {
        "message": "\u0627\u06cc\u0646 \u0648\u0628\u0633\u0627\u06cc\u062a \u0627\u0639\u062a\u0628\u0627\u0631 \u062e\u0648\u0628\u06cc \u062f\u0627\u0631\u062f\n\u0628\u0631 \u0637\u0628\u0642 "
    },
    "wot_excellent_description": {
        "message": "\u0627\u06cc\u0646 \u0648\u0628\u0633\u0627\u06cc\u062a \u0627\u0639\u062a\u0628\u0627\u0631 \u0639\u0627\u0644\u06cc \u062f\u0627\u0631\u062f\n\u0628\u0631 \u0637\u0628\u0642 "
    },
    "settings_choose_size_and_position": {
        "message": "\u062a\u0646\u0638\u06cc\u0645 \u0627\u0646\u062f\u0627\u0632\u0647 \u0648 \u0645\u0648\u0642\u0639\u06cc\u062a \u062f\u0633\u062a\u06cc\u0627\u0631 AdGuard"
    },
    "settings_icon_size": {
        "message": "\u0627\u0646\u062f\u0627\u0632\u0647 \u0622\u06cc\u06a9\u0648\u0646:"
    },
    "settings_small": {
        "message": "\u06a9\u0648\u0686\u06a9"
    },
    "settings_big": {
        "message": "\u0628\u0632\u0631\u06af"
    },
    "settings_position": {
        "message": "\u0645\u0648\u0642\u0639\u06cc\u062a:"
    },
    "settings_left_top": {
        "message": "\u0628\u0627\u0644\u0627 \u0633\u0645\u062a \u0686\u067e"
    },
    "settings_right_top": {
        "message": "\u0628\u0627\u0644\u0627 \u0633\u0645\u062a \u0631\u0627\u0633\u062a"
    },
    "settings_left_bottom": {
        "message": "\u067e\u0627\u06cc\u06cc\u0646 \u0633\u0645\u062a \u0686\u067e"
    },
    "settings_right_bottom": {
        "message": "\u067e\u0627\u06cc\u06cc\u0646 \u0633\u0645\u062a \u0631\u0627\u0633\u062a"
    },
    "settings_cancel": {
        "message": "\u0644\u063a\u0648"
    },
    "settings_save": {
        "message": "\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a"
    }
}
var tr = {
    "assistant_select_element_start": "Ba\u015fla",
    "assistant_select_element_text": "Engellemek i\u00e7in sayfada bir \u00f6\u011fe se\u00e7in. \u00d6\u011fe engelleme modunu iptal etmek i\u00e7in sayfay\u0131 yenileyin.",
    "menu_filtration_status": {
        "message": "Bu sitedeki filtreleme"
    },
    "menu_do_not_filter_30_sec": {
        "message": "30 saniye boyunca filtreleme yapma"
    },
    "menu_block_ad_on_site": {
        "message": "Bu sitede reklam engelle"
    },
    "menu_report_abuse": {
        "message": "Bu siteyi rapor et"
    },
    "menu_site_report": {
        "message": "Sitenin g\u00fcvenlik raporu"
    },
    "menu_settings": {
        "message": "Assistant ayarlar\u0131"
    },
    "assistant_select_element": {
        "message": "\u00d6\u011fe engelleme"
    },
    "assistant_select_element_ext": {
        "message": "Bu sitede engellemek i\u00e7in bir \u00f6\u011fe se\u00e7in"
    },
    "assistant_select_element_cancel": {
        "message": "\u0130ptal"
    },
    "assistant_block_element": {
        "message": "\u00d6\u011fe engelleme"
    },
    "assistant_block_element_explain": {
        "message": "\u00d6\u011fe engelleme kural\u0131n\u0131 ayarla"
    },
    "assistant_slider_explain": {
        "message": "Yeni kural\u0131n \u00e7al\u0131\u015faca\u011f\u0131 \u00e7er\u00e7evenin boyutunu de\u011fi\u015ftirmek i\u00e7in kayar d\u00fc\u011fmeyi hareket ettirin"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAKS"
    },
    "assistant_extended_settings": {
        "message": "Geli\u015fmi\u015f ayarlar"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "T\u00fcm sitelerde bu kural\u0131 uygula"
    },
    "assistant_block_by_reference": {
        "message": "Referans ba\u011flant\u0131 ile engelle"
    },
    "assistant_block_similar": {
        "message": "Benzerlerini engelle"
    },
    "assistant_another_element": {
        "message": "Farkl\u0131 bir \u00f6\u011fe se\u00e7"
    },
    "assistant_preview": {
        "message": "\u00d6nizleme"
    },
    "assistant_block": {
        "message": "Engelle"
    },
    "assistant_settings": {
        "message": "Assistant ayarlar\u0131"
    },
    "assistant_preview_header": {
        "message": "\u00d6\u011fe engelleme - \u00f6nizleme"
    },
    "assistant_preview_header_info": {
        "message": "\u00d6\u011fenin istedi\u011finiz gibi engellendi\u011finden emin olun"
    },
    "assistant_preview_end": {
        "message": "\u00d6nizlemeden \u00e7\u0131k"
    },
    "wot_unknown_description": {
        "message": "Pop\u00fclarite belirlenmemi\u015f"
    },
    "wot_bad_description": {
        "message": "Bu site \u00e7ok k\u00f6t\u00fc bir itibara sahip "
    },
    "wot_poor_description": {
        "message": "Bu site k\u00f6t\u00fc bir itibara sahip "
    },
    "wot_unsatisfactory_description": {
        "message": "Bu site zay\u0131f bir itibara sahip "
    },
    "wot_good_description": {
        "message": "Bu site iyi bir itibara sahip "
    },
    "wot_excellent_description": {
        "message": "Bu site m\u00fckemmel bir itibara sahip "
    },
    "settings_choose_size_and_position": {
        "message": "AdGuard Assistant'\u0131n boyut ve konumunu ayarla"
    },
    "settings_icon_size": {
        "message": "Simge boyutu:"
    },
    "settings_small": {
        "message": "K\u00fc\u00e7\u00fck"
    },
    "settings_big": {
        "message": "B\u00fcy\u00fck"
    },
    "settings_position": {
        "message": "Konum:"
    },
    "settings_left_top": {
        "message": "Sol \u00fcst"
    },
    "settings_right_top": {
        "message": "Sa\u011f \u00fcst"
    },
    "settings_left_bottom": {
        "message": "Sol alt"
    },
    "settings_right_bottom": {
        "message": "Sa\u011f alt"
    },
    "settings_cancel": {
        "message": "\u0130ptal"
    },
    "settings_save": {
        "message": "De\u011fi\u015fiklikleri kaydet"
    }
}
var ja = {
    "assistant_select_element_start": "\u958b\u59cb",
    "assistant_select_element_text": "\u30d6\u30ed\u30c3\u30af\u3059\u308b\u30da\u30fc\u30b8\u4e0a\u306e\u8981\u7d20\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30da\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u8981\u7d20\u306e\u30d6\u30ed\u30c3\u30af\u30e2\u30fc\u30c9\u3092\u89e3\u9664\u3057\u307e\u3059\u3002",
    "menu_filtration_status": {
        "message": "\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"
    },
    "menu_do_not_filter_30_sec": {
        "message": "30\u79d2\u9593\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u884c\u308f\u306a\u3044"
    },
    "menu_block_ad_on_site": {
        "message": "\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u5e83\u544a\u3092\u30d6\u30ed\u30c3\u30af"
    },
    "menu_report_abuse": {
        "message": "\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u5831\u544a"
    },
    "menu_site_report": {
        "message": "\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ec\u30dd\u30fc\u30c8"
    },
    "menu_settings": {
        "message": "\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8\u306e\u8a2d\u5b9a"
    },
    "assistant_select_element": {
        "message": "\u8981\u7d20\u3092\u30d6\u30ed\u30c3\u30af"
    },
    "assistant_select_element_ext": {
        "message": "\u30d6\u30ed\u30c3\u30af\u3059\u308b\u8981\u7d20\u3092\u9078\u629e"
    },
    "assistant_select_element_cancel": {
        "message": "\u30ad\u30e3\u30f3\u30bb\u30eb"
    },
    "assistant_block_element": {
        "message": "\u8981\u7d20\u3092\u30d6\u30ed\u30c3\u30af"
    },
    "assistant_block_element_explain": {
        "message": "\u8981\u7d20\u306e\u30d6\u30ed\u30c3\u30af\u30eb\u30fc\u30eb\u3092\u8abf\u6574\u3059\u308b"
    },
    "assistant_slider_explain": {
        "message": "\u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u52d5\u304b\u3059\u3068\u3001\u30d6\u30ed\u30c3\u30af\u3059\u308b\u30d5\u30ec\u30fc\u30e0\u306e\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3067\u304d\u307e\u3059:"
    },
    "assistant_slider_min": {
        "message": "\u6700\u5c0f"
    },
    "assistant_slider_max": {
        "message": "\u6700\u5927"
    },
    "assistant_extended_settings": {
        "message": "\u9ad8\u5ea6\u306a\u8a2d\u5b9a"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\u5168\u3066\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u3053\u306e\u30eb\u30fc\u30eb\u3092\u9069\u7528"
    },
    "assistant_block_by_reference": {
        "message": "\u53c2\u7167\u30ea\u30f3\u30af\u306b\u3088\u308b\u30d6\u30ed\u30c3\u30af"
    },
    "assistant_block_similar": {
        "message": "\u985e\u4f3c\u9805\u76ee\u3092\u30d6\u30ed\u30c3\u30af"
    },
    "assistant_another_element": {
        "message": "\u4ed6\u306e\u8981\u7d20\u3092\u9078\u629e"
    },
    "assistant_preview": {
        "message": "\u30d7\u30ec\u30d3\u30e5\u30fc"
    },
    "assistant_block": {
        "message": "\u30d6\u30ed\u30c3\u30af"
    },
    "assistant_settings": {
        "message": "\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8\u306e\u8a2d\u5b9a"
    },
    "assistant_preview_header": {
        "message": "\u8981\u7d20\u306e\u30d6\u30ed\u30c3\u30af - \u30d7\u30ec\u30d3\u30e5\u30fc"
    },
    "assistant_preview_header_info": {
        "message": "\u8981\u7d20\u304c\u610f\u56f3\u3057\u305f\u3068\u304a\u308a\u306b\u30d6\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059"
    },
    "assistant_preview_end": {
        "message": "\u30d7\u30ec\u30d3\u30e5\u30fc\u3092\u7d42\u4e86"
    },
    "wot_unknown_description": {
        "message": "\u8a55\u5224\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u305b\u3093"
    },
    "wot_bad_description": {
        "message": "\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f\u975e\u5e38\u306b\u8a55\u5224\u304c\u60aa\u3044\u3067\u3059: "
    },
    "wot_poor_description": {
        "message": "\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f\u8a55\u5224\u304c\u60aa\u3044\u3067\u3059: "
    },
    "wot_unsatisfactory_description": {
        "message": "\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f\u8a55\u5224\u304c\u3084\u3084\u60aa\u3044\u3067\u3059: "
    },
    "wot_good_description": {
        "message": "\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f\u8a55\u5224\u304c\u826f\u3044\u3067\u3059: "
    },
    "wot_excellent_description": {
        "message": "\u3053\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306f\u3068\u3066\u3082\u8a55\u5224\u304c\u826f\u3044\u3067\u3059: "
    },
    "settings_choose_size_and_position": {
        "message": "AdGuard\u30a2\u30b7\u30b9\u30bf\u30f3\u30c8\u306e\u30b5\u30a4\u30ba\u3068\u4f4d\u7f6e\u3092\u8abf\u6574\u3059\u308b"
    },
    "settings_icon_size": {
        "message": "\u30a2\u30a4\u30b3\u30f3\u306e\u5927\u304d\u3055:"
    },
    "settings_small": {
        "message": "\u5c0f"
    },
    "settings_big": {
        "message": "\u5927"
    },
    "settings_position": {
        "message": "\u4f4d\u7f6e:"
    },
    "settings_left_top": {
        "message": "\u5de6\u4e0a"
    },
    "settings_right_top": {
        "message": "\u53f3\u4e0a"
    },
    "settings_left_bottom": {
        "message": "\u5de6\u4e0b"
    },
    "settings_right_bottom": {
        "message": "\u53f3\u4e0b"
    },
    "settings_cancel": {
        "message": "\u30ad\u30e3\u30f3\u30bb\u30eb"
    },
    "settings_save": {
        "message": "\u8a2d\u5b9a\u3092\u4fdd\u5b58"
    }
}
var es_419 = {
    "assistant_select_element_start": "Iniciar",
    "assistant_select_element_text": "Seleccione un elemento de la p\u00e1gina para bloquear. Recargue la p\u00e1gina para cancelar el modo de bloqueo de elementos.",
    "menu_filtration_status": {
        "message": "Filtrando en esta p\u00e1gina"
    },
    "menu_do_not_filter_30_sec": {
        "message": "No filtrar durante 30 segundos"
    },
    "menu_block_ad_on_site": {
        "message": "Bloquear anuncio en esta p\u00e1gina"
    },
    "menu_report_abuse": {
        "message": "Reportar la p\u00e1gina"
    },
    "menu_site_report": {
        "message": "Reporte de seguridad sobre la p\u00e1gina"
    },
    "menu_settings": {
        "message": "Configuraci\u00f3n del Asistente"
    },
    "assistant_select_element": {
        "message": "Bloqueo de Elementos"
    },
    "assistant_select_element_ext": {
        "message": "Seleccione un elemento de la p\u00e1gina para bloquear"
    },
    "assistant_select_element_cancel": {
        "message": "Cancelar"
    },
    "assistant_block_element": {
        "message": "Bloqueo de Elementos"
    },
    "assistant_block_element_explain": {
        "message": "Ajustar regla del bloqueo de elementos"
    },
    "assistant_slider_explain": {
        "message": "Mueva el deslizador para cambiar el tama\u00f1o del marco para el que trabajar\u00e1 la nueva regla:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Configuraci\u00f3n avanzada"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Aplicar la norma a todas las p\u00e1ginas"
    },
    "assistant_block_by_reference": {
        "message": "Bloquear por enlace de referencia"
    },
    "assistant_block_similar": {
        "message": "Bloquear similares"
    },
    "assistant_another_element": {
        "message": "Seleccionar otro elemento"
    },
    "assistant_preview": {
        "message": "Vista previa"
    },
    "assistant_block": {
        "message": "Bloquear"
    },
    "assistant_settings": {
        "message": "Configuraci\u00f3n del asistente"
    },
    "assistant_preview_header": {
        "message": "Bloqueo de elementos - vista previa"
    },
    "assistant_preview_header_info": {
        "message": "Aseg\u00farese de que el elemento est\u00e1 bloqueado como se pretende"
    },
    "assistant_preview_end": {
        "message": "Salir de vista previa"
    },
    "wot_unknown_description": {
        "message": "La reputaci\u00f3n no est\u00e1 definida"
    },
    "wot_bad_description": {
        "message": "Esta p\u00e1gina tiene muy mala reputaci\u00f3n\nseg\u00fan "
    },
    "wot_poor_description": {
        "message": "Esta p\u00e1gina tiene mala reputaci\u00f3n \nseg\u00fan "
    },
    "wot_unsatisfactory_description": {
        "message": "Esta p\u00e1gina tiene poca reputaci\u00f3n \nseg\u00fan "
    },
    "wot_good_description": {
        "message": "Esta p\u00e1gina tiene buena reputaci\u00f3n \nseg\u00fan "
    },
    "wot_excellent_description": {
        "message": "Esta p\u00e1gina tiene excelente reputaci\u00f3n \nseg\u00fan "
    },
    "settings_choose_size_and_position": {
        "message": "Ajustar tama\u00f1o y posici\u00f3n de AdGuard Assistant"
    },
    "settings_icon_size": {
        "message": "Tama\u00f1o del icono:"
    },
    "settings_small": {
        "message": "Peque\u00f1o"
    },
    "settings_big": {
        "message": "Grande"
    },
    "settings_position": {
        "message": "Posici\u00f3n:"
    },
    "settings_left_top": {
        "message": "Superior izquierda"
    },
    "settings_right_top": {
        "message": "Superior derecha"
    },
    "settings_left_bottom": {
        "message": "Inferior izquierda"
    },
    "settings_right_bottom": {
        "message": "Inferior derecha"
    },
    "settings_cancel": {
        "message": "Cancelar"
    },
    "settings_save": {
        "message": "Guardar cambios"
    }
}
var pt_BR = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "Filtragem neste site"
    },
    "menu_do_not_filter_30_sec": {
        "message": "N\u00e3o filtrar durante 30 segundos"
    },
    "menu_block_ad_on_site": {
        "message": "Bloquear an\u00fancios neste site"
    },
    "menu_report_abuse": {
        "message": "Denunciar o site"
    },
    "menu_site_report": {
        "message": "Relat\u00f3rio de seguran\u00e7a do site"
    },
    "menu_settings": {
        "message": "Configura\u00e7\u00f5es do assistente"
    },
    "assistant_select_element": {
        "message": "Bloqueio de elemento"
    },
    "assistant_select_element_ext": {
        "message": "Escolha um elemento na p\u00e1gina para bloquear"
    },
    "assistant_select_element_cancel": {
        "message": "Cancelar"
    },
    "assistant_block_element": {
        "message": "Bloqueio de elemento"
    },
    "assistant_block_element_explain": {
        "message": "Ajustar a regra de bloqueio de elemento"
    },
    "assistant_slider_explain": {
        "message": "Mova o controle deslizante para alterar o tamanho do quadro para o qual a nova regra funcionar\u00e1:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Configura\u00e7\u00f5es avan\u00e7adas"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Aplicar a regra para todos os sites"
    },
    "assistant_block_by_reference": {
        "message": "Bloquear pelo link de refer\u00eancia"
    },
    "assistant_block_similar": {
        "message": "Bloquear semelhante"
    },
    "assistant_another_element": {
        "message": "Selecione outro elemento"
    },
    "assistant_preview": {
        "message": "Ver pr\u00e9via"
    },
    "assistant_block": {
        "message": "Bloquear"
    },
    "assistant_settings": {
        "message": "Configura\u00e7\u00f5es do assistente"
    },
    "assistant_preview_header": {
        "message": "Bloquear elemento - Pr\u00e9via"
    },
    "assistant_preview_header_info": {
        "message": "Certifique-se de que o elemento esteja bloqueado como pretendido"
    },
    "assistant_preview_end": {
        "message": "Sair da pr\u00e9via"
    },
    "wot_unknown_description": {
        "message": "Reputa\u00e7\u00e3o n\u00e3o definida"
    },
    "wot_bad_description": {
        "message": "Este site tem uma reputa\u00e7\u00e3o muito ruim\nde acordo com "
    },
    "wot_poor_description": {
        "message": "Este site tem uma m\u00e1 reputa\u00e7\u00e3o\nde acordo com "
    },
    "wot_unsatisfactory_description": {
        "message": "Este site tem uma reputa\u00e7\u00e3o ruim\nde acordo com "
    },
    "wot_good_description": {
        "message": "Este site tem uma boa reputa\u00e7\u00e3o\nde acordo com "
    },
    "wot_excellent_description": {
        "message": "Este site tem uma excelente reputa\u00e7\u00e3o\n\nde acordo com "
    },
    "settings_choose_size_and_position": {
        "message": "Ajuste o tamanho e posi\u00e7\u00e3o do AdGuard Assistente"
    },
    "settings_icon_size": {
        "message": "Tamanho do \u00edcone:"
    },
    "settings_small": {
        "message": "Pequeno"
    },
    "settings_big": {
        "message": "Grande"
    },
    "settings_position": {
        "message": "Posi\u00e7\u00e3o:"
    },
    "settings_left_top": {
        "message": "Canto superior esquerdo"
    },
    "settings_right_top": {
        "message": "Canto superior direito"
    },
    "settings_left_bottom": {
        "message": "Canto inferior esquerdo"
    },
    "settings_right_bottom": {
        "message": "Canto inferior direito"
    },
    "settings_cancel": {
        "message": "Cancelar"
    },
    "settings_save": {
        "message": "Salvar altera\u00e7\u00f5es"
    }
}
var pt_PT = {
    "assistant_select_element_start": "Iniciar",
    "assistant_select_element_text": "Escolha um elemento na p\u00e1gina para bloquear. Actualize a p\u00e1gina para cancelar o bloqueio do elemento.",
    "menu_filtration_status": {
        "message": "A filtrar este site"
    },
    "menu_do_not_filter_30_sec": {
        "message": "N\u00e3o filtrar durante 30 segundos"
    },
    "menu_block_ad_on_site": {
        "message": "Bloquear publicidade neste site"
    },
    "menu_report_abuse": {
        "message": "Denunciar o site"
    },
    "menu_site_report": {
        "message": "Relat\u00f3rio de seguran\u00e7a do site"
    },
    "menu_settings": {
        "message": "Configura\u00e7\u00f5es do assistente"
    },
    "assistant_select_element": {
        "message": "Bloqueio de elemento"
    },
    "assistant_select_element_ext": {
        "message": "Escolha um elemento na p\u00e1gina para bloquear"
    },
    "assistant_select_element_cancel": {
        "message": "Cancelar"
    },
    "assistant_block_element": {
        "message": "Bloqueio de elementos"
    },
    "assistant_block_element_explain": {
        "message": "Ajustar a regra de bloqueio do elemento"
    },
    "assistant_slider_explain": {
        "message": "Desloque o controlo deslizante para alterar o tamanho do quadro para o qual a nova regra ir\u00e1 funcionar:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Configura\u00e7\u00f5es avan\u00e7adas"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Aplicar a regra para todos os sites"
    },
    "assistant_block_by_reference": {
        "message": "Bloquear por link de refer\u00eancia"
    },
    "assistant_block_similar": {
        "message": "Bloquear semelhante"
    },
    "assistant_another_element": {
        "message": "Seleccionar outro elemento"
    },
    "assistant_preview": {
        "message": "Previsualiza\u00e7\u00e3o"
    },
    "assistant_block": {
        "message": "Bloquear"
    },
    "assistant_settings": {
        "message": "Configura\u00e7\u00f5es do assistente"
    },
    "assistant_preview_header": {
        "message": "Bloquear elemento - Previsualizar"
    },
    "assistant_preview_header_info": {
        "message": "Certifique-se de que o elemento est\u00e1 bloqueado como pretendido"
    },
    "assistant_preview_end": {
        "message": "Sair da previsualiza\u00e7\u00e3o"
    },
    "wot_unknown_description": {
        "message": "N\u00e3o foi definida qualquer reputa\u00e7\u00e3o"
    },
    "wot_bad_description": {
        "message": "Este site tem uma p\u00e9ssima reputa\u00e7\u00e3o\nde acordo com"
    },
    "wot_poor_description": {
        "message": "Este site tem uma m\u00e1 reputa\u00e7\u00e3o\nde acordo com "
    },
    "wot_unsatisfactory_description": {
        "message": "Este site tem uma fr\u00e1gil reputa\u00e7\u00e3o\nde acordo com "
    },
    "wot_good_description": {
        "message": "Este site tem uma boa reputa\u00e7\u00e3o\nde acordo com"
    },
    "wot_excellent_description": {
        "message": "Este site tem uma excelente reputa\u00e7\u00e3o\nde acordo com "
    },
    "settings_choose_size_and_position": {
        "message": "Ajustar o tamanho e a posi\u00e7\u00e3o do Assistente do AdGuard"
    },
    "settings_icon_size": {
        "message": "Tamanho do \u00edcone:"
    },
    "settings_small": {
        "message": "Pequeno"
    },
    "settings_big": {
        "message": "Grande"
    },
    "settings_position": {
        "message": "Posi\u00e7\u00e3o:"
    },
    "settings_left_top": {
        "message": "Canto superior esquerdo"
    },
    "settings_right_top": {
        "message": "Canto superior direito"
    },
    "settings_left_bottom": {
        "message": "Canto inferior esquerdo"
    },
    "settings_right_bottom": {
        "message": "Canto inferior direito"
    },
    "settings_cancel": {
        "message": "Cancelar"
    },
    "settings_save": {
        "message": "Guardar altera\u00e7\u00f5es"
    }
}
var ar = {
    "assistant_select_element_start": "\u0628\u062f\u0621",
    "assistant_select_element_text": "\u0627\u062e\u062a\u0631 \u0639\u0646\u0635\u0631\u0627 \u0641\u064a \u0627\u0644\u0635\u0641\u062d\u0629 \u0644\u0644\u062d\u0638\u0631\u0642\u0645 \u0628\u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u0641\u062d\u0629 \u0644\u0627\u0644\u063a\u0627\u0621 \u0648\u0636\u0639 \u062d\u0638\u0631 \u0627\u0644\u0639\u0646\u0635\u0631.",
    "menu_filtration_status": {
        "message": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0641\u0644\u062a\u0631\u0629\u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639"
    },
    "menu_do_not_filter_30_sec": {
        "message": "\u0639\u062f\u0645 \u0627\u0644\u0641\u0644\u062a\u0631\u0629 \u0644\u0645\u062f\u0647 30 \u062b\u0627\u0646\u064a\u0647"
    },
    "menu_block_ad_on_site": {
        "message": "\u0645\u0646\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639"
    },
    "menu_report_abuse": {
        "message": "\u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639"
    },
    "menu_site_report": {
        "message": "\u062a\u0642\u0631\u064a\u0631 \u0623\u0645\u0646 \u0627\u0644\u0645\u0648\u0642\u0639"
    },
    "menu_settings": {
        "message": "\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0633\u0627\u0639\u062f"
    },
    "assistant_select_element": {
        "message": "\u062d\u0638\u0631 \u0627\u0644\u0639\u0646\u0635\u0631"
    },
    "assistant_select_element_ext": {
        "message": "\u0627\u062e\u062a\u0631 \u0639\u0646\u0635\u0631\u0627 \u0641\u064a \u0627\u0644\u0635\u0641\u062d\u0629 \u0644\u0644\u062d\u0638\u0631"
    },
    "assistant_select_element_cancel": {
        "message": "\u0627\u0644\u063a\u0627\u0621"
    },
    "assistant_block_element": {
        "message": "\u062d\u0638\u0631 \u0627\u0644\u0639\u0646\u0635\u0631"
    },
    "assistant_block_element_explain": {
        "message": "\u0636\u0628\u0637 \u0642\u0627\u0639\u062f\u0629 \u062d\u0638\u0631 \u0627\u0644\u0639\u0646\u0635\u0631"
    },
    "assistant_slider_explain": {
        "message": "\u062d\u0631\u0643 \u0634\u0631\u064a\u0637 \u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0644\u062a\u063a\u064a\u064a\u0631 \u062d\u062c\u0645 \u0627\u0644\u0625\u0637\u0627\u0631 \u0627\u0644\u0630\u064a \u0633\u062a\u0639\u0645\u0644 \u0639\u0644\u064a\u0647 \u0627\u0644\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629:"
    },
    "assistant_slider_min": {
        "message": "\u062d\u062f \u0627\u062f\u0646\u064a"
    },
    "assistant_slider_max": {
        "message": "\u0643\u062d\u062f \u0623\u0642\u0635\u0649"
    },
    "assistant_extended_settings": {
        "message": "\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0642\u0627\u0639\u062f\u0629 \u0639\u0644\u064a \u0643\u0627\u0641\u0629 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0648\u064a\u0628"
    },
    "assistant_block_by_reference": {
        "message": "\u062d\u0638\u0631 \u062d\u0633\u0628 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u0627\u0644\u0645\u0631\u062c\u0639\u064a"
    },
    "assistant_block_similar": {
        "message": "\u062d\u0638\u0631 \u0639\u0646\u0635\u0631 \u0645\u0645\u0627 \u062b\u0644"
    },
    "assistant_another_element": {
        "message": "\u062a\u062d\u062f\u064a\u062f \u0639\u0646\u0635\u0631 \u0622\u062e\u0631"
    },
    "assistant_preview": {
        "message": "\u0627\u0644\u0645\u0639\u0627\u064a\u0646\u0647"
    },
    "assistant_block": {
        "message": "\u062d\u0638\u0631"
    },
    "assistant_settings": {
        "message": "\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0633\u0627\u0639\u062f"
    },
    "assistant_preview_header": {
        "message": "\u062d\u062c\u0628 \u0639\u0646\u0635\u0631--\u0645\u0639\u0627\u064a\u0646\u0647"
    },
    "assistant_preview_header_info": {
        "message": "\u062a\u0627\u0643\u062f \u0645\u0646 \u062d\u0638\u0631 \u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0635\u0631 \u0643\u0645\u0627 \u0647\u0648 \u0645\u0642\u0635\u0648\u062f"
    },
    "assistant_preview_end": {
        "message": "\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0645\u0639\u0627\u064a\u0646\u0629"
    },
    "wot_unknown_description": {
        "message": "\u0644\u0645 \u064a\u062a\u0645 \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0633\u0645\u0639\u0629"
    },
    "wot_bad_description": {
        "message": "\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u062f\u064a\u0647 \u0633\u0645\u0639\u0629 \u0633\u064a\u0626\u0629 \u0644\u0644\u063a\u0627\u064a\u0629 \n\u0648\u0641\u0642\u0627 \u0644 "
    },
    "wot_poor_description": {
        "message": "\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u062f\u064a\u0647 \u0633\u0645\u0639\u0629 \u0633\u064a\u0626\u0629 \n\u0648\u0641\u0642\u0627 \u0644 "
    },
    "wot_unsatisfactory_description": {
        "message": "\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u062f\u064a\u0647 \u0633\u0645\u0639\u0629 \u0633\u064a\u0626\u0629 \n\u0648\u0641\u0642\u0627 \u0644 "
    },
    "wot_good_description": {
        "message": "\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u062f\u064a\u0647 \u0633\u0645\u0639\u0629 \u062c\u064a\u062f\u0629 \n\u0648\u0641\u0642\u0627 \u0644 "
    },
    "wot_excellent_description": {
        "message": "\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u062f\u064a\u0647 \u0633\u0645\u0639\u0629 \u0645\u0645\u062a\u0627\u0632\u0629 \n\u0648\u0641\u0642\u0627 \u0644 "
    },
    "settings_choose_size_and_position": {
        "message": "\u0636\u0628\u0637 \u062d\u062c\u0645 \u0645\u0633\u0627\u0639\u062f AdGuard \u0648\u0645\u0648\u0636\u0639\u0647"
    },
    "settings_icon_size": {
        "message": "\u062d\u062c\u0645 \u0627\u0644\u0631\u0645\u0632:"
    },
    "settings_small": {
        "message": "\u0635\u063a\u064a\u0631"
    },
    "settings_big": {
        "message": "\u0643\u0628\u064a\u0631"
    },
    "settings_position": {
        "message": "\u0648\u0636\u0639"
    },
    "settings_left_top": {
        "message": "\u0627\u0639\u0644\u064a \u0627\u0644\u064a\u0633\u0627\u0631"
    },
    "settings_right_top": {
        "message": "\u0627\u0639\u0644\u064a \u0627\u0644\u064a\u0645\u064a\u0646"
    },
    "settings_left_bottom": {
        "message": "\u0623\u0633\u0641\u0644 \u0627\u0644\u064a\u0633\u0627\u0631"
    },
    "settings_right_bottom": {
        "message": "\u0623\u0633\u0641\u0644 \u0644\u0644\u064a\u0645\u064a\u0646"
    },
    "settings_cancel": {
        "message": "\u0627\u0644\u063a\u0627\u0621"
    },
    "settings_save": {
        "message": "\u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a"
    }
}
var ko = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "\uc774 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c\uc758 \ubcf4\ud638"
    },
    "menu_do_not_filter_30_sec": {
        "message": "30\ucd08 \ub3d9\uc548 \ucc28\ub2e8 \uc77c\uc2dc\uc815\uc9c0"
    },
    "menu_block_ad_on_site": {
        "message": "\uc774 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \uad11\uace0 \ucc28\ub2e8"
    },
    "menu_report_abuse": {
        "message": "\uc774 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uad00\ud55c \ubd88\ub9cc \uc0ac\ud56d \uc81c\ucd9c"
    },
    "menu_site_report": {
        "message": "\uc6f9\uc0ac\uc774\ud2b8 \ubcf4\uc548 \ubcf4\uace0"
    },
    "menu_settings": {
        "message": "AdGuard \uc124\uc815"
    },
    "assistant_select_element": {
        "message": "\uc120\ud0dd \ubaa8\ub4dc"
    },
    "assistant_select_element_ext": {
        "message": "\ud398\uc774\uc9c0\uc5d0\uc11c \uc544\ubb34 \uc694\uc18c\ub098 \ud074\ub9ad\ud558\uac70\ub098"
    },
    "assistant_select_element_cancel": {
        "message": "\uc120\ud0dd \ubaa8\ub4dc \ucde8\uc18c"
    },
    "assistant_block_element": {
        "message": "\uc694\uc18c \ucc28\ub2e8"
    },
    "assistant_block_element_explain": {
        "message": "\uc694\uc18c \ucc28\ub2e8 \uaddc\uce59 \uc124\uc815"
    },
    "assistant_slider_explain": {
        "message": "\uc2ac\ub77c\uc774\ub354\ub85c \ucc28\ub2e8\ud560 \uc694\uc18c\uc758 \ubc94\uc704\ub97c \uc9c0\uc815\ud558\uc138\uc694."
    },
    "assistant_slider_min": {
        "message": "\uc791\uac8c"
    },
    "assistant_slider_max": {
        "message": "\ud06c\uac8c"
    },
    "assistant_extended_settings": {
        "message": "\uace0\uae09 \uc124\uc815..."
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "\ubaa8\ub4e0 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \uc774 \uaddc\uce59 \uc801\uc6a9"
    },
    "assistant_block_by_reference": {
        "message": "\ucc38\uc870 \ub9c1\ud06c\uac00 \ucc28\ub2e8"
    },
    "assistant_block_similar": {
        "message": "\uc720\uc0ac\ud55c \uc694\uc18c \ucc28\ub2e8"
    },
    "assistant_another_element": {
        "message": "\ub2e4\ub978 \uc694\uc18c \uc120\ud0dd"
    },
    "assistant_preview": {
        "message": "\ubbf8\ub9ac \ubcf4\uae30"
    },
    "assistant_block": {
        "message": "\ucc28\ub2e8"
    },
    "assistant_settings": {
        "message": "\ub3c4\uc6b0\ubbf8 \uc124\uc815"
    },
    "assistant_preview_header": {
        "message": "\uc694\uc18c \ucc28\ub2e8 - \ubbf8\ub9ac \ubcf4\uae30"
    },
    "assistant_preview_header_info": {
        "message": "\uc758\ub3c4\ud55c \ub300\ub85c \uc694\uc18c\uac00 \ucc28\ub2e8\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694."
    },
    "assistant_preview_end": {
        "message": "\ubbf8\ub9ac \ubcf4\uae30 \uc885\ub8cc"
    },
    "wot_unknown_description": {
        "message": "\ud3c9\ud310\uc774 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."
    },
    "wot_bad_description": {
        "message": "\uc774 \uc6f9\uc0ac\uc774\ud2b8\ub294 \uc544\uc8fc \ub098\uc05c \ud3c9\ud310\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc81c\uacf5 "
    },
    "wot_poor_description": {
        "message": "\uc774 \uc6f9\uc0ac\uc774\ud2b8\ub294 \ub098\uc05c \ud3c9\ud310\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc81c\uacf5 "
    },
    "wot_unsatisfactory_description": {
        "message": "\uc774 \uc6f9\uc0ac\uc774\ud2b8\ub294 \uc88b\uc9c0 \uc54a\uc740 \ud3c9\ud310\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc81c\uacf5 "
    },
    "wot_good_description": {
        "message": "\uc774 \uc6f9\uc0ac\uc774\ud2b8\ub294 \uc88b\uc740 \ud3c9\ud310\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc81c\uacf5 "
    },
    "wot_excellent_description": {
        "message": "\uc774 \uc6f9\uc0ac\uc774\ud2b8\ub294 \uc544\uc8fc \uc88b\uc740 \ud3c9\ud310\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc81c\uacf5 "
    },
    "settings_choose_size_and_position": {
        "message": "AdGuard \ub3c4\uc6b0\ubbf8\uc758 \ud06c\uae30\uc640 \uc704\uce58\ub97c \uc870\uc815\ud569\ub2c8\ub2e4."
    },
    "settings_icon_size": {
        "message": "\uc544\uc774\ucf58 \ud06c\uae30:"
    },
    "settings_small": {
        "message": "\uc791\uac8c"
    },
    "settings_big": {
        "message": "\ud06c\uac8c"
    },
    "settings_position": {
        "message": "\uc704\uce58:"
    },
    "settings_left_top": {
        "message": "\uc67c\ucabd \uc704"
    },
    "settings_right_top": {
        "message": "\uc624\ub978\ucabd \uc704"
    },
    "settings_left_bottom": {
        "message": "\uc67c\ucabd \uc544\ub798"
    },
    "settings_right_bottom": {
        "message": "\uc624\ub978\ucabd \uc544\ub798"
    },
    "settings_cancel": {
        "message": "\ucde8\uc18c"
    },
    "settings_save": {
        "message": "\uc800\uc7a5"
    }
}
var sk = {
    "assistant_select_element_start": "\u0160tart",
    "assistant_select_element_text": "Vyberte prvok na str\u00e1nke, ktor\u00fd chcete zablokova\u0165. Obnovte str\u00e1nku pre zru\u0161enie re\u017eimu blokovania prvkov.",
    "menu_filtration_status": {
        "message": "Filtr\u00e1cia na tejto str\u00e1nke"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Nefiltrova\u0165 po\u010das 30 sek\u00fand"
    },
    "menu_block_ad_on_site": {
        "message": "Blokova\u0165 reklamy na tejto str\u00e1nke"
    },
    "menu_report_abuse": {
        "message": "Nahl\u00e1si\u0165 str\u00e1nku"
    },
    "menu_site_report": {
        "message": "Bezpe\u010dnostn\u00e1 spr\u00e1va o str\u00e1nke"
    },
    "menu_settings": {
        "message": "Nastavenia asistenta"
    },
    "assistant_select_element": {
        "message": "Blokovanie prvku"
    },
    "assistant_select_element_ext": {
        "message": "Vyberte prvok str\u00e1nky, ktor\u00fd sa m\u00e1 blokova\u0165"
    },
    "assistant_select_element_cancel": {
        "message": "Zru\u0161i\u0165"
    },
    "assistant_block_element": {
        "message": "Blokovanie prvku"
    },
    "assistant_block_element_explain": {
        "message": "Upravi\u0165 pravidlo blokovania prvku"
    },
    "assistant_slider_explain": {
        "message": "Pou\u017eite posuvn\u00edk pre zmenu ve\u013ekosti r\u00e1mu pre nov\u00e9 pravidlo, ktor\u00e9 bude pou\u017eit\u00e9 na:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Pokro\u010dil\u00e9 nastavenia"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Pou\u017ei\u0165 pravidlo na v\u0161etky str\u00e1nky"
    },
    "assistant_block_by_reference": {
        "message": "Blokova\u0165 referen\u010dn\u00fdm odkazom"
    },
    "assistant_block_similar": {
        "message": "Blokova\u0165 podobn\u00e9"
    },
    "assistant_another_element": {
        "message": "Zvoli\u0165 in\u00fd prvok"
    },
    "assistant_preview": {
        "message": "N\u00e1h\u013ead"
    },
    "assistant_block": {
        "message": "Blokova\u0165"
    },
    "assistant_settings": {
        "message": "Nastavenia asistenta"
    },
    "assistant_preview_header": {
        "message": "Blokovanie prvku - n\u00e1h\u013ead"
    },
    "assistant_preview_header_info": {
        "message": "Uistite sa, \u017ee prvok je blokovan\u00fd pod\u013ea Va\u0161ich predst\u00e1v"
    },
    "assistant_preview_end": {
        "message": "Ukon\u010denie n\u00e1h\u013eadu"
    },
    "wot_unknown_description": {
        "message": "Reput\u00e1cia nebola definovan\u00e1"
    },
    "wot_bad_description": {
        "message": "Str\u00e1nka m\u00e1 ve\u013emi zl\u00fa reput\u00e1ciu\npod\u013ea "
    },
    "wot_poor_description": {
        "message": "Str\u00e1nka m\u00e1 zl\u00fa reput\u00e1ciu\npod\u013ea "
    },
    "wot_unsatisfactory_description": {
        "message": "Str\u00e1nka m\u00e1 slab\u00fa reput\u00e1ciu\npod\u013ea "
    },
    "wot_good_description": {
        "message": "Str\u00e1nka m\u00e1 dobr\u00fa reput\u00e1ciu\npod\u013ea "
    },
    "wot_excellent_description": {
        "message": "Str\u00e1nka m\u00e1 v\u00fdborn\u00fa reput\u00e1ciu\npod\u013ea "
    },
    "settings_choose_size_and_position": {
        "message": "Prisp\u00f4sobi\u0165 ve\u013ekos\u0165 a polohu AdGuard asistenta"
    },
    "settings_icon_size": {
        "message": "Ve\u013ekos\u0165 ikony:"
    },
    "settings_small": {
        "message": "Mal\u00e1"
    },
    "settings_big": {
        "message": "Ve\u013ek\u00e1"
    },
    "settings_position": {
        "message": "Poloha:"
    },
    "settings_left_top": {
        "message": "V\u013eavo hore"
    },
    "settings_right_top": {
        "message": "Vpravo hore"
    },
    "settings_left_bottom": {
        "message": "V\u013eavo dole"
    },
    "settings_right_bottom": {
        "message": "Vpravo dole"
    },
    "settings_cancel": {
        "message": "Zru\u0161i\u0165"
    },
    "settings_save": {
        "message": "Ulo\u017ei\u0165 zmeny"
    }
}
var no = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Velg et element p\u00e5 siden som skal blokkeres. Oppdater siden for \u00e5 avbryte elementblokkeringsmodusen.",
    "menu_filtration_status": {
        "message": "Filtrering p\u00e5 denne nettsiden"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Ikke filtrer i 30 sekunder"
    },
    "menu_block_ad_on_site": {
        "message": "Blokker annonse p\u00e5 denne nettsiden"
    },
    "menu_report_abuse": {
        "message": "Rapporter denne nettsiden"
    },
    "menu_site_report": {
        "message": "Nettsidens sikkerhetsrapport"
    },
    "menu_settings": {
        "message": "Assistentinnstillinger"
    },
    "assistant_select_element": {
        "message": "Elementblokkering"
    },
    "assistant_select_element_ext": {
        "message": "Velg et element p\u00e5 siden som skal blokkeres"
    },
    "assistant_select_element_cancel": {
        "message": "Avbryt"
    },
    "assistant_block_element": {
        "message": "Elementblokkering"
    },
    "assistant_block_element_explain": {
        "message": "Juster elementblokkeringsregel"
    },
    "assistant_slider_explain": {
        "message": "Flytt glidebryteren for \u00e5 endre st\u00f8rrelsen p\u00e5 rammen den nye regelen vil fungere for:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAKS"
    },
    "assistant_extended_settings": {
        "message": "Avanserte innstillinger"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Bruk regelen for alle nettsider"
    },
    "assistant_block_by_reference": {
        "message": "Blokker med referanselenke"
    },
    "assistant_block_similar": {
        "message": "Blokker lignende"
    },
    "assistant_another_element": {
        "message": "Velg et annet element"
    },
    "assistant_preview": {
        "message": "Forh\u00e5ndsvisning"
    },
    "assistant_block": {
        "message": "Blokker"
    },
    "assistant_settings": {
        "message": "Assistentinnstillinger"
    },
    "assistant_preview_header": {
        "message": "Elementblokkering - forh\u00e5ndsvisning"
    },
    "assistant_preview_header_info": {
        "message": "Kontroller at elementet er blokkert som det skal"
    },
    "assistant_preview_end": {
        "message": "Avslutt forh\u00e5ndsvisning"
    },
    "wot_unknown_description": {
        "message": "Rykte er ikke definert"
    },
    "wot_bad_description": {
        "message": "Denne nettsiden har et veldig d\u00e5rlig rykte\ni f\u00f8lge "
    },
    "wot_poor_description": {
        "message": "Denne nettsiden har et d\u00e5rlig rykte\ni f\u00f8lge "
    },
    "wot_unsatisfactory_description": {
        "message": "Denne nettsiden har et d\u00e5rlig rykte\ni f\u00f8lge "
    },
    "wot_good_description": {
        "message": "Denne nettsiden har et godt rykte\ni f\u00f8lge "
    },
    "wot_excellent_description": {
        "message": "Denne nettsiden har et utmerket rykte\ni f\u00f8lge "
    },
    "settings_choose_size_and_position": {
        "message": "Juster st\u00f8rrelsen og posisjonen til AdGuard-assistent"
    },
    "settings_icon_size": {
        "message": "Ikonst\u00f8rrelse:"
    },
    "settings_small": {
        "message": "Liten"
    },
    "settings_big": {
        "message": "Stor"
    },
    "settings_position": {
        "message": "Posisjoner:"
    },
    "settings_left_top": {
        "message": "\u00d8verst til venstre"
    },
    "settings_right_top": {
        "message": "\u00d8verst til h\u00f8yre"
    },
    "settings_left_bottom": {
        "message": "Nederst til venstre"
    },
    "settings_right_bottom": {
        "message": "Nederst til h\u00f8yre"
    },
    "settings_cancel": {
        "message": "Avbryt"
    },
    "settings_save": {
        "message": "Lagre endringer"
    }
}
var da = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "V\u00e6lg et element p\u00e5 denne side som skal blokeres. Opdater siden for at annullere tilstanden for elementblokering.",
    "menu_filtration_status": {
        "message": "Filtrering p\u00e5 denne webside"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Filtrer ikke i 30 sekunder"
    },
    "menu_block_ad_on_site": {
        "message": "Bloker annoncer p\u00e5 denne webside"
    },
    "menu_report_abuse": {
        "message": "Rapporter denne webside"
    },
    "menu_site_report": {
        "message": "Webside sikkerhedsrapport"
    },
    "menu_settings": {
        "message": "Assistent indstillinger"
    },
    "assistant_select_element": {
        "message": "Element blokering"
    },
    "assistant_select_element_ext": {
        "message": "V\u00e6lg et element p\u00e5 denne side som skal blokeres"
    },
    "assistant_select_element_cancel": {
        "message": "Annuller"
    },
    "assistant_block_element": {
        "message": "Element blokering"
    },
    "assistant_block_element_explain": {
        "message": "Juster regel for element blokering"
    },
    "assistant_slider_explain": {
        "message": "Flyt skyderen for at \u00e6ndre st\u00f8rrelsen af den ramme, den nye regel vil fungere efter:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Avancerede indstillinger"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Anvend reglen p\u00e5 alle websider"
    },
    "assistant_block_by_reference": {
        "message": "Bloker ved reference link"
    },
    "assistant_block_similar": {
        "message": "Bloker lignende"
    },
    "assistant_another_element": {
        "message": "V\u00e6lg et andet element"
    },
    "assistant_preview": {
        "message": "Forh\u00e5ndsvisning"
    },
    "assistant_block": {
        "message": "Bloker"
    },
    "assistant_settings": {
        "message": "Assistent indstillinger"
    },
    "assistant_preview_header": {
        "message": "Element blokering - forh\u00e5ndsvisning"
    },
    "assistant_preview_header_info": {
        "message": "S\u00f8rg for, at elementet er blokeret som tilsigtet"
    },
    "assistant_preview_end": {
        "message": "Exit forh\u00e5ndsvisning"
    },
    "wot_unknown_description": {
        "message": "Omd\u00f8mmet er ikke defineret"
    },
    "wot_bad_description": {
        "message": "Denne webside har et meget d\u00e5rligt omd\u00f8mme if\u00f8lge"
    },
    "wot_poor_description": {
        "message": "Denne webside har et d\u00e5rligt omd\u00f8mme if\u00f8lge"
    },
    "wot_unsatisfactory_description": {
        "message": "Denne webside har et d\u00e5rligt omd\u00f8mme if\u00f8lge"
    },
    "wot_good_description": {
        "message": "Denne webside har et godt omd\u00f8mme if\u00f8lge"
    },
    "wot_excellent_description": {
        "message": "Denne webside har et fremragende omd\u00f8mme if\u00f8lge"
    },
    "settings_choose_size_and_position": {
        "message": "Juster AdGuard Assistent st\u00f8rrelse og position"
    },
    "settings_icon_size": {
        "message": "Ikonst\u00f8rrelse:"
    },
    "settings_small": {
        "message": "Lille"
    },
    "settings_big": {
        "message": "Stor"
    },
    "settings_position": {
        "message": "Position:"
    },
    "settings_left_top": {
        "message": "\u00d8verst til venstre"
    },
    "settings_right_top": {
        "message": "\u00d8verst til h\u00f8jre"
    },
    "settings_left_bottom": {
        "message": "Nederst til venstre"
    },
    "settings_right_bottom": {
        "message": "Nederst til h\u00f8jre"
    },
    "settings_cancel": {
        "message": "Annuller"
    },
    "settings_save": {
        "message": "Gem \u00e6ndringer"
    }
}
var fr = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "Filtrages sur ce site"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Ne pas filtrer pendant 30 secondes "
    },
    "menu_block_ad_on_site": {
        "message": "Blocage des annonces sur ce site "
    },
    "menu_report_abuse": {
        "message": "Renseigner le site"
    },
    "menu_site_report": {
        "message": "Rapport de s\u00e9curit\u00e9 du site"
    },
    "menu_settings": {
        "message": "Assistant de param\u00e9trage "
    },
    "assistant_select_element": {
        "message": "Blocage d'\u00e9l\u00e9ments "
    },
    "assistant_select_element_ext": {
        "message": "Choisir un \u00e9l\u00e9ment de la page \u00e0 bloquer "
    },
    "assistant_select_element_cancel": {
        "message": "Annuler"
    },
    "assistant_block_element": {
        "message": "Blocage d'\u00e9l\u00e9ments "
    },
    "assistant_block_element_explain": {
        "message": "Affiner la r\u00e8gle de blocage d'elements"
    },
    "assistant_slider_explain": {
        "message": "D\u00e9placez le curseur pour modifier la taille du cadre de travail de la nouvelle r\u00e8gle"
    },
    "assistant_slider_min": {
        "message": "Minimum"
    },
    "assistant_slider_max": {
        "message": "Maximum"
    },
    "assistant_extended_settings": {
        "message": "Param\u00e9trages avanc\u00e9s "
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Appliquer la r\u00e8gle \u00e0 tous les sites"
    },
    "assistant_block_by_reference": {
        "message": "Blocage par liens de reference"
    },
    "assistant_block_similar": {
        "message": "Blocage des objets similaires "
    },
    "assistant_another_element": {
        "message": "S\u00e9lectionner un autre \u00e9l\u00e9ment "
    },
    "assistant_preview": {
        "message": "Previsualisation "
    },
    "assistant_block": {
        "message": "Blocage "
    },
    "assistant_settings": {
        "message": "Assistant de param\u00e9trage "
    },
    "assistant_preview_header": {
        "message": "Blocage d'\u00e9l\u00e9ments - Previsualisation "
    },
    "assistant_preview_header_info": {
        "message": "Assurez-vous que l'\u00e9l\u00e9ment est bloqu\u00e9 comme pr\u00e9vu"
    },
    "assistant_preview_end": {
        "message": "Sortir de la previsualisation "
    },
    "wot_unknown_description": {
        "message": "Aucune d\u00e9finition de r\u00e9putation "
    },
    "wot_bad_description": {
        "message": "Ce site web a tr\u00e8s mauvaise r\u00e9putation selon :"
    },
    "wot_poor_description": {
        "message": "Ce site web a mauvaise r\u00e9putation selon :"
    },
    "wot_unsatisfactory_description": {
        "message": "Ce site web a mauvaise reputation selon :"
    },
    "wot_good_description": {
        "message": "Ce site \u00e0 bonne r\u00e9putation selon :"
    },
    "wot_excellent_description": {
        "message": "Ce site \u00e0 une excellente r\u00e9putation selon :"
    },
    "settings_choose_size_and_position": {
        "message": "Affiner la taille et la position de l'assistant AdGuard "
    },
    "settings_icon_size": {
        "message": "Taille de l'icone"
    },
    "settings_small": {
        "message": "Petite"
    },
    "settings_big": {
        "message": "Grand"
    },
    "settings_position": {
        "message": "Positionnement"
    },
    "settings_left_top": {
        "message": "En haut \u00e0 gauche"
    },
    "settings_right_top": {
        "message": "En haut \u00e0 droite"
    },
    "settings_left_bottom": {
        "message": "En bas \u00e0 gauche"
    },
    "settings_right_bottom": {
        "message": "En bas \u00e0 droite "
    },
    "settings_cancel": {
        "message": "Annuler"
    },
    "settings_save": {
        "message": "Sauvegarder les modifications "
    }
}
var id = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "Filtering di situs ini"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Nonaktifkan filter untuk 30 detik"
    },
    "menu_block_ad_on_site": {
        "message": "Blokir iklan di situs ini"
    },
    "menu_report_abuse": {
        "message": "Laporkan situs"
    },
    "menu_site_report": {
        "message": "Laporan keamanan situs"
    },
    "menu_settings": {
        "message": "Pengaturan Assistant"
    },
    "assistant_select_element": {
        "message": "Blok Elemen"
    },
    "assistant_select_element_ext": {
        "message": "Pilih elemen di halaman untuk diblok"
    },
    "assistant_select_element_cancel": {
        "message": "Batalkan"
    },
    "assistant_block_element": {
        "message": "Blok Elemen"
    },
    "assistant_block_element_explain": {
        "message": "Atur aturan blokir elemen"
    },
    "assistant_slider_explain": {
        "message": "Pindahkan slider untuk mengatur ukuran frame dimana aturan baru akan aktif:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Pengaturan lanjutan"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Aktifkan aturan untuk seluruh situs"
    },
    "assistant_block_by_reference": {
        "message": "Blok berdasarkan referensi situs"
    },
    "assistant_block_similar": {
        "message": "Blok semacamnya"
    },
    "assistant_another_element": {
        "message": "Pilih elemen lainnya"
    },
    "assistant_preview": {
        "message": "Preview"
    },
    "assistant_block": {
        "message": "Blok"
    },
    "assistant_settings": {
        "message": "Pengaturan Assistant"
    },
    "assistant_preview_header": {
        "message": "Blok elemen - preview"
    },
    "assistant_preview_header_info": {
        "message": "Harap pastikan bahwa elemen diblok sesuai kemauan Anda"
    },
    "assistant_preview_end": {
        "message": "Keluar preview"
    },
    "wot_unknown_description": {
        "message": "Reputasi tidak terdefinisi"
    },
    "wot_bad_description": {
        "message": "Situs ini mempunyai reputasi sangat buruk\nberdasarkan "
    },
    "wot_poor_description": {
        "message": "Situs ini mempunyai reputasi buruk\nberdasarkan "
    },
    "wot_unsatisfactory_description": {
        "message": "Situs ini mempunyai reputasi biasa \nberdasarkan "
    },
    "wot_good_description": {
        "message": "Situs ini mempunyai reputasi baik \nberdasarkan "
    },
    "wot_excellent_description": {
        "message": "Situs ini mempunyai reputasi sempurna \nberdasarkan "
    },
    "settings_choose_size_and_position": {
        "message": "Atur ukuran dan posisi AdGuard Assistant"
    },
    "settings_icon_size": {
        "message": "Ukuran ikon:"
    },
    "settings_small": {
        "message": "Kecil"
    },
    "settings_big": {
        "message": "Besar"
    },
    "settings_position": {
        "message": "Posisi:"
    },
    "settings_left_top": {
        "message": "Atas kiri"
    },
    "settings_right_top": {
        "message": "Atas kanan"
    },
    "settings_left_bottom": {
        "message": "Bawah kiri"
    },
    "settings_right_bottom": {
        "message": "Bawah kanan"
    },
    "settings_cancel": {
        "message": "Batal"
    },
    "settings_save": {
        "message": "Simpan perubahan"
    }
}
var sv = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "Webbplatsens filtrering"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Pausa filtrering 30 sekunder"
    },
    "menu_block_ad_on_site": {
        "message": "Blockera reklam p\u00e5 den h\u00e4r webbplatsen"
    },
    "menu_report_abuse": {
        "message": "Rapportera webbplatsen"
    },
    "menu_site_report": {
        "message": "S\u00e4kerhetsrapport f\u00f6r webbplatsen"
    },
    "menu_settings": {
        "message": "Assistentinst\u00e4llningar"
    },
    "assistant_select_element": {
        "message": "Blockering av annonselement"
    },
    "assistant_select_element_ext": {
        "message": "V\u00e4lj ett annonselement f\u00f6r blockering"
    },
    "assistant_select_element_cancel": {
        "message": "Avbryt"
    },
    "assistant_block_element": {
        "message": "Blockering av annonselement"
    },
    "assistant_block_element_explain": {
        "message": "Anpassa blockeringsregeln f\u00f6r annonselementet"
    },
    "assistant_slider_explain": {
        "message": "Justera storleken p\u00e5 annonselementet som den nya blockeringsregeln skall avse:"
    },
    "assistant_slider_min": {
        "message": "MIN"
    },
    "assistant_slider_max": {
        "message": "MAX"
    },
    "assistant_extended_settings": {
        "message": "Avancerade val"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Till\u00e4mpa regelns p\u00e5 alla webbplatster"
    },
    "assistant_block_by_reference": {
        "message": "Blockera med referensl\u00e4nk"
    },
    "assistant_block_similar": {
        "message": "Blockera liknande"
    },
    "assistant_another_element": {
        "message": "Markera ett annat annonselement"
    },
    "assistant_preview": {
        "message": "F\u00f6rhandsgranska"
    },
    "assistant_block": {
        "message": "Blockera"
    },
    "assistant_settings": {
        "message": "Assistentval"
    },
    "assistant_preview_header": {
        "message": "F\u00f6rhandsgranskning av elementblockeringen"
    },
    "assistant_preview_header_info": {
        "message": "Kontrollera att elementet blockerats som avsett"
    },
    "assistant_preview_end": {
        "message": "Avsluta f\u00f6rhandsgranskningen"
    },
    "wot_unknown_description": {
        "message": "Anseende \u00e4r inte fastst\u00e4llt"
    },
    "wot_bad_description": {
        "message": "Webbplatsen har d\u00e5ligt anseende\nenligt "
    },
    "wot_poor_description": {
        "message": "Webbplatsen har d\u00e5ligt anseende\nenligt "
    },
    "wot_unsatisfactory_description": {
        "message": "Webbplatsen har tveksamt anseende\nenligt "
    },
    "wot_good_description": {
        "message": "Webbplatsen har gott anseende\nenligt "
    },
    "wot_excellent_description": {
        "message": "Webbplatsen har ett mycket gott anseende\nenligt "
    },
    "settings_choose_size_and_position": {
        "message": "Anpassas storlek och l\u00e4ge f\u00f6r AdGuardassistenten"
    },
    "settings_icon_size": {
        "message": "Ikonstorlek"
    },
    "settings_small": {
        "message": "Liten"
    },
    "settings_big": {
        "message": "Stor"
    },
    "settings_position": {
        "message": "L\u00e4ge:"
    },
    "settings_left_top": {
        "message": "Ovan v\u00e4nster"
    },
    "settings_right_top": {
        "message": "Ovan h\u00f6ger"
    },
    "settings_left_bottom": {
        "message": "Nedan v\u00e4nster"
    },
    "settings_right_bottom": {
        "message": "Nedan h\u00f6ger"
    },
    "settings_cancel": {
        "message": "Avbryt"
    },
    "settings_save": {
        "message": "Spara \u00e4ndringar"
    }
}
var sr_Latn = {
    "assistant_select_element_start": "Start",
    "assistant_select_element_text": "Choose an element on the page to block. Refresh the page to cancel the element blocking mode.",
    "menu_filtration_status": {
        "message": "Filtriranje na ovom sajtu"
    },
    "menu_do_not_filter_30_sec": {
        "message": "Ne filtriraj u narednih 30 sekundi"
    },
    "menu_block_ad_on_site": {
        "message": "Blokiraj reklamu na ovom sajtu"
    },
    "menu_report_abuse": {
        "message": "Prijavi sajt"
    },
    "menu_site_report": {
        "message": "Bezbednosni izve\u0161taj o sajtu"
    },
    "menu_settings": {
        "message": "Postavke pomo\u0107nika"
    },
    "assistant_select_element": {
        "message": "Blokiranje elementa"
    },
    "assistant_select_element_ext": {
        "message": "Izaberite element koji \u017eelite da blokirate na stranici"
    },
    "assistant_select_element_cancel": {
        "message": "Otka\u017ei"
    },
    "assistant_block_element": {
        "message": "Blokiranje elementa"
    },
    "assistant_block_element_explain": {
        "message": "Podesite pravilo blokiranja elementa"
    },
    "assistant_slider_explain": {
        "message": "Pomerajte kliza\u010d kako bi ste promenili veli\u010dinu okvira po kom \u0107e pravilo raditi:"
    },
    "assistant_slider_min": {
        "message": "Minimum"
    },
    "assistant_slider_max": {
        "message": "Maksimum"
    },
    "assistant_extended_settings": {
        "message": "Napredne postavke"
    },
    "assistant_apply_rule_to_all_sites": {
        "message": "Primeni pravilo na sve sajtove"
    },
    "assistant_block_by_reference": {
        "message": "Blokiraj po linku reference"
    },
    "assistant_block_similar": {
        "message": "Blokiraj sli\u010dno"
    },
    "assistant_another_element": {
        "message": "Izaberite drugi element"
    },
    "assistant_preview": {
        "message": "Pregled"
    },
    "assistant_block": {
        "message": "Blokiraj"
    },
    "assistant_settings": {
        "message": "Postavke pomo\u0107nika"
    },
    "assistant_preview_header": {
        "message": "Pregled blokiranja elementa"
    },
    "assistant_preview_header_info": {
        "message": "Uverite se da je element blokiran kako ste \u017eeleli"
    },
    "assistant_preview_end": {
        "message": "Napusti pregled"
    },
    "wot_unknown_description": {
        "message": "Reputacija nije definisana"
    },
    "wot_bad_description": {
        "message": "Ovaj sajt ima veoma lo\u0161u reputaciju\nprema "
    },
    "wot_poor_description": {
        "message": "Ovaj sajt ima lo\u0161u reputaciju\nprema "
    },
    "wot_unsatisfactory_description": {
        "message": "Ovaj sajt ima slabu reputaciju\nprema "
    },
    "wot_good_description": {
        "message": "Ovaj sajt ima dobru reputaciju\nprema "
    },
    "wot_excellent_description": {
        "message": "Ovaj sajt ima odli\u010dnu reputaciju\nprema "
    },
    "settings_choose_size_and_position": {
        "message": "Podesite veli\u010dinu i poziciju AdGuard pomo\u0107nika"
    },
    "settings_icon_size": {
        "message": "Veli\u010dina ikonice"
    },
    "settings_small": {
        "message": "Mala"
    },
    "settings_big": {
        "message": "Velika"
    },
    "settings_position": {
        "message": "Pozicija:"
    },
    "settings_left_top": {
        "message": "Gore levo"
    },
    "settings_right_top": {
        "message": "Gore desno"
    },
    "settings_left_bottom": {
        "message": "Dole levo"
    },
    "settings_right_bottom": {
        "message": "Dole desno"
    },
    "settings_cancel": {
        "message": "Otka\u017ei"
    },
    "settings_save": {
        "message": "Sa\u010duvaj promene"
    }
}
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var cssEscape = (function(root, factory) { // jshint ignore:line
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    // if (typeof exports == 'object') {
    //     // For Node.js.
    //     module.exports = factory(root);
    // } else if (typeof define == 'function' && define.amd) {
    //     // For AMD. Register as an anonymous module.
    //     define([], factory.bind(root, root));
    // } else {
    //     // For browser globals (not exposing the function separately).
    //     factory(root);
    // }
    return factory(root); //We use local variable because we don't want to spoil global scope
}(this, function(root) {

    if (root.CSS && root.CSS.escape) {
        return root.CSS.escape;
    }

    // https://drafts.csswg.org/cssom/#serialize-an-identifier
    var cssEscape = function(value) {
        if (arguments.length === 0) {
            throw new TypeError('`CSS.escape` requires an argument.');
        }
        var string = String(value);
        var length = string.length;
        var index = -1;
        var codeUnit;
        var result = '';
        var firstCodeUnit = string.charCodeAt(0);
        while (++index < length) {
            codeUnit = string.charCodeAt(index);
            // Note: there’s no need to special-case astral symbols, surrogate
            // pairs, or lone surrogates.

            // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
            // (U+FFFD).
            if (codeUnit === 0x0000) {
                result += '\uFFFD';
                continue;
            }

            if (
                // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
            // U+007F, […]
            (codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
            // If the character is the first character and is in the range [0-9]
            // (U+0030 to U+0039), […]
            (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
            // If the character is the second character and is in the range [0-9]
            // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
            (
                index == 1 &&
                codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
                firstCodeUnit == 0x002D
            )
            ) {
                // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
                result += '\\' + codeUnit.toString(16) + ' ';
                continue;
            }

            if (
                // If the character is the first character and is a `-` (U+002D), and
            // there is no second character, […]
            index === 0 &&
            length == 1 &&
            codeUnit == 0x002D
            ) {
                result += '\\' + string.charAt(index);
                continue;
            }

            // If the character is not handled by one of the above rules and is
            // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
            // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
            // U+005A), or [a-z] (U+0061 to U+007A), […]
            if (
                codeUnit >= 0x0080 ||
                codeUnit == 0x002D ||
                codeUnit == 0x005F ||
                codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
                codeUnit >= 0x0041 && codeUnit <= 0x005A ||
                codeUnit >= 0x0061 && codeUnit <= 0x007A
            ) {
                // the character itself
                result += string.charAt(index);
                continue;
            }

            // Otherwise, the escaped character.
            // https://drafts.csswg.org/cssom/#escape-a-character
            result += '\\' + string.charAt(index);

        }
        return result;
    };

    if (!root.CSS) {
        root.CSS = {};
    }

    root.CSS.escape = cssEscape;
    return cssEscape;

}));
/**
 * Simple ioc implementation
 * @type {{add, get}}
 */
var Ioc = (function () { // jshint ignore:line
    var dependencies = {};

    var register = function (qualifier, obj) {
        dependencies[qualifier] = obj;
    };

    var get = function (func) {
        if (typeof func === 'string') {
            var resolved = dependencies[func];
            if (!resolved) {
                throw "Can't resolve " + func;
            }
            return resolved;
        }
        var resolvedDependencies = resolveDependencies(func);

        function FuncWrapper() {
            return func.apply(func, resolvedDependencies);
        }

        FuncWrapper.prototype = func.prototype;
        return new FuncWrapper();
    };

    var resolveDependencies = function (func) {
        var args = getArguments(func);
        var resolved = [];
        for (var i = 0; i < args.length; i++) {
            var depName = args[i].trim();
            var dep = dependencies[depName];
            if (!dep) {
                throw  "Can't find dependency: " + depName;
            }
            resolved.push(dependencies[depName]);
        }
        return resolved;
    };

    var getArguments = function (func) {
        //This regex is from require.js
        var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        var args = func.toString().match(FN_ARGS)[1].split(',');
        if (args[0] === "") {
            return [];
        }
        return args;
    };

    return {
        register: register,
        get: get
    };

})();

/**
 * Simple logger with log levels
 * @returns {{warn: warn, info: info, debug: debug, error: error}}
 * @constructor
 */
var Log = function () { // jshint ignore:line

    var currentLevel = "INFO";

    var LogLevels = {
        ERROR: 1,
        WARN: 2,
        INFO: 3,
        DEBUG: 4
    };

    var print = function (level, method, args) {
        // gulp preprocess condition
        //check log level
        if (LogLevels[currentLevel] < LogLevels[level]) {
            return;
        }
        if (!args || args.length === 0 || !args[0]) {
            return;
        }
        var str = args[0] + "";
        args = Array.prototype.slice.call(args, 1);
        var formatted = str.replace(/{(\d+)}/g, function (match, number) {
            return typeof  args[number] !== "undefined" ? args[number] : match;
        });
        if (LogLevels[level] >= LogLevels[currentLevel]) {
            var now = new Date();
            formatted = now.toISOString() + ": " + formatted;
        }
        console[method](formatted);

    };

    var debug = function () {
        print("DEBUG", "log", arguments);
    };

    var info = function () {
        print("INFO", "info", arguments);
    };

    var warn = function () {
        print("WARN", "info", arguments);
    };

    var error = function () {
        print("ERROR", "error", arguments);
    };

    return {
        warn: warn,
        info: info,
        debug: debug,
        error: error
    };
};

/**
 * Balalaika library
 *
 * https://github.com/finom/balalaika/blob/master/balalaika.js
 *
 * The patch includes methods `addClass`, `removeClass`, `hasClass`, `get`, `css`, `hide`, `show`, `remove`, `text`, `attr`, `trigger`.
 * Also, for registration in the Ioc, the library is used through the variable `balalaika`
 */
var balalaika = (function (window, document, fn, nsRegAndEvents, id, s_EventListener, s_MatchesSelector, i, j, k, l, $) {
    $ = function (s, context) {
        return new $.i(s, context);
    };

    $.i = function (s, context) {
        var st;
        if (!s) {
            st = fn;
        } else {
            if (s.nodeType || s == window) {
                st = [s];
            } else {
                if (typeof(s) === 'string') {
                    if (/</.test(s)) {
                        st = ((i = document.createElement(context || 'q')).innerHTML = s, i.children);
                    } else {
                        st = (context && $(context)[0] || document).querySelectorAll(s);
                    }
                } else {
                    if (/f/.test(typeof s)) {
                        if (/c/.test(document.readyState)) {
                            st = s();
                        } else {
                            st = $(document).on('DOMContentLoaded', s);
                        }
                    } else {
                        st = s;
                    }
                }
            }
        }
        st = [].slice.call(st);
        fn.push.apply(this, st);
    };

    $.i[l = 'prototype'] = ( $.extend = function (obj) {
        k = arguments;
        for (i = 1; i < k.length; i++) {
            if (l = k[i]) {
                for (j in l) {
                    obj[j] = l[j];
                }
            }
        }

        return obj;
    })($.fn = $[l] = fn, { // $.fn = $.prototype = fn
        on: function (n, f) {
            // n = [ eventName, nameSpace ]
            n = n.split(nsRegAndEvents);
            this.map(function (item) {
                n.map(function (ev) {
                    item['add' + s_EventListener](ev, f);
                });
            });
            return this;
        },
        off: function (n, f) {
            // n = [ eventName, nameSpace ]
            n = n.split(nsRegAndEvents);
            // l = 'removeEventListener'
            l = 'remove' + s_EventListener;
            this.map(function (item) {
                n.map(function (ev) {
                    item[l](ev, f);
                });
            });
            return this;
        },
        is: function (s) {
            i = this[0];
            return (i.matches
            || i['webkit' + s_MatchesSelector]
            || i['moz' + s_MatchesSelector]
            || i['ms' + s_MatchesSelector]
            || i['o' + s_MatchesSelector]).call(i, s);
        }
    });
    return $;
})(window, window.document, [], /\.| /, 0, 'EventListener', 'MatchesSelector');

/**
 * Add some more functions to balalaika
 */
balalaika.fn.hasClass = function (className) {
    return !!this[0] && (this[0].classList != undefined) && this[0].classList.contains(className);
};

balalaika.fn.addClass = function (className) {
    this.forEach(function (item) {
        var classList = item.classList;
        classList.add.apply(classList, className.split(/\s/));
    });
    return this;
};

balalaika.fn.removeClass = function (className) {
    this.forEach(function (item) {
        var classList = item.classList;
        classList.remove.apply(classList, className.split(/\s/));
    });
    return this;
};

balalaika.fn.get = function (index) {
    return this.length > index ? this[index] : null;
};

balalaika.fn.css = function (attr, value) {
    this.forEach(function (item) {
        item.style[attr] = value;
    });
    return this;
};

balalaika.fn.hide = function () {
    this.forEach(function (item) {
        item.style['display'] = 'none';
    });
    return this;
};

balalaika.fn.show = function () {
    this.forEach(function (item) {
        item.style['display'] = 'block';
    });
    return this;
};

balalaika.fn.remove = function () {
    this.forEach(function (item) {
        item.parentNode.removeChild(item);
    });
    return this;
};

balalaika.fn.text = function (v) {
    this.forEach(function (item) {
        item.textContent = v;
    });
    return this;
};

balalaika.fn.attr = function (k, v) {
    this.forEach(function (item) {
        item.setAttribute(k, v);
    });
    return this;
};

balalaika.fn.trigger = function (eventName, options) {
    this.forEach(function (item) {
        if (window.CustomEvent) {
            var event = new CustomEvent(eventName, {detail: options});
        } else {
            var event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, options);
        }

        item.dispatchEvent(event);
    });
    return this;
};

/**
 * Object that manages user settings.
 * @param log
 * @param gmApi
 * @returns {{Constants: {MINIMUM_IE_SUPPORTED_VERSION: number, MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: number, BUTTON_POSITION_ITEM_NAME: string, IFRAME_ID: string}, MenuItemsNames: {DetailedMenu: string, SelectorMenu: string, SliderMenu: string, BlockPreview: string, SettingsMenu: string}, getSettings: getSettings, loadSettings: loadSettings, getWotData: getWotData, setWotData: setWotData, saveSettings: saveSettings, getUserPositionForButton: getUserPositionForButton, removeUserPositionForButton: removeUserPositionForButton, selectedElement: *, setAdguardSettings: setAdguardSettings, getAdguardSettings: getAdguardSettings}}
 * @constructor
 */
var Settings = function (log, gmApi) { // jshint ignore:line
    var Constants = {
        MINIMUM_IE_SUPPORTED_VERSION: 9,
        MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON: 250,
        BUTTON_POSITION_ITEM_NAME: '__adbpos',
        IFRAME_ID: 'adguard-assistant-dialog',
        REPORT_URL: 'https://adguard.com/adguard-report/{0}/report.html'
    };
    var MenuItemsNames = {
        DetailedMenu: 'mainMenu.html',
        SelectorMenu: 'selectorMenu.html',
        SliderMenu: 'sliderMenu.html',
        BlockPreview: 'blockPreview.html',
        SettingsMenu: 'settingsMenu.html'
    };

    var DefaultConfig = {
        buttonPositionTop: false,
        buttonPositionLeft: false,
        largeIcon: true,
        assistantFirstStart: true,
        scriptVersion: 1
    };

    var wotData = null;
    var adguardSettings = null;

    var Config = null;

    var loadSettings = function () {
        var config;
        log.debug("Trying to get settings");
        // Empty settings
        var settings = gmApi.GM_getValue('settings');
        try {
            config = JSON.parse(settings);
            validateSettings(config);
            log.debug('Settings parsed successfully');
        } catch (ex) {
            log.error(ex);
            config = JSON.parse(JSON.stringify(DefaultConfig));
            if (typeof settings !== 'undefined') {
                config.assistantFirstStart = false;
            }
            saveSettings(config);
        }
        Config = config;
    };

    var saveSettings = function (config) {
        log.debug("Saving settings");
        gmApi.GM_setValue('settings', JSON.stringify(config));
        Config = config;
    };

    var getSettings = function () {
        return Config;
    };

    var getWotData = function () {
        return wotData;
    };

    var setWotData = function (data) {
        wotData = data;
    };

    var setAdguardSettings = function (settings) {
        if (!settings) {
            log.info("No Adguard API Found");
            return;
        }
        adguardSettings = settings;
    };

    var getAdguardSettings = function () {
        return adguardSettings;
    };

    var removeUserPositionForButton = function () {
        try {
            localStorage.removeItem(Constants.BUTTON_POSITION_ITEM_NAME);
        } catch (ex) {
            log.error(ex);
        }
    };

    var setUserPositionForButton = function (coords) {
        try {
            localStorage.setItem(Constants.BUTTON_POSITION_ITEM_NAME, JSON.stringify(coords));
        } catch (ex) {
            log.error(ex);
        }
    };

    var getUserPositionForButton = function () {
        try {
            var userPosition = localStorage.getItem(Constants.BUTTON_POSITION_ITEM_NAME);
            log.info("Check user position for domain");
            if (userPosition) {
                log.info("User position is set for this domain");
                return JSON.parse(userPosition);
            }
        } catch (ex) {
            removeUserPositionForButton();
            log.error(ex);
        }
        return null;
    };

    var validateSettings = function (settings) {
        if (!settings) {
            throw 'Invalid settings object';
        }
        for (var prop in settings) {
            if (!settings.hasOwnProperty(prop)) {
                continue;
            }
            var property = DefaultConfig[prop];
            if (property && typeof property !== typeof settings[prop]) {
                throw 'Invalid settings object';
            }
        }
        if (settings.scriptVersion > DefaultConfig.scriptVersion) {
            throw 'Invalid settings object';
        }
    };

    return {
        Constants: Constants,
        MenuItemsNames: MenuItemsNames,
        getSettings: getSettings,
        loadSettings: loadSettings,
        getWotData: getWotData,
        setWotData: setWotData,
        saveSettings: saveSettings,
        getUserPositionForButton: getUserPositionForButton,
        removeUserPositionForButton: removeUserPositionForButton,
        setUserPositionForButton: setUserPositionForButton,
        setAdguardSettings: setAdguardSettings,
        getAdguardSettings: getAdguardSettings
    };
};

/**
 * UI utils
 * @param $
 * @returns {{makeElementDraggable: Function, makeIframeDraggable: Function, tryFullScreenPrefix: Function}}
 * @constructor
 */
var UIUtils = function($) { // jshint ignore:line
    var elWidth, elHeight, windowWidth, windowHeight;

    /**
     * Make element draggable
     * @param element
     * @param onDragEnd
     * @param onClick
     */
    var makeElementDraggable = function(element, onDragEnd, onClick) {
        var coords, shiftX, shiftY;

        var moveAt = function(e) {
            var position = {
                x: getOriginalEvent(e).pageX - shiftX,
                y: getOriginalEvent(e).pageY - shiftY
            };

            // disable mousemove if button element outside the screen
            var out = outsidePosition.top(position) ||
                outsidePosition.left(position) ||
                outsidePosition.bottom(position) ||
                outsidePosition.right(position);

            if (out) {
                onMouseUp(e, true);
            } else {
                moveElementTo(element, position.x, position.y);
            }
        };

        var onMouseMove = function(e) {
            pauseEvent(e);
            moveAt(e);
        };

        var getCoords = function(elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top,
                left: box.left,
                bottom: box.bottom,
                right: box.right
            };
        };

        /**
         * Prevent text selection
         * With cursor drag
         */
        var pauseEvent = function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;

            return false;
        };

        var preventedEvent = function(e) {
            e.preventDefault();
        };

        var mouseDown = function(e) {
            pauseEvent(e);

            // prevent browser scroll
            $(document).on('wheel mousewheel', preventedEvent);

            // prevent right button mousedown
            if (e.button > 0) return;

            elWidth = element.clientWidth;
            elHeight = element.clientWidth;

            windowWidth = getWindowSize().width;
            windowHeight = getWindowSize().height;

            coords = getCoords(element);

            if (storedAnchor.top) {
                shiftY = getOriginalEvent(e).pageY - coords.top;
            } else {
                shiftY = windowHeight - (coords.bottom - getOriginalEvent(e).pageY);
            }

            if (storedAnchor.left) {
                shiftX = getOriginalEvent(e).pageX - coords.left;
            } else {
                shiftX = windowWidth - (coords.right - getOriginalEvent(e).pageX);
            }

            /**
             * binding both mouse and touch/pointer events simultaneously
             * see: http://www.html5rocks.com/en/mobile/touchandmouse/
             */
            $(document).on('mouseup touchend pointerup', onMouseUp);
            $(document).on('mousemove touchmove pointermove', onMouseMove);
        };

        /**
         * On mouse up event
         * @param {Object} e  event object
         * @param {Boolean|undefined} doNotOpenIframe  do not open the iframe if true. This is necessary when the cursor is out of bounds
         */
        var onMouseUp = function(e, doNotOpenIframe) {
            e.stopPropagation();

            // make scroll availalbe
            $(document).off('wheel mousewheel', preventedEvent);

            // When a user finishes dragging icon, we set icon anchor
            // depending on the icon position, i.e. which quarter
            // of the screen it belongs.
            var lastX, lastY, lastCoords = getCoords(element);

            var topHalf = lastCoords.top < windowHeight / 2;
            var leftHalf = lastCoords.left < windowWidth / 2;

            setAnchorPosition.positionY(element, topHalf);
            setAnchorPosition.positionX(element, leftHalf);

            if (topHalf) {
                lastY = lastCoords.top;
            } else {
                lastY = lastCoords.bottom - windowHeight;
            }

            if (leftHalf) {
                lastX = lastCoords.left;
            } else {
                lastX = lastCoords.right - windowWidth;
            }

            moveElementTo(element, lastX, lastY);

            // Open the frame if the button has been shifted by no more than 5 pixels
            if (Math.abs(coords.left - lastCoords.left) > 5 || Math.abs(coords.top - lastCoords.top) > 5) {
                if (onDragEnd) {
                    var store = {
                        "x": lastX,
                        "y": lastY,
                        "storedAnchor": storedAnchor
                    };
                    onDragEnd(store);
                }
            } else {
                if (onClick && !doNotOpenIframe) {
                    onClick(e);
                }
            }

            $(document).off('mouseup touchend pointerup', onMouseUp);

            $(document).off('mousemove touchmove pointermove', onMouseMove);
        };

        $(element).on('mousedown touchstart', mouseDown.bind(this));
        $(element).on('dragstart', function() {return;});
    };

    var outsidePosition = {
        top: function(pos) {
            return storedAnchor.top && (pos.y + elHeight > windowHeight || pos.y < 0);
        },
        bottom: function(pos) {
            return !storedAnchor.top && (Math.abs(pos.y) + elHeight > windowHeight || pos.y > 0);
        },
        left: function(pos) {
            return storedAnchor.left && (pos.x + elWidth > windowWidth || pos.x < 0);
        },
        right: function(pos) {
            return !storedAnchor.left && (Math.abs(pos.x) + elWidth > windowWidth || pos.x > 0);
        }
    };

    /**
     * Makes iframe draggable
     *
     * @param iframe
     * @param handleElement
     */
    var makeIframeDraggable = function(iframe, handleElement) {
        var iframeJ = $(iframe);
        var dragHandle = $(handleElement);
        var $iframeDocument = $(iframe.contentDocument);

        var offset = Object.create(null);

        /**
         * Function that does actual "dragging"
         *
         * @param x
         * @param y
         */
        var drag = function(x, y) {
            iframeJ.css('left', x + 'px');
            iframeJ.css('top', y + 'px');
        };

        var cancelIFrameSelection = function(e) {
            e.preventDefault();
            e.stopPropagation();
        };

        var onMouseMove = function(e) {
            var eventPosition = getOriginalEvent(e);
            drag(eventPosition.screenX + offset.x, eventPosition.screenY + offset.y);
        };

        var onMouseDown = function(e) {
            var eventPosition = getOriginalEvent(e);
            var dragHandleEl = dragHandle.get(0);
            var rect = iframeJ.get(0).getBoundingClientRect();

            offset.x = rect.left + dragHandleEl.offsetLeft - eventPosition.screenX;
            offset.y = rect.top + dragHandleEl.offsetTop - eventPosition.screenY;

            $iframeDocument.on('mousemove touchmove pointermove', onMouseMove);
            $iframeDocument.on('selectstart', cancelIFrameSelection);
        };

        var onMouseUp = function() {
            $iframeDocument.off('mousemove touchmove pointermove', onMouseMove);
            $iframeDocument.off('selectstart', cancelIFrameSelection);
        };

        // prevent iframe dragging while browser tabs is switching
        document.addEventListener('visibilitychange', onMouseUp);

        dragHandle.on('mousedown touchstart', onMouseDown);
        $iframeDocument.on('mouseup touchend pointerup', onMouseUp);
        $iframeDocument.on('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    };

    var browserPrefixes = ["webkit", "moz", "ms", "o", ""];

    /*
     Checks prefixes for full screen mode.
     */
    var tryFullScreenPrefix = function(obj, method) {
        var i = 0,
            currentMethod = null,
            type;
        while (i < browserPrefixes.length && !obj[currentMethod]) {
            currentMethod = method;
            if (browserPrefixes[i] === "") {
                currentMethod = currentMethod.substr(0, 1).toLowerCase() + currentMethod.substr(1);
            }
            currentMethod = browserPrefixes[i] + currentMethod;
            type = typeof obj[currentMethod];
            if (type !== "undefined") {
                browserPrefixes = [browserPrefixes[i]];
                return (type === "function" ? obj[currentMethod]() : obj[currentMethod]);
            }
            i++;
        }
    };

    /**
     * Set transition css property for drag
     * translate3d is for better rendering performance
     * see: https://www.html5rocks.com/en/tutorials/speed/layers/
     */
    var moveElementTo = function(el, x, y) {
        var transform = 'translate3d(' + x + 'px,' + y + 'px, 0px)';
        el.style.webkitTransform = transform;
        el.style.mozTransform = transform;
        el.style.msTransform = transform;
        el.style.oTransform = transform;
        el.style.transform = transform;
    };

    /**
     * Get original event object for touch
     * devices to getting current coordinates
     * @param {Object}
     * @return {Object}
     */
    var getOriginalEvent = function(e) {
        return e.targetTouches ? e.targetTouches[0] : e;
    };

    /**
     * Functions for saving left/top anchors and setting class position
     *
     * @param {Object} element  button element
     * @param {Boolean} anchor  anchors positions `true` for top/left or `false` for bottom/right
     */
    var setAnchorPosition = {
        positionY: function(element, anchor) {
            storedAnchor.top = anchor;

            if (storedAnchor.top) {
                $(element).addClass('adguard-assistant-button-top');
                $(element).removeClass('adguard-assistant-button-bottom');
            } else {
                $(element).addClass('adguard-assistant-button-bottom');
                $(element).removeClass('adguard-assistant-button-top');
            }
        },
        positionX: function(element, anchor) {
            storedAnchor.left = anchor;

            if (storedAnchor.left) {
                $(element).addClass('adguard-assistant-button-left');
                $(element).removeClass('adguard-assistant-button-right');
            } else {
                $(element).addClass('adguard-assistant-button-right');
                $(element).removeClass('adguard-assistant-button-left');
            }
        }
    };

    // getting screen width and height without scroll bars
    var getWindowSize = function() {
        return {
            width: Math.min(document.documentElement.clientWidth, window.innerWidth || screen.width),
            height: Math.min(document.documentElement.clientHeight, window.innerHeight || screen.height)
        };
    };

    var checkElementPosition = function(element, pos) {
        windowWidth = getWindowSize().width;
        windowHeight = getWindowSize().height;

        elWidth = element.clientWidth;
        elHeight = element.clientHeight;

        if(outsidePosition.top(pos)) pos.y = windowHeight - 60;
        if(outsidePosition.bottom(pos)) pos.y = - windowHeight + 60;
        if(outsidePosition.left(pos)) pos.x = windowWidth - 60;
        if(outsidePosition.right(pos)) pos.x = - windowWidth + 60;

        moveElementTo(element, pos.x, pos.y);
    };

    var storedAnchor = {
        top: false,
        left: false
    };

    return {
        makeElementDraggable: makeElementDraggable,
        makeIframeDraggable: makeIframeDraggable,
        tryFullScreenPrefix: tryFullScreenPrefix,
        moveElementTo: moveElementTo,
        setAnchorPosition: setAnchorPosition,
        checkElementPosition: checkElementPosition
    };
};

/**
 * Utils that checks environment for compatibility with assistant
 * @param settings
 * @param log
 * @returns {{checkVisibleAreaSize: checkVisibleAreaSize, validateBrowser: validateBrowser, validatePage: validatePage, getViewPort: getViewPort}}
 * @constructor
 */
var UIValidationUtils = function(settings, log) { // jshint ignore:line
    var document = window.document;
    /**
     * Check if visible area are enough to show menu.
     * @returns boolean. True if area enough
     */
    var checkVisibleAreaSize = function() {
        var viewPort = getViewPort();
        var visibleAreaSize = viewPort.height > settings.Constants.MINIMUM_VISIBLE_HEIGHT_TO_SHOW_BUTTON;

        if (!visibleAreaSize) {
            log.error('Viewport height is too small: ' + viewPort.height);
        }

        return visibleAreaSize;
    };

    var getViewPort = function() {
        var viewPortWidth;
        var viewPortHeight;

        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;

        return {
            width: viewPortWidth,
            height: viewPortHeight
        };
    };

    /**
     * Checks if browser is valid for Adguard assistant
     * @returns boolean. True if browser valid
     */
    var validateBrowser = function() {
        var valid = !document.documentMode || (document.documentMode > settings.Constants.MINIMUM_IE_SUPPORTED_VERSION);

        if (!valid) {
            log.error('IE version is ' + document.documentMode);
        }

        return valid;
    };

    /**
     * Checks if page is valid for Adguard assistant to work here.
     */
    var validatePage = function() {
        // Assistant do not work in iframes
        if (window.window !== window.top) {
            log.error('Page is iframe: ' + window.location.href);
            return false;
        } else {
            return true;
        }
    };

    return {
        checkVisibleAreaSize: checkVisibleAreaSize,
        validateBrowser: validateBrowser,
        validatePage: validatePage,
        getViewPort: getViewPort
    };
};

/**
 * String utils
 */
var StringUtils = { // jshint ignore:line
    /**
     * Replaces the format items in a specified String with the text equivalents of the values of corresponding object instances.
     * @param format
     */
    format: function (format) {
        for (var i = 1; i < arguments.length; i++) {
            format = format.replace('{' + (i - 1) + '}', arguments[i]);
        }
        return format;
    }
};

/**
 * Common utils
 * @type {{getParentsLevel: Function, getNodeName: Function, getAllChilds: Function, getSingleChildren: Function, cropDomain: Function}}
 */
var CommonUtils = { // jshint ignore:line

    getParentsLevel: function (element) {
        var parent = element;
        var parentArr = [];
        while ((parent = parent.parentNode) && this.getNodeName(parent) !== "BODY") {
            parentArr.push(parent);
        }
        return parentArr;
    },

    getNodeName: function (element) {
        return element && element.nodeName ? element.nodeName.toUpperCase() : "";
    },

    getAllChildren: function (element) {
        var childArray = [];
        var child = element;
        while ((child = this.getSingleChildren(child))) {
            childArray.push(child);
        }
        return childArray;
    },

    getSingleChildren: function (element) {
        var children = element.childNodes;
        if (children) {
            var count = 0;
            var child;
            var i;
            for (i = 0; i < children.length; i++) {
                if (children[i].nodeType === 1) {
                    child = children[i];
                    count++;
                }
            }
            return count === 1 ? child : null;
        }
    },

    cropDomain: function (domain) {
        return domain.replace("www.", "").replace(/:\d+/, '');
    },

    /**
     * Force clear page cache
     * see: https://stackoverflow.com/questions/10719505/force-a-reload-of-page-in-chrome-using-javascript-no-cache/27058362#27058362
     */
    reloadPageBypassCache: function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', window.location.href, true);

        xhr.setRequestHeader('Pragma', 'no-cache');
        xhr.setRequestHeader('Expires', -1);
        xhr.setRequestHeader('Cache-Control', 'no-cache');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                window.location.reload(true);
            }
        };

        xhr.send();
    },

    /*
     * Function as like Object.assign()
     * @param {Object}
     * @return {Object}
     */
    objectAssign: function() {
        var from;
        var to = {};

        for (var s = 0; s < arguments.length; s++) {
            from = Object(arguments[s]);

            if (from != null) {
                for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                        to[key] = from[key];
                    }
                }
            }
        }

        return to;
    },

    /**
     * Check browser shadow dom support
     */
    checkShadowDomSupport: function() {
        return typeof(document.documentElement.attachShadow) !== 'undefined';
    },

    /**
     * Creating element instead `document.createElement`
     * to prevented a custom `document.createElement`
     * see: https://github.com/AdguardTeam/AdguardAssistant/issues/165
     */
    createElement: function(markup) {
        var doc = document.implementation.createHTMLDocument('');

        if (markup && markup[0] !== '<') {
            markup = '<' + markup + '></' + markup + '>';
        }

        doc.body.innerHTML = markup;

        return doc.body.firstChild;
    }
};

/**
 * Custom event
 * @returns {{attach: attach, notify: notify}}
 * @constructor
 */
var CustomEvent = function () { // jshint ignore:line
    var listeners = [];

    var attach = function (listener) {
        listeners.push(listener);
    };

    var notify = function (args) {
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](args);
        }
    };

    return {
        attach: attach,
        notify: notify
    };
};

/**
 * Adguard selector library
 * @type {Function}
 */
var AdguardSelectorLib = (function(api, $) {
    // PRIVATE FIELDS

    var PLACEHOLDER_PREFIX = 'adguard-placeholder';
    var placeholdedElements = null;

    var restrictedElements = null;

    var SELECTED_CLASS = 'adguard_sg_selected';
    var REJECTED_CLASS = 'adguard_sg_rejected';
    var IGNORED_CLASS = 'adguard_sg_ignore';

    var selectedElements = [];
    var rejectedElements = [];

    var selectMode = 'exact';
    var unbound = true;
    var onElementSelectedHandler = null;

    var ignoreTouchEvent = 0;

    var selectionRenderer;

    // PRIVATE METHODS

    var removeClassName = function(className) {
        $('.' + className).removeClass(className);
    };

    var firstSelectedOrSuggestedParent = function(element) {
        if ($(element).hasClass(SELECTED_CLASS)) {
            return element;
        }

        while (element.parentNode && (element = element.parentNode)) {
            if (restrictedElements.indexOf(element) == -1) {
                if ($(element).hasClass(SELECTED_CLASS)) {
                    return element;
                }
            }
        }

        return null;
    };

    var px = function(p) {
        return p + 'px';
    };

    var getTagPath = function(element) {
        if (element.parentNode) {
            return element.parentNode.tagName.toLowerCase() + ' ' + element.tagName.toLowerCase();
        } else {
            return element.tagName.toLowerCase();
        }
    };

    var clearSelected = function() {
        selectedElements = [];
        rejectedElements = [];

        removeClassName(SELECTED_CLASS);
        removeClassName(REJECTED_CLASS);

        selectionRenderer.remove();
    };

    /**
     * Returns element offset coordinates extended with width and height values.
     *
     * @param elem
     * @returns {{top: number, left: number, outerWidth: number, outerHeight: number}}
     */
    var getOffsetExtended = function(elem) {
        var bodyRect = document.documentElement.getBoundingClientRect();
        var elemRect = elem.getBoundingClientRect();

        var rectTop = elemRect.top - bodyRect.top;
        var rectLeft = elemRect.left - bodyRect.left;

        return {
            top: rectTop,
            left: rectLeft,
            outerWidth: elem.offsetWidth,
            outerHeight: elem.offsetHeight
        };
    };

    /**
     * Adds borders to selected element.
     *
     * Default implementation of selection renderer.
     * Can be overwritten with custom implementation as a parameter of init function.
     *
     * @param element
     * @private
     */
    var BorderSelectionRenderer = (function(api) {
        var BORDER_WIDTH = 5;
        var BORDER_PADDING = 2;

        var BORDER_CSS = {
            'position': 'absolute',
            'background': 'white',
            'margin': '0px',
            'padding': '0px',
            'display': 'block',
            'float': 'none',
            'border': '0',
            'outline': '0',
            'background-color': '#13a35e',
            'font-style': 'normal',
            'vertical-align': 'baseline',
            'text-align': 'left',
            'line-height': '12px',
            'box-sizing': 'content-box',
            'min-height': 'auto',
            'max-height': 'auto',
            'min-width': 'auto',
            'max-width': 'auto',
            'z-index': 2147483646
        };

        var BORDER_BOTTOM_CSS = {
            'font-size': '10px',
            'font-weight': 'bold',
            'color': 'white',
            'padding': '2px 0px 2px 5px',
            'overflow': 'hidden',
        };

        var borderTop = null;
        var borderLeft = null;
        var borderRight = null;
        var borderBottom = null;

        var showBorders = function() {
            if (borderTop && borderBottom && borderLeft && borderRight) {
                borderTop.show();
                borderBottom.show();
                borderLeft.show();
                borderRight.show();
            }
        };

        var addBorderToDom = function() {
            document.documentElement.appendChild(borderTop.get(0));
            document.documentElement.appendChild(borderBottom.get(0));
            document.documentElement.appendChild(borderLeft.get(0));
            document.documentElement.appendChild(borderRight.get(0));
        };

        var addBorderCSS = function() {
            Object.keys(BORDER_CSS).forEach(function (item) {
                borderTop[0].style[item] = BORDER_CSS[item];
                borderBottom[0].style[item] = BORDER_CSS[item];
                borderLeft[0].style[item] = BORDER_CSS[item];
                borderRight[0].style[item] = BORDER_CSS[item];
            });

            Object.keys(BORDER_BOTTOM_CSS).forEach(function (item) {
                borderBottom[0].style[item] = BORDER_BOTTOM_CSS[item];
            });
        };

        var removeBorderFromDom = function() {
            if (borderTop && borderTop.get(0)) {
                var parent = borderTop.get(0).parentNode;

                if (parent) {
                    parent.removeChild(borderTop.get(0));
                    parent.removeChild(borderBottom.get(0));
                    parent.removeChild(borderLeft.get(0));
                    parent.removeChild(borderRight.get(0));
                }
            }

            borderTop = borderBottom = borderRight = borderLeft = null;
        };

        /**
         * Preparing renderer.
         */
        api.init = function() {
            if (!borderTop) {
                var width = px(BORDER_WIDTH);
                var bottomHeight = px(BORDER_WIDTH + 6);

                borderTop = $(CommonUtils.createElement('div')).css('height', width).hide().on('click', sgMousedownHandler);
                borderBottom = $(CommonUtils.createElement('div')).css('height', bottomHeight).hide().on('click', sgMousedownHandler);
                borderLeft = $(CommonUtils.createElement('div')).css('width', width).hide().on('click', sgMousedownHandler);
                borderRight = $(CommonUtils.createElement('div')).css('width', width).hide().on('click', sgMousedownHandler);

                api.borderTop = borderTop[0];
                api.borderBottom = borderBottom[0];
                api.borderLeft = borderLeft[0];
                api.borderRight = borderRight[0];

                addBorderCSS();
                addBorderToDom();
            }
        };

        /**
         * Clearing DOM and so on.
         */
        api.finalize = function() {
            removeBorderFromDom();
        };

        /**
         * Adds borders to specified element
         *
         * @param element
         */
        api.add = function(element) {
            api.remove();

            if (!element) {
                return;
            }

            var p = getOffsetExtended(element);

            var top = p.top;
            var left = p.left;
            var width = p.outerWidth;
            var height = p.outerHeight;

            borderTop.css('width', px(width + BORDER_PADDING * 2 + BORDER_WIDTH * 2)).
            css('top', px(top - BORDER_WIDTH - BORDER_PADDING)).
            css('left', px(left - BORDER_PADDING - BORDER_WIDTH));
            borderBottom.css('width', px(width + BORDER_PADDING * 2 + BORDER_WIDTH)).
            css('top', px(top + height + BORDER_PADDING)).
            css('left', px(left - BORDER_PADDING - BORDER_WIDTH));
            borderLeft.css('height', px(height + BORDER_PADDING * 2)).
            css('top', px(top - BORDER_PADDING)).
            css('left', px(left - BORDER_PADDING - BORDER_WIDTH));
            borderRight.css('height', px(height + BORDER_PADDING * 2)).
            css('top', px(top - BORDER_PADDING)).
            css('left', px(left + width + BORDER_PADDING));

            borderBottom.get(0).textContent = getTagPath(element);
            borderRight.get(0).target_elem = borderLeft.get(0).target_elem = borderTop.get(0).target_elem = borderBottom.get(0).target_elem = element;

            showBorders();
        };

        /**
         * Removes borders
         */
        api.remove = function() {
            if (borderTop && borderBottom && borderLeft && borderRight) {
                borderTop.hide();
                borderBottom.hide();
                borderLeft.hide();
                borderRight.hide();
            }
        };

        return api;
    })(BorderSelectionRenderer || {});

    var linkHelper = CommonUtils.createElement('a');
    var getHost = function(url) {
        if (!url) {
            return '';
        }

        linkHelper.href = url;
        return linkHelper.hostname;
    };

    var makePlaceholderImage = function(element) {
        var placeHolder = CommonUtils.createElement('div');
        var style = window.getComputedStyle(element);
        placeHolder.style.height = style.height;
        placeHolder.style.width = style.width;
        placeHolder.style.position = style.position;
        placeHolder.style.top = style.top;
        placeHolder.style.bottom = style.bottom;
        placeHolder.style.left = style.left;
        placeHolder.style.right = style.right;
        placeHolder.className += PLACEHOLDER_PREFIX + ' ' + IGNORED_CLASS;

        var icon = CommonUtils.createElement('div');
        icon.className += PLACEHOLDER_PREFIX + '-icon ' + IGNORED_CLASS;

        var domain = CommonUtils.createElement('div');
        domain.textContent = getHost(element.src);
        domain.className += PLACEHOLDER_PREFIX + '-domain ' + IGNORED_CLASS;

        icon.appendChild(domain);
        placeHolder.appendChild(icon);

        return placeHolder;
    };

    var removePlaceholders = function() {
        if (!placeholdedElements) {
            return;
        }
        var elements = placeholdedElements;
        for (var i = 0; i < elements.length; i++) {
            var current = elements[i];
            var id = PLACEHOLDER_PREFIX + i;

            var placeHolder = $('#' + id).get(0);
            if (placeHolder) {
                var parent = placeHolder.parentNode;
                if (parent) {
                    parent.replaceChild(current, placeHolder);
                }
            }
        }

        placeholdedElements = null;
    };

    var placeholderClick = function(element) {
        selectionRenderer.remove();
        removePlaceholders();

        onElementSelectedHandler(element);
    };

    var makeIFrameAndEmbeddedSelector = function() {
        placeholdedElements = $('iframe:not(.' + IGNORED_CLASS + '),embed,object').filter(function(elem) {
            var isVisible = elem.style.display != 'none';
            var isHaveSize = elem.offsetWidth != 0 && elem.offsetHeight != 0;
            return isVisible && isHaveSize;
        });

        var elements = placeholdedElements;
        for (var i = 0; i < elements.length; i++) {
            var current = elements[i];
            (function(current) {
                var placeHolder = makePlaceholderImage(current);
                var id = PLACEHOLDER_PREFIX + i;

                placeHolder.setAttribute('id', id);

                var parent = current.parentNode;
                if (parent) {
                    parent.replaceChild(placeHolder, current);

                    $(placeHolder).on('gestureend', gestureEndHandler);
                    $(placeHolder).on('touchmove', touchMoveHandler);
                    $(placeHolder).on('touchend', function(e) {
                        e.preventDefault();

                        if (needIgnoreTouchEvent()) {
                            return true;
                        }

                        placeholderClick(current);
                    });

                    $('#' + id).on('click', function(e) {
                        e.preventDefault();

                        placeholderClick(current);
                    });

                }

            })(current);
        }
    };

    /********** Events ***************/
    var sgMouseoverHandler = function(e) {
        e.stopPropagation();

        if (unbound) {
            return true;
        }

        if (this == document.documentElement || this == document.documentElement.parentNode) {
            return false;
        }

        var parent = firstSelectedOrSuggestedParent(this);
        if (parent != null && parent != this) {
            selectionRenderer.add(parent);
        } else {
            selectionRenderer.add(this);
        }

        return false;
    };

    var sgMouseoutHandler = function() {
        if (unbound) {
            return true;
        }

        if (this == document.documentElement || this == document.documentElement.parentNode) {
            return false;
        }

        selectionRenderer.remove();
        return false;
    };

    // e.isTrusted checking for prevent programmatically events
    // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
    var sgMousedownHandler = function(e) {
        if (e && e.isTrusted === false) return false;
        if ($(e.target).hasClass(IGNORED_CLASS)) return false;
        e.preventDefault();
        e.stopImmediatePropagation();
        if (unbound) {
            return true;
        }

        var elem = e.target;

        var borders =
            elem == selectionRenderer.borderTop[0] ||
            elem == selectionRenderer.borderLeft[0] ||
            elem == selectionRenderer.borderRight[0] ||
            elem == selectionRenderer.borderBottom[0];

        if (borders) {
            //Clicked on one of our floating borders, target the element that we are bordering.
            elem = elem.target_elem || elem;
        }

        if (elem == document.documentElement || elem == document.documentElement.parentNode) {
            return;
        }

        selectionRenderer.remove();

        onElementSelectedHandler(elem);

        return false;
    };

    /********** Touch event handlers ***************/
    var touchElementSelectHandler = function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        sgMouseoverHandler.call(this, e);
        sgMousedownHandler.call(this, e);
    };

    var needIgnoreTouchEvent = function() {

        if (ignoreTouchEvent > 0) {

            ignoreTouchEvent--;
            return true;
        }

        return false;
    };

    var elementTouchendHandler = function(e) {
        if($(e.target).hasClass(IGNORED_CLASS)) return false;

        e.stopPropagation();

        if (needIgnoreTouchEvent()) {
            return true;
        }

        touchElementSelectHandler.call(this, e);
        return false;
    };

    var emptyEventHandler = function(e) {
        e.stopPropagation();

        return false;
    };

    var gestureEndHandler = function() {
        ignoreTouchEvent = 2;
        return true;
    };

    var touchMoveHandler = function() {
        ignoreTouchEvent = 1;
        return true;
    };


    var setupEventHandlers = function() {
        makeIFrameAndEmbeddedSelector();
        var elements = $('body *:not(.' + IGNORED_CLASS + ')');

        elements.forEach(function(el) {
            el.addEventListener('gestureend', gestureEndHandler);
            el.addEventListener('touchmove', touchMoveHandler);
            el.addEventListener('touchend', elementTouchendHandler, true);
            el.addEventListener('touchstart', emptyEventHandler);
            el.addEventListener('mouseover', sgMouseoverHandler);
            el.addEventListener('mouseout', sgMouseoutHandler);
            el.addEventListener('click', sgMousedownHandler, true);
        });
    };

    var deleteEventHandlers = function() {
        removePlaceholders();

        var elements = $('body *');
        elements.forEach(function(el) {
            el.removeEventListener('gestureend', gestureEndHandler);
            el.removeEventListener('touchmove', touchMoveHandler);
            el.removeEventListener('touchend', elementTouchendHandler, true);
            el.removeEventListener('touchstart', emptyEventHandler);
            el.removeEventListener('mouseover', sgMouseoverHandler);
            el.removeEventListener('mouseout', sgMouseoutHandler);
            el.removeEventListener('click', sgMousedownHandler, true);
        });
    };

    //Define default implementation of selection renderer.
    selectionRenderer = BorderSelectionRenderer;

    // PUBLIC API

    /**
     * Starts selector module.
     *
     * @param onElementSelected callback function
     * @param selectionRenderImpl optional object contains selection presentation implementation
     */
    api.init = function(onElementSelected, selectionRenderImpl) {

        onElementSelectedHandler = onElementSelected;
        if (selectionRenderImpl && typeof selectionRenderImpl === 'object') {
            selectionRenderer = selectionRenderImpl;
        }

        restrictedElements = ['html', 'body', 'head', 'base'].map(function(selector) {
            return $(selector).get(0);
        });

        selectionRenderer.init();
        setupEventHandlers();
        unbound = false;
    };

    /**
     * Resets state of selector.
     * Clears current selection.
     */
    api.reset = function() {
        clearSelected();
    };

    /**
     * Destroys selector module.
     * Removes all selector elements and unbinds event handlers.
     */
    api.close = function() {
        unbound = true;

        selectionRenderer.finalize();
        deleteEventHandlers();
    };

    /**
     * Selects specified element.
     * Marks element as selected and holds selection on it.
     *
     * @param element
     */
    api.selectElement = function(element) {
        deleteEventHandlers();
        selectionRenderer.add(element);

        unbound = true;
    };

    /**
     Returns css class name.
     If this class assigns to HTML element, then Adguard Selector ignores it.
     */
    api.ignoreClassName = function() {
        return IGNORED_CLASS;
    };

    return api;

});

/**
 * Adguard rules constructor
 * @type {Function}
 */
var AdguardRulesConstructorLib = function (api) { // jshint ignore:line

    var CSS_RULE_MARK = '##';
    var RULE_OPTIONS_MARK = '$';

    var URLBLOCK_ATTRIBUTES = ["src", "data"];

    var linkHelper = CommonUtils.createElement('a');

    /**
     * Constructs css selector for element using tag name, id and classed, like: tagName#id.class1.class2
     *
     * @param element Element
     * @param classList Override element classes (If classList is null, element classes will be used)
     * @param excludeTagName Omit tag name in selector
     * @param excludeId Omit element id in selector
     * @returns {string}
     */
    var makeDefaultCssFilter = function (element, classList, excludeTagName, excludeId) {
        var cssSelector = excludeTagName ? '' : element.tagName.toLowerCase();
        if (element.id && !excludeId) {
            cssSelector += '#' + cssEscape(element.id);
        }
        cssSelector += constructClassCssSelectorByAND(classList || element.classList);
        return cssSelector;
    };

    /**
     * Constructs css selector for element using parent elements and nth-child (first-child, last-child) pseudo classes.
     *
     * @param element Element
     * @param options Construct options. For example: {excludeTagName: false, excludeId: false, classList: []}
     * @returns {string}
     */
    var makeCssNthChildFilter = function (element, options) {

        options = options || {};

        var classList = options.classList;

        var excludeTagNameOverride = 'excludeTagName' in options;
        var excludeTagName = options.excludeTagName;

        var excludeIdOverride = 'excludeId' in options;
        var excludeId = options.excludeId;

        var path = [];
        var el = element;
        while (el.parentNode) {
            var nodeName = el && el.nodeName ? el.nodeName.toUpperCase() : "";
            if (nodeName === "BODY") {
                break;
            }
            if (el.id) {
                /**
                 * Be default we don't include tag name and classes to selector for element with id attribute
                 */
                var cssSelector = '';
                if (el === element) {
                    cssSelector = makeDefaultCssFilter(el, classList || [], excludeTagNameOverride ? excludeTagName : true, excludeIdOverride ? excludeId : false);
                } else {
                    cssSelector = makeDefaultCssFilter(el, [], true, false);
                }
                path.unshift(cssSelector);
                break;
            } else {
                var c = 1;
                for (var e = el; e.previousSibling; e = e.previousSibling) {
                    if (e.previousSibling.nodeType === 1) {
                        c++;
                    }
                }

                var cldCount = 0;
                for (var i = 0; el.parentNode && i < el.parentNode.childNodes.length; i++) {
                    cldCount += el.parentNode.childNodes[i].nodeType === 1 ? 1 : 0;
                }

                var ch;
                if (cldCount === 0 || cldCount === 1) {
                    ch = "";
                } else if (c === 1) {
                    ch = ":first-child";
                } else if (c === cldCount) {
                    ch = ":last-child";
                } else {
                    ch = ":nth-child(" + c + ")";
                }

                /**
                 * By default we include tag name and element classes to selector for element without id attribute
                 */
                if (el === element) {
                    var p = makeDefaultCssFilter(el, classList, excludeTagNameOverride ? excludeTagName : false, excludeId);
                    p += ch;
                    path.unshift(p);
                } else {
                    path.unshift(makeDefaultCssFilter(el, el.classList, false, false) + ch);
                }

                el = el.parentNode;
            }
        }
        return path.join(" > ");
    };

    /**
     * Constructs element selector for matching elements that contain any of classes in original element
     * For example <el class="cl1 cl2 cl3"></el> => .cl1, .cl2, .cl3
     *
     * @param element Element
     * @param classList Override element classes (If classList is null, element classes will be used)
     * @returns {string}
     */
    var makeSimilarCssFilter = function (element, classList) {
        return constructClassCssSelectorByOR(classList || element.classList);
    };

    /**
     * Creates css rule text
     * @param element Element
     * @param options Construct options. For example: {cssSelectorType: 'STRICT_FULL', excludeTagName: false, excludeId: false, classList: []}
     * @returns {string}
     */
    var constructCssRuleText = function (element, options) {

        if (!element) {
            return;
        }

        options = options || {};
        var cssSelectorType = options.cssSelectorType || 'STRICT_FULL';

        var selector;
        switch (cssSelectorType) {
            case 'STRICT_FULL':
                selector = makeCssNthChildFilter(element, options);
                break;
            case 'STRICT':
                selector = makeDefaultCssFilter(element, options.classList, options.excludeTagName, options.excludeId);
                break;
            case 'SIMILAR':
                selector = makeSimilarCssFilter(element, options.classList, true);
                break;
        }

        return selector ? CSS_RULE_MARK + selector : '';
    };

    var constructUrlBlockRuleText = function (element, urlBlockAttribute, oneDomain, domain) {

        if (!urlBlockAttribute) {
            return null;
        }

        var blockUrlRuleText = urlBlockAttribute.replace(/^http:\/\/(www\.)?/, "||");
        if (blockUrlRuleText.indexOf('.') === 0) {
            blockUrlRuleText = blockUrlRuleText.substring(1);
        }

        if (!oneDomain) {
            blockUrlRuleText = blockUrlRuleText + RULE_OPTIONS_MARK + "domain=" + domain;
        }

        return blockUrlRuleText;
    };

    var getUrlBlockAttribute = function (element) {
        if (!element || !element.getAttribute) {
            return null;
        }

        for (var i = 0; i < URLBLOCK_ATTRIBUTES.length; i++) {
            var attr = URLBLOCK_ATTRIBUTES[i];
            var value = element.getAttribute(attr);
            if (isValidUrl(value)) {
                return value;
            }
        }

        return null;
    };

    var haveUrlBlockParameter = function (element) {
        var value = getUrlBlockAttribute(element);
        return value && value !== '';
    };

    var haveClassAttribute = function (element) {
        return element.classList && element.classList.length > 0;
    };

    var haveIdAttribute = function (element) {
        return element.id && element.id.trim() !== '';
    };

    var cropDomain = function (url) {
        var domain = getUrl(url).host;
        return domain.replace("www.", "").replace(/:\d+/, '');
    };

    var getUrl = function (url) {
        var pattern = "^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$";
        var rx = new RegExp(pattern);
        var parts = rx.exec(url);

        return {
            host: parts[4] || "",
            path: parts[7] || ""
        };
    };

    var isValidUrl = function (value) {
        if (value) {
            linkHelper.href = value;
            if (linkHelper.hostname) {
                return true;
            }
        }

        return false;
    };

    /**
     * Constructs css selector by combining classes by AND
     * @param classList
     * @returns {string}
     */
    var constructClassCssSelectorByAND = function (classList) {
        var selectors = [];
        if (classList) {
            for (var i = 0; i < classList.length; i++) {
                selectors.push('.' + cssEscape(classList[i]));
            }
        }
        return selectors.join('');
    };

    /**
     * Constructs css selector by combining classes by OR
     * @param classList
     * @returns {string}
     */
    var constructClassCssSelectorByOR = function (classList) {
        var selectors = [];
        if (classList) {
            for (var i = 0; i < classList.length; i++) {
                selectors.push('.' + cssEscape(classList[i]));
            }
        }
        return selectors.join(', ');
    };

    /**
     * Utility method
     *
     * @param element
     * @returns {string}
     */
    api.makeCssNthChildFilter = makeCssNthChildFilter;

    /**
     * Returns detailed element info
     *
     * @param element
     */
    api.getElementInfo = function (element) {

        // Convert attributes to array
        var attributes = [];
        var elementAttributes = element.attributes;
        if (elementAttributes) {
            for (var i = 0; i < elementAttributes.length; i++) {
                var attr = elementAttributes[i];
                attributes.push({
                    name: attr.name,
                    value: attr.value
                });
            }
        }

        return {
            tagName: element.tagName,
            attributes: attributes,
            urlBlockAttributeValue: getUrlBlockAttribute(element),
            haveUrlBlockParameter: haveUrlBlockParameter(element),
            haveClassAttribute: haveClassAttribute(element),
            haveIdAttribute: haveIdAttribute(element)
        };
    };

    /**
     * Constructs css selector for specified rule
     *
     * @param ruleText rule text
     * @returns {string} css style selector
     */
    api.constructRuleCssSelector = function (ruleText) {
        if (!ruleText) {
            return null;
        }

        var index = ruleText.indexOf(CSS_RULE_MARK);
        var optionsIndex = ruleText.indexOf(RULE_OPTIONS_MARK);

        if (index >= 0) {
            return ruleText.substring(index + CSS_RULE_MARK.length, optionsIndex >= 0 ? optionsIndex : ruleText.length);
        }

        var s = ruleText.substring(0, optionsIndex);
        s = s.replace(/[\|]|[\^]/g, '');

        if (isValidUrl(s)) {
            return '[src*="' + s + '"]';
        }

        return null;
    };

    /**
     * Constructs adguard rule text from element node and specified options
     *
     * var options = {
	 *	urlMask: url block attributes,
	 *	isBlockOneDomain: boolean,
	 *	url: url,
	 *  attributes: attributesSelectorText,
	 *  ruleType: (URL, CSS)
	 *  cssSelectorType: (STRICT_FULL, STRICT, SIMILAR),
	 *  excludeTagName: false, (Exclude element tag name from selector)
	 *  excludeId: false, (Exclude element identifier from selector)
	 *  classList: [] (Override element classes (If classList is null, element classes will be used))
	 * }
     *
     * @param element
     * @param options
     * @returns {*}
     */
    api.constructRuleText = function (element, options) {

        var croppedDomain = cropDomain(options.url);

        var ruleType = options.ruleType;

        if (ruleType === 'URL') {
            var blockUrlRuleText = constructUrlBlockRuleText(element, options.urlMask, options.isBlockOneDomain, croppedDomain);
            if (blockUrlRuleText) {
                return blockUrlRuleText;
            }
        }

        var result;

        if (ruleType === 'CSS') {

            result = constructCssRuleText(element, options);

            // Append html attributes to css selector
            if (options.attributes) {
                result = (result ? result : CSS_RULE_MARK + result) + options.attributes;
            }
        }

        if (!options.isBlockOneDomain) {
            result = croppedDomain + result;
        }

        return result;
    };

    return api;

};

/**
 * Manages iframe and it's content
 * @param $
 * @param settings
 * @param uiUtils
 * @param gmApi
 * @param log
 * @param selector
 * @param uiValidationUtils
 * @param localization
 * @returns {{showDetailedMenu: showDetailedMenu, showSelectorMenu: showSelectorMenu, showSliderMenu: showSliderMenu, showBlockPreview: showBlockPreview, showSettingsMenu: showSettingsMenu, setButtonPosition: setButtonPosition, onCloseMenu: CustomEvent, onShowMenuItem: CustomEvent, removeIframe: removeIframe, resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced, resizeSliderMenuToNormal: resizeSliderMenuToNormal}}
 * @constructor
 */
/* global StringUtils, Ioc, DetailedMenuController, SelectorMenuController, SliderMenuController, BlockPreviewController, SettingsMenuController */

/*
 * globals generated by gulp tasks/compile.js:
 * RESOURCE_TEMPLATE_DETAILEDMENU, RESOURCE_TEMPLATE_SELECTORMENU,
 * RESOURCE_TEMPLATE_SLIDERMENU, RESOURCE_TEMPLATE_BLOCKPREVIEW,
 * RESOURCE_TEMPLATE_SETTINGSMENU, RESOURCE_CSS_IFRAME,
 * RESOURCE_CSS_SELECTOR
 */

var IframeController = function ($, settings, uiUtils, gmApi, log, selector, uiValidationUtils, localization) { // jshint ignore:line
    var iframe = null;
    var iframeElement = null;
    var currentItem = null;
    var iframeMaxWidth = 320;
    var iframeMaxHeight = 407;
    var menuMaxWidth = 668;
    var settingsMaxWidth = 458;
    var iframePositionOffset = 5;
    var sliderMenuHeight = {advanced: 420, normal: 291};
    var buttonPosition = null;

    var views = {};

    var selectorStyles = "iframe#adguard-assistant-dialog{position:fixed;clip:auto;border-radius:3px;box-shadow:0 0 10px 3px rgba(162,161,161,.3)}.sg_hide_element{display:none!important}img.adguard_sg_selected{border:5px solid #0f0!important}#_sg_div.sg_top{top:5px!important}#_sg_div.sg_bottom{bottom:5px!important}#_sg_div input{margin-right:10px!important;font-size:15px!important}#_sg_path_field{width:400px!important}#_sg_div .sg_new_line{clear:both!important}#_sg_div .sg_option{float:left!important}#_sg_div .adguard_sg_selected_option{text-decoration:underline}.adguard-placeholder{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OUM5OUE4MEZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OUM5OUE4MUZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5Qzk5QTdFRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5Qzk5QTdGRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9rJm9wAAAAZQTFRF2+7g1OfZ+LX/EgAAACtJREFUeNpiYIQABhhA5TIyoHIhfCS1DKhcEB/FJAZG7AYzoNlLLy5AgAEAMigAar6TcqkAAAAASUVORK5CYII=)}.adguard-placeholder-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkNBQTNGMkZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkNBQTNGM0ZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2Q0FBM0YwRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ2Q0FBM0YxRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+49sbDwAAAl9JREFUeNrMmE0o5VEYxq9vJmpI2SBZjCSNKKGwkDE0m8mg2QwzEtkNCeUjGyVhYTbTUIZEMWmkbCVlw9QkG4mammbK5zAWuLqek3ch3W7v+Z8P/7d+u/cczz3neM7zP0Htg12eR6wUkA+eg2yQDOLAYegjiIkEr0AjyAPRfnp8toW9Be20QoHKa0tYEhgCVdwBNoQVgCmQKjPItLAKMAtiZAeaFFYM5sATJ4ODDYl6BuadijIlLAJMgHiFOWJMbGUfmaZsHYN98Bvs6haWA1olx2yCMfAd/DF1+Psl5rwGPWAYXJn8r3wNXjB7L0ENrZLRwy/m6ZDorw8kSqewUpDL7P0Epm3YRRBoYfbugW5bPpZDK8apTnBqS9h7WjWOLXyz5fxPQSWjz0dWcmPrEhdJNIEprIlW198Z7aUV1SasQWJnAp3Dzw+FqWxlOmV2HeXVecbegHBTYS5YYVy1yejrVJhIpxluFPaB6V1WhSWQTXjcJqyKjFVnhagabBhFFk7tgnPmlp+oChNbmMXM70XgL3Nen6qwj8y+xfv53fQZKweFzN5xW4c/Cgwwe9fAui1hIuBlMntHZOKNirAyiQ+NLbBkw8fEE9IM2QSnBv19I+oWVguWQSxzrnX6EVrqoV2I15kS0AxeSszjo+326hQm3hoSQRqR6mCeL2BV5x0VSjYQojDHNmgzcYn/Uxj/H9SBM7fkMQ951Tuw4aageEMpY8FUHnPy+XZECXbRTUFxhezEqCiZFfsFRnXdg1xhgcT9BF/BJG2htRKiDjx376EX9Md36HoR/NDp5jJ1K8AAcQBmooZhTgQAAAAASUVORK5CYII=);background-position:center center;background-repeat:no-repeat;height:100%}.adguard-placeholder-domain{background:#778b7c;color:#fff;left:0;top:0;padding:2px 4px;position:relative}@media print{#adguard-assistant-dialog,.adguard-alert{display:none!important;opacity:0!important;visibility:hidden!important}}";

    if (gmApi.GM_addStyle) {
        gmApi.GM_addStyle(selectorStyles);
    } else {
        if(document.querySelector('.adg-styles')) {
            return false;
        }

        var selectorStyleTag = CommonUtils.createElement('style');
        selectorStyleTag.classList.add('adg-styles');

        if (selectorStyleTag.styleSheet) {
            selectorStyleTag.styleSheet.cssText = selectorStyles;
        } else {
            selectorStyleTag.appendChild(document.createTextNode(selectorStyles));
        }

        document.getElementsByTagName("head")[0].appendChild(selectorStyleTag);
    }

    views[settings.MenuItemsNames.DetailedMenu] = "<div class=\"main\"><div class=\"close\"></div><div class=\"menu-head\"><div class=\"menu-head_title\"><span class=\"menu-head_name\"></span><div class=\"confidence-indication wot-hide\"><a class=\"wot-indicator wot-hide\" target=\"_blank\" href=\"http://adguard.com/wot-scorecard.html?domain=habrahabr.ru\"><i id=\"WotIndication\" class=\"adg-wot tooltip\" data-title=\"Site reputation indicator\"></i> </a><i id=\"ConfidenceIndication\" class=\"adg-wot-confidence tooltip\" data-title=\"Reputation Confidence Level\"></i></div></div><div class=\"menu-head_text wot-hide\" id=\"WotDescriptionText\"></div></div><div class=\"menu-filter\"><div i18n=\"menu_filtration_status\" class=\"menu-filter_lbl\"></div><div class=\"menu-filter_val\"><input type=\"checkbox\" class=\"menu-filter_input\" id=\"is-filter\"><label for=\"is-filter\" class=\"menu-filter_label\"></label></div></div><div class=\"menu\"><div id=\"do-not-block-30-sec\" class=\"menu__btn menu__btn--clock\" i18n=\"menu_do_not_filter_30_sec\"></div><div id=\"block-ad\" class=\"menu__btn menu__btn--landscape\" i18n=\"menu_block_ad_on_site\"></div><div id=\"report-abuse\" class=\"menu__btn menu__btn--report\" i18n=\"menu_report_abuse\"></div><div id=\"site-report\" class=\"menu__btn menu__btn--security\" i18n=\"menu_site_report\"></div><div id=\"assistant-settings\" class=\"menu__btn menu__btn--settings\" i18n=\"menu_settings\"></div></div></div>";
    views[settings.MenuItemsNames.SelectorMenu] = "<div class=\"main adguard_sg_ignore\"><div class=\"close adg-close\" id=\"close-button\"></div><div class=\"head\" id=\"drag-handle\"><div i18n=\"assistant_select_element\" class=\"head_title\"></div><div i18n=\"assistant_select_element_ext\" class=\"head_text\"></div></div><div class=\"foot\"><button i18n=\"assistant_select_element_cancel\" type=\"button\" class=\"btn btn-default\" id=\"cancel-select-mode\"></button></div></div>";
    views[settings.MenuItemsNames.SliderMenu] = "<div class=\"main\"><div class=\"close adg-close\"></div><div class=\"head head--slider\"><div class=\"head_in head_in--slider\"><div i18n=\"assistant_block_element\" class=\"head_title head_title--slider\" id=\"head_title\"></div><div class=\"element-rule_more element-rule_more--mobile\"><span class=\"element-rule_expand-link\" id=\"ExtendedSettingsText\"></span> <button i18n=\"assistant_block\" type=\"button\" class=\"btn btn-cancel\" id=\"adg-accept\"></button> <button i18n=\"assistant_another_element\" type=\"button\" class=\"btn btn-default\" id=\"adg-cancel\"></button></div></div><div class=\"adg-slide-btns\"><div class=\"adg-slide-btn adg-slide-btn--minus\"></div><div class=\"adg-slide-btn adg-slide-btn--plus\"></div></div><div i18n=\"assistant_block_element_explain\" class=\"head_text head_text--mobile-h\" id=\"head_text\"></div></div><div class=\"content\" id=\"slider-area\"><div class=\"element-rule element-rule--slider\"><div i18n=\"assistant_slider_explain\" class=\"element-rule_text element-rule_text--slider\"></div><div class=\"element-rule_slider\"><div class=\"adg-slide\" id=\"slider\"><div i18n=\"assistant_slider_max\" class=\"adg-slide-clue-max\"></div><div i18n=\"assistant_slider_min\" class=\"adg-slide-clue-min\"></div></div></div><div class=\"element-rule_more\"><span class=\"element-rule_expand-link\" id=\"ExtendedSettingsText\"><span i18n=\"assistant_extended_settings\" class=\"element-rule_expand-link_txt\"></span> <span class=\"element-rule_expand-link_arr\"></span></span></div><div class=\"element-rule_form\" id=\"adv-settings\"><div class=\"element-rule_form-cont\"><div class=\"element-rule_fieldset\" id=\"one-domain-checkbox-block\"><input class=\"form-ui-control\" id=\"one-domain-checkbox\" type=\"checkbox\"><label for=\"one-domain-checkbox\" class=\"form-ui\"><span i18n=\"assistant_apply_rule_to_all_sites\" class=\"form-ui-txt\"></span></label></div><div style=\"display:none\" class=\"element-rule_fieldset\" id=\"block-by-url-checkbox-block\"><input class=\"form-ui-control\" id=\"block-by-url-checkbox\" type=\"checkbox\"><label for=\"block-by-url-checkbox\" class=\"form-ui\"><span i18n=\"assistant_block_by_reference\" class=\"form-ui-txt\"></span></label></div><div style=\"display:none\" class=\"element-rule_fieldset\" id=\"block-similar-checkbox-block\"><input class=\"form-ui-control\" id=\"block-similar-checkbox\" type=\"checkbox\"><label for=\"block-similar-checkbox\" class=\"form-ui\"><span i18n=\"assistant_block_similar\" class=\"form-ui-txt\"></span></label></div><div class=\"element-rule_fieldset\"><input class=\"form-control\" id=\"filter-rule\" type=\"text\"></div></div></div></div></div><div class=\"foot foot--slider\"><button i18n=\"assistant_another_element\" type=\"button\" class=\"btn btn-default btn-another-el\" id=\"adg-cancel\"></button><div class=\"foot_action\"><div class=\"foot_action_btn\"><button i18n=\"assistant_preview\" type=\"button\" class=\"btn btn-primary\" id=\"adg-preview\"></button> <button i18n=\"assistant_block\" type=\"button\" class=\"btn btn-cancel\" id=\"adg-accept\"></button></div></div></div></div>";
    views[settings.MenuItemsNames.BlockPreview] = "<div class=\"main\"><div class=\"close\"></div><div class=\"head\"><div i18n=\"assistant_preview_header\" class=\"head_title\"></div><div i18n=\"assistant_preview_header_info\" class=\"head_text\"></div></div><div class=\"foot\"><button i18n=\"assistant_another_element\" class=\"btn btn-default\" id=\"select-another-element\" type=\"button\"></button><div class=\"foot_action\"><div class=\"foot_action_btn\"><button i18n=\"assistant_preview_end\" class=\"btn btn-primary\" id=\"end-preview\" type=\"button\"></button> <button i18n=\"assistant_block\" class=\"btn btn-cancel\" id=\"block-element\" type=\"button\"></button></div></div></div></div>";
    views[settings.MenuItemsNames.SettingsMenu] = "<div class=\"main\"><div class=\"close\"></div><div class=\"head\"><div i18n=\"assistant_settings\" class=\"head_title\"></div><div i18n=\"settings_choose_size_and_position\" class=\"head_text head_text--mobile-h\"></div></div><div class=\"content\"><div class=\"settings settings__horizontal\"><div class=\"settings_fieldset\"><div i18n=\"settings_icon_size\" class=\"settings_fieldset_lbl\"></div><div class=\"settings_fieldset_val\"><div class=\"choice-size\"><div class=\"choice-size_group\"><div class=\"choice-size_field\"><input class=\"choice-size_input form-ui-control\" id=\"size-small\" type=\"radio\" name=\"radio\"><label class=\"form-ui\" for=\"size-small\"><span i18n=\"settings_small\" class=\"form-ui-txt\"></span></label><div class=\"choice-size_logo logo__small\"></div></div><div class=\"choice-size_field\"><input class=\"choice-size_input form-ui-control\" id=\"size-big\" type=\"radio\" name=\"radio\"><label class=\"form-ui\" for=\"size-big\"><span i18n=\"settings_big\" class=\"form-ui-txt\"></span></label><div class=\"choice-size_logo\"></div></div></div></div></div></div><div class=\"settings_fieldset\"><div i18n=\"settings_position\" class=\"settings_fieldset_lbl settings_fieldset_lbl__pos\"></div><div class=\"settings_fieldset_val\"><div class=\"change-position\"><div class=\"change-position_i\"><input type=\"radio\" name=\"position\" class=\"change-position_input\" id=\"position-top-left\"><label class=\"change-position_label\" for=\"position-top-left\"><span class=\"s-position-arr-top-left\"></span></label><div i18n=\"settings_left_top\" class=\"change-position_val\"></div></div><div class=\"change-position_i\"><input type=\"radio\" name=\"position\" class=\"change-position_input\" id=\"position-top-right\"><label class=\"change-position_label\" for=\"position-top-right\"><span class=\"s-position-arr-top-right\"></span></label><div i18n=\"settings_right_top\" class=\"change-position_val\"></div></div><div class=\"change-position_i\"><input type=\"radio\" name=\"position\" class=\"change-position_input\" id=\"position-bottom-left\"><label class=\"change-position_label\" for=\"position-bottom-left\"><span class=\"s-position-arr-bottom-left\"></span></label><div i18n=\"settings_left_bottom\" class=\"change-position_val\"></div></div><div class=\"change-position_i\"><input type=\"radio\" name=\"position\" class=\"change-position_input\" id=\"position-bottom-right\"><label class=\"change-position_label\" for=\"position-bottom-right\"><span class=\"s-position-arr-bottom-right\"></span></label><div i18n=\"settings_right_bottom\" class=\"change-position_val\"></div></div></div></div></div></div></div><div class=\"foot\"><div class=\"foot_action\"><div class=\"foot_action_btn\"><button i18n=\"settings_cancel\" class=\"btn btn-default\" type=\"button\" id=\"cancel\"></button> <button i18n=\"settings_save\" class=\"btn btn-primary\" type=\"button\" id=\"save-settings\"></button></div></div><div class=\"cf\"></div></div></div>";

    var IFRAME_CSS = "@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,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) format(\'woff\');font-weight:400;font-style:normal}@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,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) format(\'woff\');font-weight:600;font-style:normal}@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,d09GRgABAAAAAL7wABMAAAABgQQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABqAAAABwAAAAcc49980dERUYAAAHEAAAAHgAAAB4AJwHMR1BPUwAAAeQAAA+GAAAgvrps/pRHU1VCAAARbAAAADgAAABQkzyCS09TLzIAABGkAAAAYAAAAGCiSMb/Y21hcAAAEgQAAAJuAAAD5hQ2HAhjdnQgAAAUdAAAAC4AAAAuEm4NcGZwZ20AABSkAAABsQAAAmVTtC+nZ2FzcAAAFlgAAAAIAAAACAAAABBnbHlmAAAWYAAAmGAAATq0uNHRNWhlYWQAAK7AAAAANgAAADYH6C2aaGhlYQAArvgAAAAhAAAAJBHKCNhobXR4AACvHAAABDMAAAcYo46ZQmxvY2EAALNQAAADjgAAA46uhGI8bWF4cAAAtuAAAAAgAAAAIALmAeJuYW1lAAC3AAAAAf8AAARuTv6bcXBvc3QAALkAAAAFbwAADLWt/T0acHJlcAAAvnAAAAB1AAAAi5X9c753ZWJmAAC+6AAAAAYAAAAGAGpZ1gAAAAEAAAAA1FG1agAAAADJQhegAAAAANX7sOgAAQAAAAwAAAAWAAAAAgABAAEBxQABAAQAAAACAAAAAHjanZkNkFbVecefA8vKLi77hchH2PixIaydWEsdPyjaJKWwMY4irIp10USEJAgrL6IGwQ0S3khRDMGPkIMxWGnG2bF3dGIcjEwy0zN1WpvUCZP0OEZrow2NehIbm+raGLa/59xz34/dJU07d/5z7j3vufc853+ej/+9rxgRaZY+uU4aFi2+uE9mrdq8cZ3M/czG1TfI/HWf3jQgF0oDY2RkRHTs73Nubli9cUAm61lEg0yI7WQxXc/qSNMyoXtC98RbJm5tGARPTmqc1AcGJ+2gzSY1Np4IPn5C7wkDJwxM6pvc23TmxFuaVjStbdoHhjg7DPR6bfOEpn3NG5o3NB1u3jDxloYn9eA5fSA/GvXgSRzxnnhXcTQ/0Lyh4cmmFTq+aS0zD+pcTWc2PzplbcuB5kf1aDk2dVPr9rZ5bQNT1rbtaTnWNgBs+6aWA1PWTt3U/ipXe9r26Mg222abVnQc7FALV3R2dxzs7O7c1bmrY6hzmLZbe6d1TevSvtyWjiG91rGdw222c3ja49O6Wg60bj9plqJt4KQfde6if9fUTZ3DCj30OmG45UDbHp7JXe2bOndNWdsxNL1rxlkzHpp5ysz5Mw+1DXQc1LblWGd3AR0/vatjaNb0WY/OntC5S1fRMTT7rDkTFPEuRijmzJvznTnv0wK9s2t61+PFb4rW7Tn0KGyKMzBrtadAsQJFYWdu28xDDYMNg9Eftirwxe6RkpwrPXI+WAAWyjRZNJLJ4pGyLAG94KIRJ0vBZWAZ18tp+2gvp70CrAADPOdGsAFs47c7eMZ28EWwg+sy+BK4E+wEd4G7wW5wD/d/GewBe7n/Xu65n/6vgv30fZ32G7QHsO0Jzg8x5jCtAy+MeHmJ65c5f432KO3rIIBh8B54H/x2xBkzUjJTQSuYORLM7JGyORWcDj4EesBSwBrNOrCecbeCz494s5n2NtottFtpB/l9G+12cA/ne8Be5jHyETkkH5W5I1bOAPPB2eBcbDsPW89nzAKwEGykfzO4DWwBPFduB4PgPq4fBAcYN8S9j3H+Ldpnaf8BPMf59+Hp+ZF+OcL5G/S9xdi3R6yZDGaM9JtZtB/Ari5wCuengW6AbWYeWMJaemkvBZeB5Vz30V7O+CvB1Vz3c72SZ13D9bW0n6JdBVaDjVzfRLubMV8GXwH76XsQO1pYcYblGVZnWJthZYaVHgs9M2fM7JkxY0bPTBkzefZ3EmtpBnO5OgN8xDTDoYdDHzk8n6csADl/Hv48/Hn4U848nHnlzOAj5hnGd0oro9tBd3yC4wmBJwT5E64X0l4ABji/EWwAe+MTgjwMHgF/g6c8jX2HeUZzxa7CpuPZoH6whfGt2NkOTiO21IJRM/HkslFfPpmV97Py/jEznAvOw47zaRdEm92YWbfy++1gEFRZcLDQDwv97EbrsXekHbD/ceX5qi22WGyx2GKLFZunj71jDjP2Y9H6tshfsYLSWPvoX8Qci/kNjyJjlMgYJTKGJWNYMkaJjGHJGCUyhiVjlMkYVq7i3r8AVwPd+5XMU5tFRq9xG313MM928EWwg+sy+BK4E+wEd4G7wW5wD3PglWQVm7JKf+Tmfs6/CvbHCPNklxLZpSx/xfwH2edvg6dAsTNNsOBhwLN65SxgYcDCwFPVMzyjvJzDKMsom3jK4CnAU4CnAE8BjjwceTjycOThKMBRgKMARx6OAhx5OApwFOBIZ8uYLWO2DD4CfAT4CPAR4MPDh4cPDx8ePjx8ePjw8OHhw8OHhw8PHx4+AnwE+FDLM/hQbw3w4eHDw0eAjwAfHj50ZZaVWSpDvQ+Xx3jAIkYtBksA+YSV+Zp6YVO9sKleZLFerIyxUGZ1ZVZXHme3LauzrM6yOsvqLKuzrM6yOsvqLKuzrM6yOjuqhpRZnU27bVmdjXUk323L6jJ227Pb1fhrHrNfo/m+L/HTQKQGIjUQXYHoCjKl6BnHpwMzBWaqjuZ+eGyWHnMIPMO59miu2ELPFnq2SHudp6h39EVO/vddLnZTd3E2z13Gc5eN63u1T/2/+NG99bNg8zJsXkacFLMVGfe0uMZlMXsyImZQZc/DFfeBZzg/ix4ya6wWZapFWZ6i9zn26R9pn6c9Qp9WjjfBW6mCNALuoc5pjcuocZn5Y0B9MH8O0C6pwthYYcg85graK2lXxIpT1opDbbPUNk9ts9Q2T02z1DRvWKF5ALBKsw98DVhA1qC+efMwcxzSdWH37ro8+RgWPoHVuUqxqBRL1fZUbVbFbmvVfpG+n4CXGP8y4/6F314B/0rfT8Gr4DV++zfan4GjjPl32p+D12O1z2AjQ+WU5Bfc98tY/a38B/gVeJvf/pP21+C/+P0d2neJgGHGvwd+w/X7tL+FBQMmsKoGMAk0sqoToorwpgm0cJ6rprIhv5lOcBKYCWbx+2x+m0P7QXAKOJXr02hPp6XioaxKKA5vPgzmgR6uUUXmHHAeWAgupP+j4OOck03YucxcRHsxuCQqFI8yK6FSPOqsZJbjWX2MIZuwm5kh5tjNjJ3UXbTmOrAKXM/Y1bRraD/HmBs4XwfWsxYqnynF3bbmZqBKT1WeKrxBQBwYYsDspI7u4ncyDUpH1V4JteNRfCUUj0f1lcx90VsyPCXDSzI8xJqHwAGgWeabYHRdOTl6SuEZ3899O7I+KzGpLCqDcxNzyoIyoP6qvroKrAbqr2qZWqUWaZ6bM+bpz9fMMOP3mGVlmunaymw2crlxnBn3p1n/rFIrHiPDjI2CgDUBa5x42pfw0pe56zXao7Svg5BifBi8B/5b1uCpHk8NeGpmJsoaVhCSR2asQnW8riTgebqagOfpigKep6sKrCrgdd6czb2LwaVcL42rDHhTPZ/Xs9vK6Rra3FOyuNp679DVBzxBGQh4grIQzN6chcoO91TU7FBU74VqL7KajVmtyGjNcV9qs5knm3mymeplm7JZKWWzQqHbcbNYda/ybPYFcEdd9vIVhdxeZGT2KqiXwG2IHrIy7X7hZxsjDwEeAjyEuOtFFp9cZH3sD9gfsDFgY1U7T5DH5admJ6ycU6kQQ9FLPNyEmPV5mqia+i74Hn0uVgIXK8EPkg8fof/H0XsCnqNeod7g8YZgpifLCxsu4PxPaZcAVEjFpqtiBQiVFX4WrAPr6ctXqW98+rbnDTXRlOm/F9yfKsLXks8/Av467ni+xtkVnZ2/p9r4nqqr0XfVH8R3Vc3sFqs1q1qstqYjWXpVxRJ999SMZLHCYoWNVlRmS/r8rBoefeLRw6MbxaOv4dFFK46AH0drxuNwNH/qfz7x5+DPJf7qeRvLmYczraQOzhycuTF8GXkXf+iK2rktqmytiY6soHY5skIgKwSyQiAjBDJCIBuovQ5bHZGvUa8Rr9GuUa6RrVEdsMkRqRqlGqEanYEc7MnBvqJtZ8b8c7zc836sbj7mldNjJfMxjyyNVaiaN66P+SLPioOxQviYE1I+UB2W9KHW+Tdo3wS/iLMFYj9Qc0Osgb20fSCvZ4EZAjOEWLtuot0R60ygzgTqTODpoVJfCn3ZVPGKl2Ju9bClO6u7VGW+G5tQvSC3yWKTSzZl8StCI/xp/S9qu9bv3EYbvxJcwe8o+WSr5p8MW7MKG7nNWbR5Z7TbYbfDbofdWY3dZewuy6waHZh78nPx+0YWvbX4cjAjZhiHd7rolbVfEQrvvDpapPkrI7ozIjojWqt67cxKXq7d/YKD3AucclDnCQUfM1PFKXip9Y4PJw9Rjgov6UvKc0WFJwdPrsZr3BivqefKVXJ1B3tLxgZPxCjPiHJHdLu6vZ7KOltjZLq457dyvRlsieqjxP6XZEddzA0RhbluzeRbnLMnol7iQL12dXKE9kXan8RZLRxmNfrVoV8d+tVplkO/OvSrxnGGfnXoVwfXqluzpFtd0q0O3erQrA7N6pJmVb2awX+GCuhBszr2IUtf8iya1aEGetCtDt3q0KwuapsW2qn4lGbWds476TuJdibI9WqWdGqWdGqWdGpW0UA9nM9n/Nk8/xza88BCUNWpDp3qUBM9Zgm4iPOLwSUg16pZ0qpZ1KoaI1fTVvWpG6M2cn2qqiOL2f9Gzksg16eOXSyzi2V2sYy/ZBV9uovf7ga5Ns2SNs2SNs2iNs31qDP6TaiqR+tzIbULhtvjrrqky1xdbqyNhmoGPn5+XD+OZz9Nn/rsKcSgIwYd0e5QBmuIeBdrVB7xrk4b1Ue9S1HvUtTrW53WI1eJ+lwLZemNLldw+6Mu13zjiCUX30SjBZWeU2MMoFJqdHNhRxbtUP86WS6IOeB4+rm3RkP3pUxU5MZVKe5X065J+bFeuWe8F2j1q618b42qfr+r6hUVQ6vF6OqnXy+6K98ZVZPmvKsu7YX3ctKkWeJd367L8F6C91LSoPjzSG9899I3an2bzjVoBu/lxHs5adD6tW6kP9+HctqH/Nvk9Eo2zr9h+1h9RleeatWpzaRj6++DNcp2Sk0lcVpFKrqmqmdyPajfazbVvLvkmXC8LKge8UJ8g6/NgPZ3ZD5bk/ks+2lT1svGZD3NeO/GOLPsta3Jepasl/0/s55PWc+mrGdT1rMp69marGfHzXq12W5sprMp01UVwHVx5zP2JDtORssqGe3zsTaVzW2xPpXNVtpBxn6BXdnG+R2022nrs5xNWc6mLGejoigyXO2X20IJVXVua9SGoU4JFZmo8JZyne54M8Vg/t0pHEeDlCvfmfKo8DXZKKRsFFI2CnUqLs9MoZKH2rDIYpGtfPUqvnj1ppxSjYL8K9W+9HWKNw6eYKWRNVS9fXm0K3q6zK2sVmP/ucq3Af1vxqXoU51TrFKjUJ+ikRiIxIANLj6xL8aP2hJi/l1B20/f6Pw7Ng+Mn48nxa8TRUynWOat8WP8Min+cz6F94VW3lcnsmc9rPFM+UM5UebL2TJVzpUL+WWRLEbT98on5APySY4uuYTjg7JUllNxLufolis5PiRXST9cXMNxhgzILfIHslkGedI22S4LpCw75QK5S3Yz+1fkPp77gOzjuQ9yfFIOyMNysTzCcQnK6TG5VJ6QJ2WZPMVxhRySw8zwXfkeM/wtxzXyLMe18vfyT/Ip+SH66TPyI/ln+Zy8wLFOXpRXZL28ynGTHOXYJD/nuFnekF9i16/kbdkiv5Z35HYZlt/INmNMg+wwjaZRdprJ5kT5SzPVtMs9ZrqZLnvNDDNP7jV/ZC6Tg2a5uUb+znzarJEfms+a9eLNBoPmNZvMzfKKudXcxvv4VrNVfmYGzZ1y1Ow2KDHzdfOQHDMPm28aMd8232Gmwxwn/g+ZmSxHAAB42mNgZGBg4GLwYfBjYHFx8wlhkEquLMphUEkvSs1m0MtJLMljsGBgAaph+P8fSOBnAQEAaFQPkgADBOICvAAFAAQFmgUzAAABHwWaBTMAAAPRAGYB/AgCAgsIBgMFBAICBOAAAu9AACBbAAAAKAAAAAAxQVNDACAADSX8Bmb+ZgAACFECgCAAAZ8AAAAABF4FtgAAACAAAnjavZNZSFVRFIa/fb1pWZaNDpkdrcxGm0sbLZtnbbaysonmOSuzeS4bKApKE8UJ04ewtBy4DQhh1EMRlIKeil6CemiA6Mpqc7w0YNBbG9a/19qcc75z1voP4EZ9BKC0oqp1pazarhx6X8coGtETL5JII4NMcsmjgEKKKcHBfR5SyVOe84KXVFPLa97yno985ivfcCLKQ/mpKBWjYlWircL2ylZtP2oXw9NoY/gbgUawEWKEGRFGnHEjKLiLU0RTvTA0LV3TcjQt/w9aBU94ZtGqqLFo7/jAJ4v2XdPsyldFqmi1QCW4aNiPGxjehq8R4KKF/6LJF3kj9+WeOKRcyqRUiqRQbkqB5MsNyZNcyZJMyZB0SZPrkiopclWuyGW5JBflgiRLksyVSRIloXU1dY/rKp05zmwz20w3r5up5lXzinnOPGbGmz616VWP6jv835a7zdOaKA24Cpsrs/3jGfV3umHXHnDHg8Y0wZOmNNMTak4LvGlJK1rThra0wwdf/PCnvXZPBwLpqKcYRDCd6EwXQuhKKN3oTg/tp170Jow+9KUf/RnAQAYxmCGEE8FQhjGcEYzU3otkNGOIYizjGM8EJjKJyUxhKtOYzgxmEk0Ms5jNHOYyj/ksIJaFLGIxcSxhqX7/TTq2sE3rHu1i2M8BDlpfdpijHOEYx63qBCe1ntJxmjPWSTJnOWdl8SzX7SjT2T7WsEo9ZC0rdbX5t26t+EsHDzU4Wc16Vc4yNljVNVLULXVb3VUlqkgVW2fntfdRD5RD3fs5iDuqVG8b2a51B1u17iRB6y52uy7ZS6LWTLJddZb+d631A9uv07gAAAAABCYFbQD1ANcA6ADxASIBIgEmAMkBIAD/ARcBBAENAPsBCwC/AJIAgABEBREAAHjaXVG7TltBEN0NDwOBxNggOdoUs5mQxnuhBQnE1Y1iZDuF5QhpN3KRi3EBH0CBRA3arxmgoaRImwYhF0h8Qj4hEjNriKI0Ozuzc86ZM0vKkap36WvPU+ckkMLdBs02/U5ItbMA96Tr642MtIMHWmxm9Mp1+/4LBpvRlDtqAOU9bykPGU07gVq0p/7R/AqG+/wf8zsYtDTT9NQ6CekhBOabcUuD7xnNussP+oLV4WIwMKSYpuIuP6ZS/rc052rLsLWR0byDMxH5yTRAU2ttBJr+1CHV83EUS5DLprE2mJiy/iQTwYXJdFVTtcz42sFdsrPoYIMqzYEH2MNWeQweDg8mFNK3JMosDRH2YqvECBGTHAo55dzJ/qRA+UgSxrxJSjvjhrUGxpHXwKA2T7P/PJtNbW8dwvhZHMF3vxlLOvjIhtoYEWI7YimACURCRlX5hhrPvSwG5FL7z0CUgOXxj3+dCLTu2EQ8l7V1DjFWCHp+29zyy4q7VrnOi0J3b6pqqNIpzftezr7HA54eC8NBY8Gbz/v+SoH6PCyuNGgOBEN6N3r/orXqiKu8Fz6yJ9O/sVoAAAAAAQAB//8AD3ja5H0JgBRFsnZlVXVX393V59wzPT0HMDAN3QzDcKsIcsslIiCgoiiHooKIgNeKeLAeqKsCKt7KKlU9jSAq4IWirOuxouJ9O4uILusFM8kfkVnV03Oh+97/3tv//esO09MMXZmRkRFffBEZKYjCYEEQz7BMFCRBEap1IsT7pRQ5tD+hWy0f9EtJIrwUdAnftuDbKcUabuyXIvh+Uo2q5VE1OlgsoWXkdjrbMvHQhsHyXwT4SOHcI1+Rpy3zBKfgFaYIKZcoVGn2eFqShIBcRTRfXBP2aK5E2moXiuUqzW2+qvdYBVtV2qsIufC2N572sFe6Sqp0j1f163aprk7QXZLq1zx13XvU9uyVTIRDQWustCIQlWLnnjR2zKSTR485WSbDenyz8sSx40ePmDTRkmicIbBxLZcuknJgXDjfkUJKwHHJSRyXHZ5nTbB3jB+JZotr0p60qAhO+EvRpyukKm1lP+l2GJAiwoCIDAPq3gMfTuBrObFXPkXOwT8t86iD/EQd+NwqQZC3WeYI+UIxmSqk8gShKhUK5yaTSU2I1wcjOfllkSR8VkO9qBYUlkUSmhyvl3xFxfi2Bd622h1ufFuJp2xOF/w7opXEtbw96VxF8MPocn16GEYXYj/BRzuq6geFAvaqelsoDAJV+G8p8bSN/4Ziw99QZHuVFvLpTvinLvYXepRUab3ytg7YfLCvEKpybB3wwcHD+ELL89WLeUqgql5if1rxT3hsvT3XBi/CvnpH2BnAT6t3h1zwCz72p8r+DOKf+DsR9jvwr3LYv4LPzDc/p8D8nEL8nfoi8zeL8X1pkE+UUAY+FYVVUFhUXN3qf9qgPFyHmmhtrCYaSEpJ/ApFFfiSYoEYfNUma2NVROn2PQkMe33Y08N3D/+C/tztJ/rlsDeGbzlh95CDW7ttJVc8/+FOciVdhl87P3yeLidX4NfzH4L+SMKEIzfIbssLQolQIXQVbha0cFwLJPUCuUGrTKTCBSjUcAiE6oxr5UnYRQ2alEhZnfi+FYRNtG5M9XMSelRp0KI+PUSqUlJBWSKRSAeZaqUszkr4SQv69M6gZD6lQa/G751R+22o/QVh0P6cOs2pbhLsvtyyrmWROs3q12ywIQI9e9XWJEPhiFJRqRaJsDOUUKymorKmiETUympSHgxHaqyBXjU9KyonvPPsFXu1U25Zu3XtsL0vXvHN4+Mapgx6ei0p6jNoSePlg46RvrwmFbhplWP0R/3d9JuhZy+b8KfN/ue3W0Yd6jTQSipzhj9+eZdehR/7G4+ET+lUWygIFqHfkQPWdZbLBYcQFHKEmNBN0IRUCLU9Cn/olXJDKgy7ISXCH7pfbkjbPFHRXaXb4GV+FXuZLzcQrRqllHZyM+D06T5QUAv/yeLTc+GnMv5TGZNSuoibiTgKyqn6UzYxVFdXp1lUkJNelgvyCtdpndVUfjRShyK0hVR/fW5RWWcQne7Phx8sTp8AP4AEfVHTotQGw8lETc9YqTVAknbS3l/0Iyfc8+dH7lu34UBV9ylTuleNlKQvGpvI42To+j8/cv9aeDs+dWq8SvorSX36xvvvf/rWxRd9v3/hYTAOh1aT+/HNve9/+ubFiw58txD1a/SR/ZZ6kF8h6FcPYZmQykHZ5aPsolJDyo5ii1tAQAkUkF5kb9CKfFplyR5Vt4I+WeN6pYJv6V1BEi5QnSR8L7LC/KU6vWul6k/b86NlXlQYl5ry5caYNKI58Au5dVocFMrqCjOpcFWqJjWmhVVIr9qohygkWgkiKCtHEdQSDwkEIwPgtypAGKMvuG7ooA+f1P925WriGdyDVJcuHkmK6J3znvjya/o96bFkxuIZ9MXeA8edMvbkwbUDh5GLrthy4thbJ9+oP3DNgqcm0l/P3XjZj6fSv89Z/vYb42b2IX26TBGnTTij28l9k336w/4jaL/J1cx+lwotbbWcZat1C6kybPJy0xIL7N+PprvFyfDv3WCJwb0J8A89TNXAQJbAP/Tyf9jTX5u0wubxR2IV4ujV1+1fsfK6y/ddf7MYaiSbH9hMh33TQEdr95KN+Jl94DOPNz9TMD/TuSctt/jMZNgfCopKrJe/pqfYZ//1N6++bt9lq66xzHuQnnDoEB17z0aS+vs3ZDMbZz+xt/SNZafgAf+pSXECrhD3AH5OrUVKSuURS0BxkspAv3IypfLXSnJaMX3mb+/cesUnb0of7T+NTKP3nXYgQr+6gHSm7y0gefiZE4R3ZUleCT55IuzKuKYwh6NZwOkRtE+Cw16VIgK+JBKaKldcc+zRxETazr2HnEjZHfjXdgV+02HHlw7BXqW7+chqoiqAglBUjakTyLmvk/Poja+Lx79OLqCrXqeryTyc1xELSQufCVahHMeQFo3VU+KauEeXQWFtoLAyOFbNim41AjoXsUr9BpQSh6fHosNNn4R30F/5WvYhq8Xe4mVMF+CzdGJtwC9UBV0AmyDZBVuzLtREQ30IJav378d/y/AJ6QyyqBaagUkGn7iYTnBIYnwzJpkNODJgw8QZfFxu2Mh5TEfDoA+4fwlTChgWH0uSRIlbtBKl6RCaAcQHQ47sl1XLlTCeCGCylB03vNfawFRUD+GkctiGhy2tuXy6H4QE+x0Noe53ZWBRCBGSVahjVsyfTPhVnxgrFQlu1V41PtyiQ777+fufvvvlh3+SspPPPnPqtFmzJ4tPkPNAYVbTe+it9F5yNplx5MNPGonw8cd8PhfAfMpgPg5Ys5TcPB9wcfIeXbI36C4YhiTDmhEGhQhCw4HE6iUXkO3/oHsly7DCe2Q7OePQaqnsDzcOi1zGPnc4YKJcZuvGCykVZ+wBEyfjjPMkmHFRXIvs0W1KQ8oWQVWz+UDrIgy3RFTQumIQpu5R4bH+Oi1Phd8qRJsv+zUBBTBATCaKSCjoIV4SAq2sIQNEbqaU4WddfffpV7w8f/Cq+pQ4rbGGTLtzepepo8bePk7eevIJldM3zJ/xsH7/w+6fd5OZd10yu/eEccOP57IYDuvkgjFXCOcIqXIcs2xpSOUwb2ZtSLuc5TngwlyWhvpQeY4NhFQJ+2yPXgp22odGOh9m48vHKficMIVOOAWnjDCytK5OD5XDK18RTMKvavl1Wg66LdA5cN64gD0rqkgNe4GTqOzF3ZESwlnK0dLhY5+bftN192w8e869t+4c/MeTVm4jyruH7rrhkcfoh/Qfn/U+1Dl5+rzTxn468ax13Xq/cs3GtVc8UWoN3XfNro85NgYPLfdm6xwQzuA6yPx0WnDawTEDTtYFwDPWBNGCcc2O+B1XBwGOjdkCmxUWyM4WyI5mAaCNbrODNxZ9KvMzToHpiCaqmg+XqIaAxQjFWCABfqY2ZlWi4kzifegh+ilNkdEOMJcJUrJburzxT1/QT0jJF/v6fuofPZyvxfQj+6UjMN58sGwMUesy7Bg3roVPakgHbXluWIsgbp6CuGbdo0dAVQthTBHwhxBN4IjkPBXVRbOpKeJEaKAF/bpLrTOlXlLTM4qyDoACSbV864Oop494eTJx04bEkooLe4o/UF9utM/EV76DUf/4dW/aKfnhm0HXQPGFX+kBxf3ZCw2HmXwHg+7kWpYBLioTzuWoSC+wGHvcZmlIe0tDEozYi/69nG33XBAvIPti3Oaw3Svgey7IMOV0uXGsxWpK8jKg4/frFoYNSwtgboIf3vKqmgsmhoYUzYEQTURCoP3gwZN8HmAaKsRybhvYvhhMppGpFx03cdyftk+3u0/969a3Dn9055fLSNlFU06dder0U5aLo8lastqzLzCl/v71Da99TJtuIOqkBWuWL5y18EK2Jj3Znp4D9r1ESFlghsww425W4mjaBYgxGRjhFhkMYU/py6Z/0L+IdvnCn7ccHiVfyHA2yipguRSsYSlY6AsNaQE05BCoK2LEOBNRDsIe3FoxeJHj04u4rDS/T3Ph253hdec4w0Ld4a9iHAsBFqwP5UftDAj5NS9IriugQIQ//mhFu/CH7TIT+DD8bA0AmDaxz+BLr1t09s8vvfTPhX9Yu5L+c+8X9DDxnX/6vLlzLn6l+7AZ04ZPHz5iKplx0ZNDRmw489Ytm+6c8+Cx45+Yu+H1554fN+XUUQPPHThNzK+bEu86pd8xI0ehvgxkMlgm5ILdBX1xMJ9g6ksM9CVS6EB9iaC+VDBh5MFk83x6CQanMOFK+J6H+uJweVFLSlRdAiXXFH/KHwiyLRkBl6G567RCVQvUaTG/rnD30RPcBwAWUJvSyhqY8ABSG/MQ0JhshRnY9P6dX19CH6T3Lh045uTV22Ypztqb5m56gxRMmz750kVTp54p3fkJkW6k+7fRM+kc97fBk7beO/mEb946Y9HCkQvWLBOauQK5D/N9dULKS8DkhJgjzqYMclpRBn7zFTrBVo5Zbc9J4/fJo5qdtXTqmHETRo2aOAHHgLgEx2AV/EJfkDWOwWc8OYAmPO3mj5UTmtuniyBnMa4HQb5uwCopq8NXV9eMV5wkawAmdrnLHIABYuRbMs9HbPYsYLMd8HwBrGLITkITpI1Ni8RrxZkryTtf0Lfoj5/jOCeQVbIk/YXxF3kc9QCEQ2SBO8IWR17CQDsEvuBDGsdKG8mq1wGNvf46t5tZz6qtsRN43ATxmqaLpI3Pfk6cpNsXtPNKti7WI19J54OvQ/1bJPCQDXRNi8XThXx5cuNM8fL2pEs4e+MuybMxJgFwr1biYwKyGIrockP0IaqRwhhuOlBFO1gp3RJUMXAV9NxCkKMl6AI56mJENZy4ufk8pJDE0EUY200JZEnY+rf9L3w9/aqp3RtHzz590JRxf9x8ycRxY06aNPrESRbHRU+vm337jOOG1NUNmXL1yKGn1A4YNK1xdDNgE4WZR+ZbzwNb01MYKNwqMACSLpeFEEwhEU935a/8cc2VTNfyH4oSWv94Oof9QLRBDCx25hi5M4vo0zX8pxof8ikG56IfA1KI1qj+QXaX7M8p7xpP9AVRCLq/K0w3XqfVqmCItP7+tE0IRTEG03IQBrDdWJZMyH4EMzDfyhjOuqYnvBeOSEG2HavhL2QR92uiV23IGisRCP7FQIL7dOZrZNkvb5BhqUn3nD1kXo73zLsffk448pdxLwwKn9D/hEu/vmUH/fJPJIc4Zv2w8NVf6J/oXPHY+yeeYnf36L/oKrHfPrJ87wb64l9Xfn7F4NpLXt2468fiMI3/IXXDHfsuWUf3PEd/pd90q9p8EllKztl18co3HbcwucL/LAMsF4CmuoURHAlrUpKBx7TVJhAwXVb0DCwA0xWASIpPlxFKgp/2YhigQFxORJudSYnYQEoukEYP8BpRKSoFoiLYYPJ3Mpt8S5+fRa2zNpJzro8pJZYLDq0iI+gm8Vjy7KLSJehPIFCTNwFW8IKNKRHOAisjcJjA1boEsFtOxIv0Qw5a0ygbkg+GlJPQfFyPXfBTAXoUCwyvFBUbVBfwDbOiPjY2WC/2hlbi1ywwUsDBJXIzRItVsqUyQRyguY1EI5XEeeHMPyyk+7/9dMeSC3/evGHxnIXL11jmPbxl6T0+e9H6FdvePjhtxmN/Hz7xxCFs/y4Av7Aa9mVYOF5IBZlXMHGzQ2qoV4IyAs8Im4IbxpqDbtcb5DhZUVOCG9GYLjtUAxsw7YooqELWkC+a4Pqz4C5S+dIru6ePXjfyoSfItJtf3/AWfYNuFze9S4Y8ftqB8tpDH9P4sJ+HkvNgrUG+ljjI1wYS7i2kbDgquyldL0IwRvnqdhCi3ccCBhSjyoYGEDEjLkEFFa5Mlqi+aGwjSZMJZDFdQm84/VLyCF24DgL5O+g2+ghdfZDsIju4PYNnS39lXPNQrmXsyahmCAjTFq5qFhyEKzMIjGVZqGsHHA4xLg9qjSCPR7H8a6NUQq3kHdqZQLD2A/3rP+idB5uf+yo81y4Myorz2DNtFvZMGz7TwZ+pZD8Twmvjgc5WD9woFfDH4cPu+L7pfSGz5l/CmucJF3NOiMVKHDkC1vUHchAJ+HE75bPnOWGOnDfTQwoL8n0hFnb44aEFJk0m2XIQF4RUjLZ1D9JAoTo94EcM6axDWAx/oUl8eTiGVMCgiCFG/qhRiPjBIoGukMvJxD07T7v9/u1fPalPnU5/FStXfLuU7qRpcQsZSxaftG8kPfLuZwcCpPTHpu5dY+T8jAwtUbZ2Aw0LoXALoVmSacnBpChJmZXDWYkJnBhgSZAnWo3mNcv8t5FUiBWkgu5t2muZ1/SJWHJotTip6RH+PPI2i82jrWJz/Hg0PPhlyXwifBIP0QVy5Dw6m/1bt9BNSFlxjM64LhoWzAKRKjdbgi46OaayqsyJKQwwwYehs6q8ceSAmRNIxUd7Tx/+x+DFl1nCh749SIOmLFzw+S6huyELW0YWRHPz+J8JQPeYSFqXHHV856i1JGoHy6jgmC8ki8lQWkC+oSl6yzKQwR/uJ+823dF4SBw2mfr4s2Q7PMsidDX2jGTsGaJZTVmkJKatkgVURmkWcgjF29My7/CKg+YaWpfCZwWFy4zPUrxJPnJdtGCmIsQ+Mag0pFXO2gbZAjKMGub5huf27i9kaQZvtUfz7dAly68WTdwhCbrkq64m9aLk9Rksv25Dw2vxIJBVQc5GTOHiciBJgirQs1cgBtKI+UMgj5vICVaIbW6i+yWnjd5J/0F1mx8msFeuAM24Kb6EWA/vkI+l9ec2LWnWy0uZvzjRWAu7sRZK0rRlXthXXp9uxShXYbZM9+KSOAHDwNrroqOOxV9SnblWzjpzjCLqgzm8C8SpVg+x02ub7mPD+p54Fog3HVot59OGRU3noy+F/W9Zw/ihUDM/ZFqAAOpgOKMfLh8bixXUMQLfVeSHJOamAtn8kGAYW0QKYWZwS60LyCQyCP4bTx+lz8J/j5IaTSMz6XotJW4lU8h8egOg/YfpKnIBOfmbb8nfyJ79zNejPs03uINjjZ3FbH8ArKHdKaBntaM1DLJhOtA6JTSHj/l59AQh1OiAs9kTJGSMtGO5pNlXPtVEFPoNpZfOXHn1gotXWObtfeeT76hf/HjumbNP57HEArqJyckLqHWKkHILXDwpdwA12Q22nossgiLLy3h5H0NtKDLNkdDz0WiCR6+XnC6OPQKAXTV7nRZRW4ovKCqY9GtXhI89QsbQq4+EOxLjj3TTKHot6d1SlIYvlUGWHsAqUwztcyQN/A3idHuZON3NrKAHxu1NaB6fHjDEicRgwMNBiQVAiROX3+tmWBtm0RKdCBHQxGxB30ryiffqS0jddLqVptdNv/6qlX88xTLvtTcv2d6Ldr1GDDXtk+RpZ5w+ge2VyUf2S5+Db6oUFgipCsbDgMT9ONxcwCPhCj/ikU5xzbtHL4A9U8ASqSxeDyVYjqvAy0eqqJtkpz+3BANwjEXDUcbRVHCOJqzWE29BjGVscpmngqhPNaixalJZLfJg3UQywSISMYL2yaueP3Hm7OqTV1562chDH859cc70c28eMv6UsjG3PHcT/eGHj48h6oCew4d1HtR3UL9zbz5ty1vJ+JfVZaMHVvbpNWTaUyuffg/nWQk6PgjWRRH6gP3P+HtBQgqMJYute1D4KYsVlc0CTj5ltbDMH7JhzZEZ2qdKOZdeTd+TF//44+GV8mL8/Adgj+fC5/uFWiHlQzlaDZsMy8/CUG6WNcnH0s+w1xkwtWMy3MeYV3Qyzd5GBsV8gFRcfutNV5Dya+hhnf6TvkO+ky5tfHz9bX+6Vzqxcdmd31xCAvBs+J/8PfPD/YWUE+fGUuO2pOl5CTyXcKtt5z4XXoM1cTDNEsyNCzYNpN6rFiE66UysobjV0Z8opDPtRLdb5jW+OOz5ipP3Sn2ZS+XPVTAfUyjsElKFqOmBJHt0CtA+y3IX8ccr7PGqQYQVc6exY8NPu9BpeLQcnxbeoTudv2ruHVsHDP4hyd9WfeBLLMgFBXZs3bHvR3zbCfCh3uV0B6rgX9VHcsKBqhT8WHJtybUxK2yZuhS8B9+EJ9y+HKcrHDHyy2Sz2xfIfgN9EYEhwdQLUQYQwGoyk0EAaaHaQDQAsmAvwEiAgnqIIkVJqR4PWTv5XyXhVzydHI7Ofo2U0rup9rQjKVmrXU9RHfy14807e30+UHI0/tTznVHDPzxe/Akc1d7Kf3ZOft69qVNGdhY/W7OKZrwgmnjBFWfASBfR88gMJfSwM4jA/k/+Qk8kx5OupJz0pyPJHrqRPkOfEXeL66mL/LNpTNNg0d100HyOvI1he8AlSkY3JHiInbHbmIlwsIwESEBEUfAXKAqEJKCMZCApIaXwqCT9AKb3gtivUWv6XAzg58cN3tkuVJv4wYxnGPRzxBlK1hXOHoN1MQKXZA2JMhIxFBfvaLpY+rLpLHHDdumpg9saBxsYfSXdLU4w9yyzoLLcgFykwZew1J+dFX+ICcwwl8hV5htSwtyzgHliajK0kux++22627p+16EfdvHPh61i1JOEBYBLhmyycj249k5iEy30Vw4kidCd7iaNbEzHCcY0+ZgEY0zKHng2slusJsWXJpxPIXH8wRicYlI9kaQaAxge7f63v5HdtOcci3fXr9PZ2GzkO1mxXChYBVUwoJ1BwrIcDYnZiY3cs5K88zl9jf4EdmFF4xLx9KZ1iHUb6W6p7MhYmFch5h/Tgiy4QTL8W9b0FLBmstSp8d2NV+EzSV95jTTD8hboSicBgCTm94L4D+xM0jLPyDmYXlrZanbvQWqi4UgoVg3/mBzf7/4d/b6xbA/O2JbX5SkQ5TiIeyxyPyFHKEUWGLNEqbBJBbsI6orckJZKwi53VVoyCJkY587tjDsv4oECgDW9zKDPdTsisyI1pbjCGP54/VoAtFYKmyEyunqXX3NwFnggwYSLUskIJzVWafKgYGfBtHnIuG8PbHngsj/P2PLxni9e7a0MW7Psjo2k86ozLj5v+VLS/5H1dkt8/agXZmzd1tTvxqlDN9695MIZk2R5PPP1t8P8Flt2gs0vFuYYuMmD8wtbGlI2YmQIbKyuxEYwKVvCJhdQWCAUYLUQGBYhz6QHkOu1WJGL1HLB63vQNocF5h60AlVzMjxq+H41yBIB/hDmCCtjSiCL2FVuJ6Uu16yXn377g2eeOifY4/hZ504++5ypc08TLTvpw8fcdBfde4T+Sj9euVCMbLjl/nXr1v7hdqZzkwAL/FnuAyi1v8FNuJGxxonYLRmU6uTQVNDdyEqodZpdTQl82M2xpklJqL4kUloYZ04insYtq08avKjvZ59N+OPQITfMpz7RTbyk6IRP8mN0O93Vtfsv3UpBrjAOsClcrmOFlAvlipRPRn6gHAHuzhwgSgCiLNUCOyzJJGkLqP605PGFCxGKgCwtbhicA1GKYCRXI8kKdLMxxsYZeZRaLr5Je7e/fI49TGIf9Xaf9upTe0jF3FnnzpbPvmjmHFElFlK29qJpZMKhPteuI7GmtesuX1MMQmT6gOPuAvILCvnC2ULKjxJ0yoYEc0HVQzY/RPrpkKHqBWw2EHkClNJsrAaMmWNMc4VtGOE7/XU8HOEJLyfE9sgyQmTvgcDfoFlR2v5CEmVgistaIFEGoyYR57efHm4ab1m5dMaGaSMfW0qP0I9JN3KbOHfq1LNFJ3GSsiPC59cvvbZT1ScV5YAc/zBn4UIDL0nDLG+ALpzCdYFR+1j1owmJlCjwANpqqEUQKw2YXnsSqUAQFT6gAoIKMuQeRATFVMbp5VAcgmtW71RTy1Af4yWshYSnEyvvSb1428LhJw8fUHv4MP1YGnXd6NGbHu72dsGwuuPea6yXRiEnaKXd5J4g685CL2GQ8I6Q6onSLgF99SP9P5DZOi2Y4BmJgZz6rYynu7FX6fw+Pb2wEvnGShwT11x79FqsvkloQskeNd2Fm+1aH9YMYtQLgXWtT++PGUj4tYhPK8Nf685/rXscS5qwXuRY+IVaM2jT+4OdTHsLSiq7oSZCABJioLhnN/iFMoEldTCflQ+BHSaO+zDjNdCfCkWQSgf/YKaxMsmsSDSkMOY8Dvgs2JcYOU1e1MRDgFKraQ1AqBdd2PW4IcdNmPnZm10vUcn5D1Yf+FvPqq53b9q4me6iH33890MXzF6rnz3vthPnnjNm7NiR6+55bMblBYGTevQbW1l2z9zHt/nk1VVDJz+6XbSUdhl4201b/3Lnff0GTxzer3qEVHrSrFkn7QBdAeshz4X9GsIMEMMy7qRpLULc1oV8SHvoboWHtSGBoQDNo+qKneVemE3zEp7dRAoAgwAVLJmi+Ga++fSz9OMNS+AZ9K3YFSet3fV00whx7lcPPElduO+uB4V9CZ5vE1yIvlnuG5NAWDEJPqwQV9jNkt5CghVhyIyEAQwOy6CIvAS0ZzLBEhIIw69fd9eYMetcpNRSt2rV4BGHT5IrDu9l8d2RP9Bu7FluwAxDIZIgBpNkgU0cx6wTe1oEOSXYCyzF7k8gi6vbLFgfEML1PyrHRMyRLD32+OHHkdIX0ueOITY2onf9406U5x8+65HNEeuPODKOY1D+T7B6o9rmiFMhaDC9PMRki8D4RA9DlBYchcJeukwKSklmSCgQu1e6FEKAofQUsp2m6GtLLTub5v2wnhxHk00PkcdPp5v4c8lWeK4kFPDnZqg4WGb8aqbi4BMtOw/1yYzX+iXs3ZhwnoEZ1TzknGDEbNigPnoxCDQMgVkZ+0AMN2M+FtsbWVIsolHhEeUYjAoMvGv5qqbUaXkQ19h5FQajl4qRC5DtDpYXTqrJSHIAQQeAf3JVq2C6lnlx+4eVvqp7Zx+YkFf14OxNT9IPR42bczb9aNS4886QK1YOG792+Lgnd6MCXnDB7Q807cPv9z2FmmiuxVzmA0Yaa+HMmpnuQ4OZYdSQSkM23cmpND1oTMSFE4Gh+9COyHXZ4w63GmiPR+c+uYN+PG7ykrkwuFFjXn6Gj+zep/neQJ80DcbjFnKRe2J5aNX06iz5nJdhITw8V4K0LEo66MEQkdUmRVQ1k1xGdwORuU+IlbKK1AzumER8P93x92X0wI93NCwnnc5aeOGZ+CWGiEyiV/36EG2i7684/NBd6++5+651axE/gQ1fDGMLgJ8/y+B7YEhcXFYDP2lCPBs3BTO4yZ6Nm2SviZusbjZgNwwY30PkBDaVmIIMoCAROaksHVcZC4dyWYmVamCnbzt5EDqdsWXZU+d4vbPOfW7GmYCcaDfLr9feRT+k9NHDV668KkTHSX/fcAs5xsBOIGeYS2+27iXI+yD6M72kmZEKoaNnSoyWAXMKdh8uPdoPTEk5QwhbvP6cYnQW+WAarazaFYxFvWBl7xroJRxJ1uKu6snT+i3wy6S9z8y6rU7J+5F+6HZX3znr6bdJp1lz558ln71wN+AXmZSPPHHlIYU80+fMUSdi8HrX8rtiG24xdFcaAXPwYRaI8+sZxXVhMKdyzg20Fbefj2sr6KmrrZ5GJENH36/yJB4+vW9lOJa8do1ckZo8z0a/t//xsqbPM5hzGTyzHBE0r6oxEZNdNksjsOKaCSpTIcKS0qwiKYbBwCbJ7gkVlKLc/P6U1Wth5REFIV5qbVdBfv5c/FsToXLUgRgpFAxHWKk15mZZrZbBR036YNeOJ04+8doTLh9//dILaz//7ML7Thj7yqi7upx50pILaiT/qjUT3ohVHV9Z1ztx8vlj7ttQXHygIjmltKpXWc9JC9jcusHcPBYb+MXzjBo5F2i3Bedm4zjKwuqtLLKdK4uBpTL5pqBZr4mwKmjPxlK6PWjE6y41GxRaeFwWqBkIaArZKpbsCbGcs9rt7glPks70nePrRs6Ze9fjd0ujlsz85LP3mo707xt9t7u2USRs3DeDzThLruA2DHclh7JWY2syQitkGnqT0DJtGCO0/FjfzgpzrG6jXKsVwWVGYjeTUrRdpPTjSm/1hvlPbSPni+mmW9CAkX8e3rty+NiXMzzGeBiTE3M/nOMiGY6LkyWMx8pwOMlejLoh8b+U2q1yxV9InM6h78gVTfddcNbU5eI05tAJ2B7BOh8+t1D4yuCwIkn20fXEEQqXRVqTWMg0h5tJrOc8B75lmQ/BpxXu8MBvaOKOrc+++f1efNeiOao9mmeHnif/quXu2Np/14HRnNsK+bTgDosW9mkR+PXVP3zNuC2Hr97p8ASq6l3sTzf+mYJ3muktJFrBq20WncHcPJfbY7JZZJBTdDiDkdy8wqx3DZqL01u67GOrwIUzkCDDJeFmreU0R0yKBkh0SVGRVS70XkkGLZV9Xjex2LvaLyUF9DX64rj5yrP0ZbmCdln+8QnrxpImKoXGTT05//jvupA9h/eSC8iexs0oU3Ay8hS2VtncFumY20oC7Mhn4MNJHGQ2fZSc8NrrZBh9kJxDN3/yiVgk2ujjZFzTL02fkbmU2SoB7C3qQ1ioEkxVAJCn+9GlReI8b+53860hqMbkszSDWX8sjgJRkP67ch1WR9GLpJYO6P/lHSOG1fQfdUFUBW3ZMHrOaZPEiYfHPfiA7yv3qdNreJ2cdAk8O4vzApslE04G/S7Oqyf5liakHBol328Q7/rw6aYLPuT4oZDuFnXLPPCI8wVeLueQMbbVc9BixHWC8wN3WLAHLASeGCphJ7BSIcYyhHLBVtgTqQKWLi5AW4EuMlTASWZdyAGZBwrALRJV96osKtatHqYXNciIYPEVRJAh1aqEwoUE9mskhJajZ0Xh4qVbvjn1BMt7Hw2d/s2WZWTD5+NH20j1TRftkY49hn6Rijqjj9joF8ccK71z0c2kavzJbD5Eo0PEyyw7GBdlwMO0xCpqjG8GSCRqUiXa63SIsuSXFUat/6cgh1KUg48VIoAAShnPBpBFz0U5xPDYgOZM4AmSEh7uFUk486JczBUVsQQoCEHzJhh/VCQZ9UpYV6dbijhiwHM5mtevO4Ms5BpAalSMuGoqKmHalTUIdlTMmYfQnyFqGH3q0PPmv2sdMv3u9KiFyy9aOrr+7mnioMGkwDHuTJ8zmiIFxw2S9iTmz6ZvOk4c8/noafTtc+Ymjfot0SlL0ongE5ICK55Joi+oD9g8Nk4lOhPoBXi4bCSBdMmmmmadxYDM2zObXoledsLMm4+/ZOiSUxOLkzNWDzx/4rIpPS8SnR+cVVRU07/X+7NzYzUDOZ8K/ugDy+VCPp5NyUUbysqlXBI7Iufy6RKrEE5H1FyZlyZqeQmTpvDaWcIUkBfymzn8WJ0lkcrJRSnnhEDVkLfIyVV5Da6gqxGW58GzKoI9aPBD/JiT3zjmZFSt8OngWaeylTt3PXLXcmSJLpj/6ejl0y++8hG6QNzxC/EU3nWbfcDHBaV330t3FXX5oY+tfmtv41wI2JsEq0VfZOzHfKmBHVtEqJtWrILLjXYdt6kWSjCLLu/RbAnGG4HS5Mo4h9xCLOzIjYDqyGxSssAL1fVcLI/PhynlGztaVbhhcansIGOyZgDpT2I1yRZsBnjfUFCJhkafNuyRR9576cmtk2+dN/xEcgZde6O44dvO86Zf8/rW7a+Nfr//hDFbXr/63uE/41ysMJcxoPdhYYnAyESTr0/7VI/gxlR22sfZDND7YIi9Z0mmg/w9JcGCT88ejDoh2oZJptweM32KZyQ9bvzJ47PjdmGBqdtjMv8hg/kPoDVGNiaEX9EanBl8WUnXXw8DfrjlyYaGBnpg3759m3g6oKnPI1c+8uab8AdiYWKXt0i3WjazmtA4ntDQQknMBuA2ZEkBnvhkZ554AOTnxyHQDmSVBpZnvSb2of0HDj1hQP+h5NJRdQOGDe9fN8pS2/+4IX3qhhzX79gBg/v1OX4AWJnpR/Zb/gm64AULWiOs5uwhSsctG+pewNnwZDcXKHk6yfmgWCf2U8zgg3oxO+XjSu5jNbnpKl4VWOVDoWFVIJ5VqkWVr1L9m11BuSBW3j3JMs7dkiDIHnVaJ/UJmy+nRKjoznOiWnmLekARK5LF2qBfTibK8GBRGZYBRpp1yNwZMP/p28io7fC1Ywut3/kCrX/y6rXEc8da4l6zlv7jzjX04JrX33xm1a1D55w+ddazvZb3On/Zc2+LT+A/2EbrdzxFt+x8kZzwNP5e1r+7/Y2G4ff0XrWM/lSYv6nXfoxjRguT5enSG6CHblbNGrETxfg2msx4nf5M7K9fTqa/gS/eEG05RF9AN9FNC8jGzMtW53uEFqd3QL1brFFXWKX7Ol6l0hq2LqVsXVI1pai7NSWgu50S7a9SV75K3RJaV5/eA94o52+Ut1m2Hl0h3HIFC7rIuDjlql7ZuY6d2ugEK1gD6BrWTsgp79LNKCg/+qqB/0JVVfCsanM2/rdXjRQd/vM9Kz/94ZFuRQN79Tqm4DfXrCklnXXVynv70T+QY+k28mmvgQOSrXM3Aqu8zsrdWDK5G91iRG2Yu+lVGw3hocC+9/cjxye+Gyyvyds2I5h4Ps7s6pEPaTeyCl75MQ7AqsC0wmlVXzyTrgkg05V2c1fOSqotRo4Gi3/MnIwuuHk5DWZlJB5kVdYmWVk+cl6x3Ek5g+8asTlv6PgbbhsxiH5i9fQdk3Nzn8iM/hfPDbbRy1o7qSUhUs6/jSY2+svrZAa9h6iZl6+QEWTEAjomh45d0PxSYOcTWG2rEhQUiHTDwqjW1a1qc3VrpL3q1hyjunUTEW0Q+fL6VtWoacjUt5qJsbaFrrKRKTunZcGrIvDE2eHLeeFr9jhD4LOntx5nuHmcBe2NE90x4/hYVausbiai06WC2+WBMKNHYOSYOMtrHrmTqUURgcHDuJW2w+9TP4iML7x58LO3Dht+Q6eWc7B8kFc/J/HosXknjxl1SuOZRgUv7nk2F+svMJcAq0lf1no2QXM2yDLEkroTXhUmzLMRxtQw5YNkpsen58HLEnhZ0jxh5AQ8mDexEgY38vAAsVbiT1nYgWKYa5ARAlmr1KIDAc40+53sWReZ7ucmPuNTMk7ImLp1seGMGq1s2uIk0ymZ9dTWV1hNWoD1VGCna5LNZbayFYnitMfnwvIgj4Slr+ylxSi8cu/R1ESm+pU5cbsIhtBhVr+GmP/sQZqrX+FLCkCoLc6XpzY1kIPULUYan6PVNxwiZy3O1MPyYmuxu1mD1c2oT+4sXMozP+niZruMRcqYRslj298sV+5ilivj8YoCfr4b7UEVlgdBDFYfKSquRK0rUzc5vEG5JMo2TTCP/VW0DKuClEqsW3X/jtpm0tZ+dFDuTOa3tCvtlD83XdnK1PAaLumvsO+cQhDzj0evSg79VlUyI0VwG+Kxr1b1yZn0eVahclOlmUk3V8i0DK3HNuE/OzbNl/iN4RkeInt4zxvOIjM82PSm1xCFh2B8n8D4kG8eyxEs1uulvOYpy0DY43Wz0kJGPXvYyT5Q/VSEwdRILhsWvMCIAmnoCNLQEh9coIVtkrKG+lC2VXoyq+w72yIdKsuqApe4LMEmIU6NCUuPLk0UZjSJdZtafiYvcRTR2n2aHw8csEO/cXaqzc4wiF5kpC3sSJviCcDWUu8AAmcvQrIdNGxOLWOJMrBYEI88AH98xNZFxZPALLLwsrISP1sEFewn1h+qGAw4cUhSSz+gRtUp2TIeRirayJYVhklHmuBZ1zC5esFvTTYy+G7eRkbL5bFAgEeWLhZZ1lu9Loh/BYVxHBAY1PvYG2EjG+4SzIxqGKtgA7lMaFK29YbxZf8smQJKkYrJpogykvn1BRysdXFz3MBqdNm+CglFWDfcTpVucXtVuiVGlW5asodzi1gzD1XPy/9dFbsBc38dpXT3VWO7dVjCK/ZtBm3Z88gFnZ5szKPQnEcU58F1N8/OEmnFxjzKjeOGzA5oxeomyesL5dp5dxIdDxwKerSw3Qm12pUdFyT/mq1AV3VUnCwvzQYRH5jltTKfG9OrkBAVuuEp7jarhItUlcTaVa08YbQiMZcMTZ1Rw4r5lk7wslPzQmL7ETyAWy95A0bh8G+uXwc79SjLWdB243a8su+03sgirzOF9fXDzhrcXqVpQXuVpriHJFxcXEfMh/hCEcyHtF92msGubepPtxuuqZ06VKuQqftqHmMJouu2Y4y2N8bSVmNM+8KRghJ+xpdvqA4Gm618bUZ8V7bKtTNsOduGwf5hYwcd84MV6CLMbDt6FHCnpB4GBSsFBasyp1IfkASwWLlK9qTqy112eLNYQb3Uy8GaYWuXYuTIfNYOZ9SBVrWZ209tdamdGVraugPM9cE8Y5Y3IPq+yMj1sYNJxXKD1iOOfRGM8FqvgbHX+LDZgYm8GaMMa1eN7g2TxRhNd6qBORXAKmkeNS3nFJf3YKCumkWAgl4sMAZN66GmlFBBHU8V4hlIORT0yB3l4EjWoVFWDRL+8RuS06n/kP6dEgOvO73HR++cek1dYl3/u4tGD1k87bhjh/W9ePr8S+Q+2999ZFX/qSfUVncK5SYqTpp24fD7Hygo+aq0+8LK7nWdjl8wqt+seM+RXetGnTHl8Os8JmS1ihA/54BlqcLopLlasaxFtWLnFtWKXZmMsENEqQ/jD7NasRsaE5hzvd2Rm4c6XKmmFVc4n6V2vf5UoLCIRST/Wtlic1B51PrFm4xdOqnDMkZLzIg1n2quZzRl8CbIoELojui/WQadW8iguoUMejAZVIIMKlnrIlMGCZBBpYBdi0AG7FRAVyaEgjIuhPpAYUkpM7T/qhRaAJOjiuKk7O3v71AeEs12OeszQpENmWxmfR+qhT7CPdlSqWwhla5ZUtFK41rvpF4AViIBVqIvE1E5GITccsEwCOU+vUtGWFocNxPsNb2fYSBS9nAlBrFx2GN4JqnGr6sBVJmuKvyl4A8wQl3VROwIwMSm/obYstFSRmjZYLM9AT5j2pi5hvACGVPTVozyGjMGHmSIUHowY3SYflnvl/sJnYSE0FvYIqRKMAquSOp5YHWqEik3pvH8LCGi1SbSyUiJO8PQalJCS/rS3Q2dq2MC7Qw619mHHdZQjFiXl0xoEZ/ekx+c1PvA986CcdBBq1ZTNncFii0CuDsG33uqKX9eCTtECcarkBWO5KF0CzrjIdvuJby+wIaS1dx+3cnz2FzCFYaII1juYNZfsvJLMGKtqozLWTnmuK++3DRx2FVrp6c/fHfewPvPf/Ng0zj5mqVbN47YeOmVbx8/7anb7niSdL5qxvlzFi0SLyN3iLPGv8alfOKxA4btmLG03wB6+KPrl147/pPyihlnnDsxfScX87hD5yziNShG/W4nYaURuxfx2N0s4tUq4ulcQ4ads8+aQqSVjvGovYtRWpEKF3ZC2eSrqdwiJreYf5PdHZSKS9iuzcWjPZ3qtKBaHy4sYUd77EUoPatq6GbHxcCBtjF8e/XBP7WK39uWC9ODreN3idfhgi0PCoWway9sXYlbCpu1iFfiFhmiKM9U4haxStxioxIXe7bYUIFCYQMUO/2R3HwDFLdXlFt0lKLcLE6w4+pc03hP6bhIV97MrXeTC4t1s+ebz7vT/GblcXkHlccVRuUxzrOguIxHM/Uer0HY/Mv1x5kA5+iFyIVmjNNBQTK5P4uXzp5vqdAZz1S3nC9Y5XSMz9fM53TJzDfG5ltmzLfKWN9UKFyKOlvGVjgnt4SvMMy8oKidmceOusgt6dOOV/q0bN/k6Hi5pdVZzqnpB1xz2ZDBZlZvVikkhStaS6EcpBDlUogajS/iWo+kniOhrSVaz4xIoon6kA29Uj7mCznUq4aXpUZjQr0G3sjH3GAlprTqnX6pnAkFK9NQHFH1KOJowbAyYWS7nHYF87zpc84xhEI8mVipnd0QN5xO000gGnFQJlY6cr0giC+CnrTgPEgW56H8NudxYfYijSCl8pqsxTg8yygMlo58Ac86j+U8W3AepCPOQ/kv4DwysWWalE5qkyQ9bMHBWmqbOQ9WG8rkkws76cR2q0Nj7VWHlhnVoWmHlFfIqu4UVS8q/t2Vollmod2S0X6mPWi/dJR8bZqD7Dnkwz6YYsyh2JxDOc6hE5tDgT0T+eMc2NFV3Poebz5u/VJ1k0MF4y6x6XCLL+jlxR1MpzUI7aAMdla2+ogdlMRK3bI3+BKzQJblTfj8NrM1Khd6ZHpJFZozjIFTj8S1eFJXQcM6J8zuonkANj15uK2DWX2l4M2uSgm8WaEgFtC7Gl1GK4JIfDhYex9BjxV2NOsWGLJ5zi23dNb8M/Bxjjl3Eszs5VZS2GXu4zxDAuKVzbwHq0k0fPrkDqsSi9qrSiw2iQXmxO1qvenCnf7fVaKYcdttahVPMumQNjWLFodJ2bcYeylm8ToYe6y9sZcZYzcdFI7ecE9Ofwq8E4sif3sG2craZhqjW3AkbeYifZVNkcCe4/Phvqcr8ubtzggXowv3N2UJo3UyTq8+JJnOpnmi9ZVOJEpYW2XWBpe1TWZOx88cjBVCaL/u9v6u6XZAoLSZ+P3tEChtpi9f0ZY/kXj9IcggzHrcnda6BhFL9LomsRWmVpFg3e4ie/RCmF2hT49hVGJ0tCuMYPtI1MuYqltk+N6ZV6j93tJFqaN6mQ5KGre3nXJ7VY6WeJtJszlnekIVCzcakXB2GlcrNDtrpa02NZOeLsnO4XoIligazc7r5RArfDNq+T3YNEq0EhsquIwBBKJMFYMJiNQKmbLnFHIqSVV1Tx54xw5aS2EHwKSHhJrrn9tpNvXuCadtOG54VbRn3eghc65o1Xrq0FeDzhs28KxEpwr/o6HFGL/CmoeM86w9sTc29kvo4Fgrdh8zzpq1OuBa0/4BVy1mHDvDEKxXi8OuMbXeFVbQZOldMMBSAywa86qpym4JJpMKPFAWi4M08g0qpQQxGRbciQat8rtOw5I2Qjvq+djcFuI7ynHZpkUtRMl7osirlSDsn+KjdsIqyXTCiv7HOmFlcpgd5YhfMsFG2+SwfGlW3MHO0ki7wI5jhqj9E7LFmROyJf+BE7KkGRa1DYXJKHOcbYNg+fEW49xIuxk9tQoxOvKau7RFalPLj6fDXEEtNm8mZVz0W3nNnITRAywd4LqK7jXgUrkv9YYxg5RjnCnLpDQtbfQqK5lJJ7TchWYe89eWOgNYjw7KnK/tJvw5K+LxZ5UpmDGvVhVPV/AJtop+q1tFvwUZ7gMPmZmxMOaDCmzc1sTUtOTPdTL2NuzXqjAs3gRhcUWnzrwJYAVsy4IY0iW6s/hfDZLbCOfo0fL6FuLqKGZujLUUH/gn0egb5Rb68TMU2H6MlZ+wLliuPRpJMLFgU2AXO7XusFcZbbFsRmoQm5hjw6qIwtZWER8jFSvP/Vns2fjgseJZZ4vraHj81tvovIPkrUp+bkO8wrKTn9vAbJ0mxllbEjt/GmtBbHQBUzMfrCobSemx5+r0o8HipDmS3PR4p6fOabqGvNjZ7LFzKdgOL1jik9vp8JTbXoenvFYdntKiwxfIwQW1+VNS0CgQ6rjTUyZmadXy6clMOUTr1k8t6iL4GdkMfu3gZGBReycDi1ucDKxXQjmFHP/puXl1v+OYYGbkrc4Lxsyqv9bnBpvLAJmdtv7DciXY6ZiZFWHd65jxA3jDeqlhd6hMfjntcAexn53Dmkk1Y4VHxMeiWowk7YmUp5BVIbtAvcoNGJRSJd7VltUjF9ZpDlUXsOGt3a8VmR3s8PxzpryJbyJ+9k1lW2kBOZZU91kelXo3/Z3VO4Ubny+7ugrs/LMkfv+aAReWRS/tue5+cSuZTM7z2AxDY3eQRWTi1/uDqnSqP3TA5JiUfLA1xUKVkBDu5X37tAKIssDcsFRZzLD8APr0zqYX6C43pLu6sZ+f0XuUaEkmghI7K1WraE6jdTOWF8nqihLMnkkse6ZbYVW1bv56m5rDLgdxqnqQHRt2x0AwQUyjpIQShAC6hOc58PcNCxOOgGcXsPQ8y87gjQ8t42+LyUq5f5yz7bhrPv+GiE39rH9cfqY2fWT6MkpXrfjuzn2XZh3h/IT8WTz39FMWQsimkKIRw25Be2NbvAIMTnnF6tVXHX7YCNk6nX3RPOaDWF8p2KOVQnesZO+ws1SPDjpLJYzOUilXJ+TiweFv5t2lqoxa6vpwtGs3Znz/L7SYymyR3+o1dbmxZ36z55TlQPMeYmccYe+XQ6RwQbunHOMdnHLsblLxELjVsbYnm/lJx87V/Kxj2uq1dKliYvjPnXZspmSOeuzxO2P+v3H8kXyQXZPCehBZfxFsLGI8r2UfIuTiipJ4vhTmz0oDeFOieq9VgciAHZONM74sxN6AuNHgcEAsxIUNMtjVCQB09XwrNs3I4UFx2z5GHcZKWf2N6tsrrGpueSTPaltbxXsgga7bBX8HXZACrN30UU+EZcBfVjukJhPzmX2RslwKPJedQwO9avHcFifR/pXnZh1Ja3rLeK55Ni27MNycr8KeO7Sd+WpqHA8VFRr14Q7GHzLy0OMwjpocbUBm/4NsQUxj/Q9MMViXGM0PTBnsZGMZ1o4Mjj4W3v3hd40mWzzb2GhM4fAmEYB1dHmN9HfGRUbZHS22ZKYM3xPnMAq5HM1Z17qSUc9mYFpQzHie5jj5DqnEOpXVKY5kN554eR1+iNXhuzMd1rF5t3GUy99821nH94xk03a12XTecZfNnX3N1efMufzG6urKnj0rO/W0XHLWkmWnnbVsyeyqHj2qqrp3h/m+CON617IDRtVZYJ0mkmkbrwsO2ry2TCocT7TlxI3zPQFEJ0UiOqckBp/VIp66f9Gx8rzKEcOGxAp7uVc5rp0Pr4eWwmv5jmvXlpQX9Uhes7a4vCSZFP4N6nMb93dcn/v/dE1p13+tppQIlUcOWDZDPFGEZzQLWb5D4FW+2c0V05Z8N5uvUUJZyKl4mGIBA4EF2GqxkB1fLcSzmgU8BHMYtZVhvBOD834WNzvGmunDmAgXEpY65ncc9CegvLw9YymdQUa8u+/5HfPHnXp8sntk9BT6LH0f+zXSpufTS156rexg56JBNYsnHtd0mbzY7IFaCDplETxCrxYdoXHYvI0Kaw8pmO0hWTsVPE0D3ipL3lJzzfT8pi0Fmejg4OEVzdab94T+1HK5UCAYNwrqQdOCOgFDe9Q8PILpsTbU2/IYEVLIhqDaWYsllY1C9cEoitCsqEF2SZpu4zei6DJm5pQMKQKQhx0UxYZvmSqFEmHBI6TfO0vfPPPs8Vcvv/dVpzi56QHX9vp7v5713IX0SfqguOkdMmRjz+oDsbon1v/w6JZhP1dEyXn/H/UM/Y/3m/5/sQb6v7pHtih4j+xTsAdrHlhGjceSeAYmHwwhSbADyayRtU3kuyHtiOXasgJJ/x49n0WPWj6v0PDwsmXswzDwpl9WsT4MtmqPZt1h0YPeXz1aeIdm9dUrVuNuylA4GIBo22rLahcK72G70BSAS2yjkLYF+Suzc0Is37yslBsZf21UTWLnXbkzQErFQayVpZnjft7aHom+PScVSd3mE4Hk0Ab6HV1O93n7nvLY6hPl+aesWLp0zfHiD4Gph8Q62rTvg1fe3Ssvvozm08X3iESeMfPUSaZ/U4awXrL5wiyet0Y5BQy7yrqrqx6ju7qmJDCPkm/NHAPz8z7rftafGdll7JdnZX1zIka/wUJmNALIhkTM/k/4X/PM1PLmjsIV5EVSMY8QY0bLaF9x3+QVyy+/fTBv0M5ngk3af5gxc8ZEwegfx3xDQDiJ83TYk6qFV/D5M14hyBZX5V5B9TPbhl7Br+JLP3oFld1zyrxCKLsXb4bpaDb88198n+49diR90LT4O3Uqkm9a2HpLPth67HfdvVXnejmZ3eZaTPDe1sTce1xUvE9WNiVUQf5B+lCLGKIpahuXMfpN08X1TbOaqsUdTYNaYnccw81H57BIJhuI5zbtBoclETzgxu7k0hxqWvH6g2G0nnbwkp4Mh2Vxm2P1mj3VAzEiZeAMsct2i3gFmUEPqbampSsykKZpZv1f5OJDq8U1K4hy+N1maIPsIfisn5TuILWosNhgEPEWDoErJTh3I/mTyilmTQHy2SFzgsWQwT2Y8amUq4wWSOgYWCYshJlnpy9KeNOjekkMMJq1AGNXgd10gKZGUHXRw/NgBBuVEY9oJsFqTVY1yrIZpDc5ya6SYhKn48f+8dnrLjpz/LIxM6L0fSIpE+bPOBW2rP+bvZ++a5nXeCguvtPYZev6MYWNpcNOsTxy2phJp6TuXctsP50jH2Ic+gl8pnjjIlonJ2sw4WTXLTa3682qZzcWC5GZbNQatHvJATlCKujZ9AvLPOwhfWg1nUNuFf7N7l7huOhyJgeGtdmau0yAJ+MxxaCzFdZ28X3sYhjFBfsY4xGf0bErjNsp6GJtIE3IhFbHF63MGBwEThcSH+nU9Py5p9963aoNIwA+0Y8+eIWONgzM/647YRj2zL7PIQt5WttDnkrWvSNMWgxeMt1x0DmWh5kPDwjTjPXySA26YE0kUk52xM7phiWxJTjYVCXzeKl5PaWXn4ept1shhmPUeci4AApv//OquuxhyKM2mUcC7NJQxpHDl1V0zLn27kqpy5P0i8Y76RdkvVhEvype9SMJihVkwOGVTYvIrXSOeK105V6a9z97/wv2Lu8Cz1WxtzR7rtOTNPr0W2zYu9yP+JW1isQ+FQmsFONNi+plxe1jTQF6mA2yM52yyXe0msTJs8RPniPdaVf4+UUaB6cZF98U1zB3kOUS8IvjafkO815Kn9lAmPHpZZaGdGGBD/n0QtTjyriWs4c19oga1XmpKGtYHy0wb6QMG6fuC1TdHQDVLTSyyGXw6xU8Bclv5+KnLzJXUJZUGncmZi6qxArnyRcRx71fEM+2e7fvprtgIq89Ofn7s8mpn35wxcIPdi1f/sITcsOYYdvWrNgYsQYeu27HRyN+ruq+e+rpX02YccKEBc33cdx8tPs42no61fB0WPfhUHXFW/f7PFxrx9bGoTX73u4wnkLh2jYjwsQo76aSCrLLPoMRdiSVZWf4SOt9ErFV4X0o6NCah12fY3fYjAaxcbzckMFU1Yce28vuN40YV4OmFJzKb3jrFm6t9cy2t3FnrV1394w7M9Ygn93x0R7icWYjHlfHiKcV0GkJcNhzAOMzvxkQbjD8ppDkeVrEqk4fXvLLEb7bsDzOPSaqaxfIuxHIe7OAvNdX7/G62wB5D16QAUDeYwJ5tycbyLcA8FETuWcA+zy6l/6Z43QTnx9ancHm/4vvyfnvu7/p3/0eHO6HD7He/vGWqIvDLVt7cMveYv4b5RGgSAQDa3nx4ZX/Nnfr/DveO/dffycLi1eYLerWNlpBiXPh/q4Qo/2gok0MYeaOrQl292apUIWd4Fn/dCRU0uHCoNVdhf1NwMVraiItl7A3uiTxzCWgMvNIodHmmN3BWZRgvdV1JZZgUXyl0Um7G46+BGt13ca9r73K+uLNoeDYkQKSqwg27yotw3tf+xIVmX1TaSatJOTxBLEnHiPkmjvoT3qI/hzS6U93kNCGte7K69eL09x3PL7++krx9dX7V2zYsGL/6tt/Xbpnz9Jf77zmPnH4WjrunusvX/ffe5cJxGSWXew5o7PuPRNYQCZ0HJAZUVi9Q5F5QpGPh5UEK7YW9EdzZPZXMzA7vKzpchaYEWE26Otepk/DjZpX40xwWrUyihsrsO2IyzyWzI42BuFmVY/soDPCabfEKsOyDwDXsiEwXz+blE87d/SaBaSSvnfz8ye/9I4UFwfQ8KwzSyrF+WBOcxNl27m9Uq7Itt8GH8S3kcWe7EASZicdZ4ehqUY6EcZmMgmw8JTVlc2xjWU4ziec3vKJxiJ4YBF8mY3MR6AefQT1HqfNxvXZn1kWpyt7WcylSWYNDdanqXl45iLx2DnO7uELYbzKauXdWQmJtBRyML9m5e7GyfvWiBAcsZ46TiSb3Nz5KOZNFyG3QaerNVkcWWYviVcsxGiVfkS/oHNJOYasj44EQ2QyfI0XG7QYj1utScMfRITxfIRaMKk7TXYvBL430DzGnFa+19ssQTQOEX5fmOEiFENqfIzNITXh6zqdOMExf0K/OmnUzSuuuG+QVEfKwUfv+3DXu3shsp45oekOTmA3x/2YVz3W8NUOY4hpyW/PjC+QBR3Rb3kMwbG8s9/RalDZYT7edNgyyEeBZWJ8wu4Rv4PZ0anGraRuM74P472Zqg29p9/aUJ9rE9F95cU13x4tkGBOw8c8hU/lbWQEXXWz1Kuea2O+VBfDzfcUcxBhGvtoDa+PUQZ/+A9SQ8bSB+jWz578+t4nttuaHhRPtmy+/dRNJ1uKT6NXgbF6mN449Odhuv7D+idqyo385JH9ig44xw/xxfmGz2eZsbAR2qYUkTepTEuqWzFRVlEr9tbXzN4GeJYPcTIrt/TxEsMcCPEUdowczwQ7Ajl1mW3jb0ZGEsB3Bo5Ybhf3kK+E1BEH2Nz+dAd9m+6nL+bSn8Te99xB+q5ds3Y9wjYIYMvodYCgHqXXkX6kuukRccvX+8nfvvnuO3YPwk+gH9MZzxDO3HMHMRSbWBCgjUsVcGIuK++iJmfOEEGohL0p7UYjNY+MBfDsfha88l5gSA+JhqDKejnHCHYBKEuiDYiRgOnHHOT6RcuJl5IX6N7N9KlLLl5+7c3nLxNPj7909fbXwELiJXevTp1DFo/7/+AeIjwjdLplD8wvJlwv8KkVsDMIuk9u0CxxM7WMs3EljAkZaQEjg6JV5BHdYq3eJehWS/UujFYcX+84wLtVW3yahBGYZtsBM7RBqML+ZFeoFbFmFuywVAmmagXkHHwqi1QAn5f3Ko9YLR5RMcoS8RwRr9lTfbFSD0D1CKm8kRRGl9KdixfVKZ7Eg9NfeJ/uO3iQHiCdLjn/ta3JMyeIS8l8ckkyp6LRWx0YuWrh6Anff0op/QzCnfxnd5MCEoyPAtuKNZZ/lCsYp57FCcIiY/NpvQQWOTeHcYK5cjMniFcHteAECzvgBHMMTjC3DSfIrzkP8ZPMGQNXY5CDt4sl7783Z/aCP/zzM7pv2vQZM796c+r0Ow/KFauuOWmxX3Fffuqae18eMmBg7xdr+s00+/AvhHlk8YGEX36W4QOVDvnA28UP6fFyxXuN9Uw3CuiV8gH4LOQDZ5l8oNySD7QjRZvgJTOqbPKBWExSyYtJvLwkmlOC2EMT3m/FCqYkmREayAv28rfgBWNWsWDylKU54oG19HBTL9pIVpJVeyPj/7YKnHmo8fGmjWQZvVIcK16s0+f/t92jhH3/7gP5t+YZyX+SZ/wzvZhUkSXEA19d6WLyGH2FzoGYf67YmTQ1NYoyflGp6R0xv+lL/IKxDD+yX/oO5NpJWCikKgWuUqk8HEoApOpyVuahyUYN6MwusvMlMGmfLmQLnlJYuYaCNbvYIqBQgZ1RXMIS9pU8Ye9UdYJ9FVz8L7SAqocLsRGjX4uwFGoRabk5WFFCJbcMQb6BUOzDxz0/ZdWqW+4875z7rz3jwuFPjpy44O0rd37/tyvOXfbdPfSn+IGKroP6Dhqwq6ZPMllW/EpV+e1XpHvZo4tmzLxtnHEHy6dM50dn3cWMpbrWJMuakBbn7JDi9pp8owULKNklItiu1JVh6DKANChx6qWW3E5ywmQfmUq/CdAcuYJOPZY2iQ2H95KHF7zWlGvUfH9qOcDOpl7fZiRabjzt5zyjn7Wb9ofYRQ9MnzMj1Lx4LMjDt6InnvZmOEdj6FoIzZVZJOD14CVy7nx+Mbhuza1jBxaONg97y/RZi1nRplYsY5tpWg6YLCOX+yaQe0uOkbTkGJXf4hhvJ6XkNjKITiGv0M10tFyRrcmCGdePYXuqN8fPnDTHYJDfVYIa7GfFfnZ+xBu8loOrqEtljdT7E0R6aKfgP5hcrDRe3WtYn5BUBij+x6KTb1p0hvObwFoylww4vFcaRdfQe9eZ9/tY3oJn5wjrjf3s8ht3F7FTnPzsQQ7MMocHfR525RSmbtGnDlj4Dyv6VFnzcArQpv6qWbPYTZ+v3uvztGE34T1kN9NWj1ex8Rsf6q3GS+aG3VgJLjpMSlnjlx3xS0xFNk3FqkgxqSKOEr7hicLu9uJYl4fJ9fQHb8/OT7+2vXO1Hxa377Btg29YejZZC7M+vu/LZ9Fy8vHsZ45pfMq82+g8dq/DwFbrm8UXys18odKaL1TaizdxvW8hpSD3uTCA2eR2UK0n6PB/67uLuCymgSxacoU4MKvczBUqzVyh0porvF16kX5IL8ND+dIo8Nb/m+5D+ne5S5II3WCdFLZOGY4Rx4C3SGRxjMrv4xi7SXvp/fQjadR7xj2E/5P3kOB5uG6Wdy07wQ7mgMacy/Gu5krqIbwyJMFPp1iTehh+LE6g45MzuoNhpp9H61Iowe4K0C25iYTRwdfUJl4ujHePhlXdLrB10UWFs41COcgEPFhQsMCLMgE2VET1EMI6tlVOIuWA7d0QZ1bTPYBMDsJ/b5Cqmy9d8iexaPlNN1wmBr4nET+5k54Zpp9/tY9+FaY15NVcUvLZiodVcblvIz1GfeSqZX/2/3fdKXM7vdJSzJ4x3GS35Gx2i1GMpCXFqDTTWopBMabtHCC3NHXGLXjkIRJbQxvlisa0NJJjX7ZfACzKs+DZrIrdZeopu+3B4kLD6pMzZIvxUPCheIcFniFioYtxk7hu8TE+26AWWzKLC0npZeNvHIbmdtZjJz6+TVxDrqNLr6soIq+C2X2wpmvKuJ9vZ7adN+XAtk4LXrHF9DOsXod2/gz+Zcwevg7vZXbvSuU0Frf5TC4Bn6grzkQ7zCJpzSx2NIZWzGJbPjGaNaS19BARm8dlrAznE6NMFgHkExkPBvgiY0XSUsCe8XtBhjlczO+lHOwEpUOwZ0IoRTHTOa5sPhGjYk4ncjZx4e4f99Gu1EJiu5497fQXwdrQM9feRR+XRjVdsmJALecREYd8xLCWH2yPySMGkixQYqoTBJ/sd2TGFmnlkz3N8goYd1pxW9WCR+SlpJXG0Ahfxuv+2dDQcNuKZ08/7QpJxNXE8T386MswONqfdcTh2PcsdkeS2swfGkNLS2qzzPxZsBD5Q7chKIbaVEerwTD+kI0FxrH7x29pl3degXHs5GOgj7/MBUSEIeB/rgf/k4s9PHMMjWJ3w+LyQQyb44cI0mZEkHnoBpCfD9kbUlZ2eZJVMYlDPGSH0FFB6IhRQci4+EXzo1U3MssZ2pDHM34VQcaQB2+afb6Dnktuss2avmDFuKHpyb8ehNjxpfhnIy9e8uzChX13RqvANv6D7qNfmHdKW8fDuLH/6NwW3KEJBBQDCGS4Qzlz8NyvtOYOlQYTHpj19LlY9am4s1jD3AxrmMSaEIHBo4rKmEqyABKI+7kCIu3+lDjpL39/szFvO/ls2tyzp516zjnTELa9+il9j9LD9MNvP6TDxdDd99xz991r12Xq2aS/s3isJVeIEwnKzVyh3MwVKi24QuX3cYU9CL8ll3GFUoYrJEVnnf31S+Q7+tHdB7rPnrh+59Cx5P6q9fPu3Agm7zq6UPzguBHENUT4/7B3XNs+Ylf+X+8jVl9a3clW9T/SSCxtFsBfbAhEOPIfaCTG7IkMOA/vOK4QVgipctTgUFzPY3AcoqA04aKxJDQpzqq0ytmN2GUwadkGXqysHG1KGdiUVHkZvixHv1DGsRae9ERhlZVzqFWg1rs8oQgTTV6IBXNaObvLQvCnnJ6SOn5fWxJRKbtjyrg1OXMWpqb5TlsZQitSRd/2+Ge89dSO1INnDutdt/CUsRfPox/J5z1zxx3PqGMeW/vSM03+R5+IfOG/V7zh7NkPbqFD5PO4DZeWwl7AMzF1bZhIbztMpOZI/NaxGMZPnp45eg5AOutwIY8btjG7PUtIRQTOSHJNtIEmOj0R1ERns90W9qTddkGR+WUBbgGbF9qcHpWLz7yDzKPiwWkns+M21k2oOb6IGrctmadjevFShkmEEP/GBybcO+uMeR5yIz3PPfu0EX+aefUG+gs9CMFGPvEPea3/hYueXbaotMvHx5Pg//L7TP8779mWjnwFDzz/f7ifXl7z+ZnSib/ZT+/f8W5wVrNvXQq+NwIR4iQjI5IDGhluwZj5YWvZi8PohZmWlmAilbFYtgQSWflGxQmLCHO8HA8Vq8wZZ5NpJpaNMUqt3IBqnFoTD1/97ee0lo79jNFr0pfLn5g29RKTZTMhLmPa3kcUx+wPG7vKUZzbOAfjNxEusk4+LLzQcpJGiGJSQipHQipvNwV66GfkOkKjkBGhMGzn82O1QahFEYgxB3YExoSaZDgpNYZPnxDnsqFztooPHBmrDPaUWa+PnUIBxuT5Amtq3K6fKIxr+cxP5Jl+Io9VnOahn8jPw5f56CfyOEZHO4H2Ii+f+4mAqrtYQayQz47/tesUomrPdl0B/XhDGydwlZj4yrD+Zs+STWD/W5+TIS3PySi/+5xMK2q3IuMFsinelmfNOYf+FttTJ7XD5kfaY/NzzHMyFoRZ7DIBq9vnD/JuL0dn9TNnZFoQ4Y8byKot/729+W4e3hPuAIy0jN1E2bIjXGk8nc/p/nx2jV1+EaxsJMEAZGQP3qiJxH4OdwnFBoDMieBJDn+ZG4depNZb5DDzCsX/Wpe4VidkOqCZ6JY2bH87neG+bi4r5pyJ/AcWH4/IOicjtzwn0y5nAuDeYEoyR2U65A0eIjF6PT3M4/PDe+mVEJuzmkblb5ZLhYSwSkh1x2d3SWKJH0g15evOqj8CeA8sVtWUJXWHhd8oxhuyYA29m52TNy9mx9NVlUZDFhRsSpG68zxKyhrtxi4U86dKyrowX+zrDpLvhpFIvaCUVBpXqlmjdc2dasxTqdjWCeYRbpXx4iUnrFV4ibCA5AlHhjw48KxBk8ouvlp/aMyJpHLwWQ9tXHlx+cRjzuz38FBK8unL9Mv5jwwf9sB8+hV9SdxLjiFn1PbYXVX89Z4Dh48hi+nKYw4fePub4qrd8Tq6jm4DU7p48AknDCZX83tF2T3XOcKZRi+bIL/nWrf7kpm8BbGzS65hH6UddqEClsbBj+6oxukzO8Ftk8NCsJQtHEGp+PxGfxq8XTgls3KIzD3TtQEpGoDvfjXqE5Wok0StpPuWYpfiqzvrYjJ0Y1/bzMmkbNuL9PCa++keULi7py8ZfR1RyClN9e/dQi4lAXpv06HnyDn0NjOWlHcyzjMPT0t4zQPnbLOB6hEseEik7XmspZnd2sAMbT4rDAIr5bcbhtbvYyk3NLQ+duDQh4bWz5PHWABbgPYsz29QaWrGsLIqpuzqr4OkgpxJ71xIvKRz03N0Dvk/7b13eJRV2gf8nKdMTTItM5NJTybJpE+YSSGELjUgKl0UpVgQpIkI4ioo2BtgV+wVWXFmMtjWFeyru+/q+ioqNmRt2Hatq0KO37nvc55nZlJA3/e9ru/749u9QmaexMk597nPOXf9/armX3/ZFdsmqvV7du3a8zpUNKn1B5/HoiY+/ufUj/FOO0Mff+pCw8A0RNrQpCbMpE4GrA5FL1nIN+ZhPtw8vOLKxmsu0Mc8eoSdfmDbbBrdBjGVOmoi5RhWUY58e+fOt5/OiD4RqG8yAX9nucEdUtS7uikbqpvKiphJAZD+YK05I122IrPFqK0p55VO5QhNq1c6OSMJTynMw+O21mGxjQdQ+EuAfQiO7EC+Eaxwo+XOK7VSpjtuJyUI5W7/VUNOI749r544bduUW573yKO7H8964c7jHzt9/s7l9A36cN5zWOlkI7VQmXzfTT9ue7kqCE3uQ0hD91bJ4El5hdnzpUYlVwHOVSxZwkp4xz63o7IhIFhSoE9a3Y99I7zQpJSbJKVGNZE+3WJjuuWwVkCVEs8LGNPE7Himh4IocRWhIJyNr/l+eG/6I+MnX3TGiSdbyCa61Lpk8ab7z3/hI/qr/zUwUd54s7b8hY5FC99as2rivpGf/JN26nWSV2gr2Lnt1Bkw2cEsOhr00KrwUSzsODDzmDYcl+Ctx0kW70xwiLu0S7NmOXixAnYZBjEGQ8rkkEl2kQWyh+574UR6cO5zsE3Wuu3QaghtAfCltJOxIyNGrEh9D++TVMUEH5cO3G3ZDYMpZYMBm8hsEVFvfRDOjEEEIRBUFoJ2x51kNnmafr6x88DEjXukX8tGFeaBAQ8igy95+sRrJ880+q/vZrIBpspzxKqb7Y5oNK07wi1pcL5kR6O8eI+bnR6u0h5+aAoEOsBKtHPxgR3tcPJUV5YroWrIU2kHr06KK2CLwkkaIy5kqcRb0JOSJnvNTCqYDBTxrX/VEGv3vOfo3o/oHnkZqR0ww2bDvouqlIC5kC/YVxnRbSrTO0zGHnYbLOoxP2LMjxjzg5MH7weAfASedT5FMS9YCbgasjy8fMKAK8uYD89HR435BPX5RNl0bjxAzt1OjiPP0P23DD0w7Fb6+WP0Pfn094/z5Rop4SSdiF/M0JbPfmX4aDYP6DGH+v4As7TXCF3J9rBZICZdPixLUXoVH2RJREQ0R5zyxXo1n2ZqhzhiXAXwNQ+CPua44tbCdiT+sGCVJdCjJVWr21sgaN40Xj3uGUraoOyeFBO/p0xh3jamW8xKgRza2HbHuXSL+jq99vzbWzfRN1dWHT2cvnvE5KqVr/77G7L9Qbbnn9qwgY4M7riXTiZLzjrR0b1dnuyYs5JuVlfT3aSWzdPD9sQDbL1gnhdlzBPOnHxVn2cywBuP+FTFYiU8uXi+WNi1wCcObL3s137L3H/jnIM45yDO2eNv8yytWjWdfq1Q+vnUFdVLfjg20NJwINruO/ahrdvI+LMuLSGzTj6Z3lNyyUr6KMkbP8xOp5E/Wkd00s+UuW+8YdRJWwhb2xJ28galW/RIuCcAWlqq91PESBQhB5ViyQSlwF6+HZGZi5c8lvAdWcLNu/4VAcBzAsD9YtKwUQ/EUcbFUc7FEUSdLsbOZWbogdxSzQN9Ln+ZpxXQIkgBwZ4o+hiowbo7WjfSt1aGjh5G3x11TNVK+tbG2ib6eKtc8q9v8Tra0o86kO1nN3VvFUqh54BMtzK94DLa0ZeMiJCRasgILiVDPMkSY0NzCf1OFfqNUisGLXN7OSlMT+kx+Sl9KVJQSM/fxo6Hx75n2rR/2pmhpT/M8rZzbfphaUEJ3TeP7Nj6RzwlomlKNXqUzVAqMv7oItqJqkWkEPNu15hukMYzDUu04u3C3IKx4fhgJhdbOG7XkN+2XMBqdaISDTLvTwxCi2zQSCaDQRxVNArHOxRf1bMfO+rhxw7AS53AfjYIbqNcbz7uGodreLaquPMKi2vCTa3DRo8FRJt6wKpjlzh6E62DOW6PDXK4UTxDw8z3iIXcXXnFlfV4pfl1LrT09lzmSbRVhVqiPv9QORrxe+EZlqHqXb3lACwbjQwj7IfMVHIQ5nHs/faJuz9874KV77103trndpx/1Pblx//hxeg1nVPmtI9pDHTMnHX7w9tvePhpuot+MmN26LKp8zdfWOSYHv3jP7c+u+iea83qnAV6f+/z0XHOM/6QX3XtiRPqnFfbN5dtX3NhzG/ybL9s5wfOytBUTQvtceSpyt1oSxXRMcrXWok0UbpVSrTpeeXOcHwI+zYiguJnr6rDwNuC4j8SlXQQV1Iu9pgjEm8270828Bt1ki5sr6+gkB9Rw202xR0oKmkbMbYTnjS4k8HapgFHYEC4bUiapJtR0k0DmKSr3V2BkqoGXdJ9lym2hcmhRC18PQjFetEsZb520TsfnnteeiXjkLM7Zk55onXTpGNOGDi6qTR69JhV606af85p9AtKT5k9buoxEzobzy90HhMZ/uBZD2xddf+WIUNTlY7+EtspxwVCm+eOq3Nsyl5YetHxs1YWQOHjHVsrB0SqQdxOv3kT71UyjWTnZ4F0FI+j8w4YC7vlkwGTH4Jmtmg8YNqPAB2F6Y65nwnZHIG4KWDt+PgZ6eJRVKNhqYNgqAxDk061DA2U0ooFxHP11iJiKb53M/HSj+m+AfSnJvo+/Vy5i/yVtl93ofxhd8mlV8Jr+kM3nUduO8jGegltYPf4c+x+W8rHCv0wJhWBYk1+PRnLbZOcaMwX1s0tMWDorjVFgPELwpVejpwLEUAXL5/k6UQEkeTuEDGhCabPxc/+hZ2llLm9TlHLcgnJXXMLyb7/ookku5PuYx73d/RL+oXskP3d++69PEv96YDNeeuDb5B6+sPP9CD90EmHkmcsxKNzsGKfq5vNaVrPTlc/u7A8WVZw6jwp0xEqzz0RAd3HFgVbXwt06D7R+prVZ+trJXd9OMlYH+2vUc/2O29JurtHyH/K237d9fGeXbBfb9v5SPKHOx+8T+dTwZo7qL6O9qy6C2j7k94cG4zdqyLiEMcS8ub0V2SXMbbMMruGnAVzj1+UzQ7qbdkL5s5e2KPabtQS9r+XFi5apPcYnqCdLXmhMs4r4hd2mUeEnaneYcIryqDWcvCrXzqw2zq3MSfm2RU3OX+OmXdJCZPZw+snzZ7cFNCT0wukEsDAYHdxV7mM+PytbR5jt5vMzKmoIZ6aXGf0ruYZZ0xecsSAxvoh1UzOO7XFB++4ccOau8jXd187tvIT3xHLDob13kj1GrVR8gGqHATdseEEBu3SjKoMojfcunwQtFQxaIklBmkRvcxxhJ8NW9Ss2pVN4045Ztyomsriplz6Dn1brep+6OYJp51Fxl50crhgr7u2uTugY7BqJ5hzmfxKpBrAbetThrXGcOp+vwx5TBViQr9Zmi0cApOpifGqPwnTF0lxyYmhm0e/SI7HVzd1vNKX1M1S7uh7WvJbn2rC7+FdkoFBe43232wdSqVaaXhfa1FnTB5IWnEy/jyYzG9flb7m089K0Vjv+fS1etrOPueznDbYTHjG+KVGiDZnnjFe9iIPJlcajVWG47WaDjKsN9e7eXN9zMSJgcqsHGzYOGzipWCf5FU2on1irUWqv3heJfMGJFOWuxAvyp799/pdWdl3FHo56SAtJEoG0Rfpy/S/6PMkvOXue2++8d77blE9ZMhL+VaTreQ50kaHDf34ps7xzUOPXFHqYofVyeQkejO9hd5BryMLyPzv9+755af3963prybSkhQ1w00gF+P8gj6HWHnUqB5mZl68HuQyoI8iYiiLgvafoJXzmBr1xPFyM5NLfqgJ5WKrZ3KpbY/7Q0wuZqm4pEmXSz91xqRvyfRXfryPDH4pz27KKnqODMRQ/fgJrUMmrihz9ceMdUb3tnHLewhF4nwbl2r7tX3IDXmSlKiEMiyTItmYXeUKJwvxlU4J6WPz93GeX+hXhmaPMh/wQ1kdHg417WLvHJ4AAnVVurokX1aZYMxTrMGQLoNKHrpSQUM0SF9WgJb4+dMKl7MSnqnLSQmT1PBBkdEu4iJl7K79pnzRskL6b/o+CV+8wTuyoW6Ej1jpgcq5c0P0Z6YPUbKgor2pdlgFvYH+jb5Cr6tavDhITifRJz8JVhcVVY8l55E1nePG8RryG9R/qKvZvOukeVLMGU4WKIiRy4x8DV/pHfdps4ZaqQZj1uZsPusCJ3uX7ckr5ny+XTafhLPW4Hcqavmsm91o//nc3lzZzLlAq+RKp5g0r4zlj00zPn3HveDk3Df+/c891lHNrUdYX/+EVF/vbm2t6QgcNWHiGGfHoOgI91Wy90PiLZk0qZTuf/8D+nVFpG1gtJL43qK/DqqsLmkqemD1ObcWNrQ0Ng8V/O/m1y2l0gBprHSs9I6UCMM5X8PzIr4IT4YEeTKkMBIbFo5FosnBHLV31OBhlrp4G9zrs9JzJGwDJMdyZOGxzvg09m4SvktMm8SMM2naMcwnGheJTeKFZlXMyjqOfY9ACsWmhOHUHOuKO83s+zR3om2UCZ5MciU99SNGIpNVwP2IryRYM2jIUJSzzQmHjNlTgqigiitugl6iYe7EuEnHwH862BWb0DvL4gYzA4wNd79JFiZ8jj7cQbxM83jk2K8n/M0tsDqNMqZijtzcPhVTMffeeFx8zLjYrJvvwVTMlPZrJopUzClbjx5/P0/FzB582vy2RcvP68xxbjt/Xjivvtqe33lE59EPnjNgSLA2yFM1HQ2YqvmS0oUnzFlA1M8xVdPQoadqjpg0tpNcrJ0Xnr2kubK24vHmUNaAgZOibdPHzbzQPDm7rcjtcgQMfInTTd+ze3y4NFnay3u5YFFzVKgo4HXfRVFI5cf8EeZgJSdwvOiBwMiVbOGrPaRloAUJC0hsSjoTLNvuyeF8tYc7wb8Sa5+YNBZWe1InW23mrI3lKYZStlWmsu/Da/GACOXAmk1ydZmahmjwcqx7R76zclAHOsJe1yNuf1GQnX+40NYcvE2c+aViobUCdsAOnMCO2hFjgfLYFRuFC+02WgDQwcLj1IlrjJ0LTsDpYGeJDAssH3aBZ3z42VVnTR48LBhbfsrl5/zhilOXxaqGdEw+68r9e3/66d6zVtz/wwESL22be3TbwuVrO7MdbEmb/PU1tkDnqM6jHzq7aSgsaTHJIs72F4uy6J+2xtatiz9ARmcXvtjOTq3vmZ/wz4ULSb66s2nEnI7yirqKx6Kh7MjAIyNt08Yfu8E02T6wWKylzPer6WMpwtYy/tuzmLGh4Vh7NNnM17XZGR+u7I+3dQDX9IjDpDdHivTmDrPSFG0eytclaSprGDQEXue7k6UVtS3txlbU85vx4TzlGW8eyhYo2vo/zHRCpMwcDAX5V+Zmi98/cQoJTZ0h8p59b7YKxT+pJbwpzL6amjO21r8OjCEr6PVHiSxor61VNHXqPfPY/0DumA/VjpcKmTW4WkoUgtzz9IxobjQK8MXBqKBPjhWzbcEEXFYJAq6DEidEPLBxewGopuvx2mD6bMkvqKwGQea6uvICyKHLFrYQMqPOfIDQKa5m4isqTeVIhxLIkRYrGVlST4aYIGcazNJMrls3kPBOk8ftVq0nH0cq/vw6/XbtRvrXOsV7ZEvjNY3N4c3hZmZF3n3a8vwouYTM6+7ydQwemLuRnEVK6e007z3m923WLFOn3j2X/Q9y6LQBcaj9kE316jak1wF65wW9c2A1tMPNXqbQgryIFpSnowWBpuXyjnK8AnLh6FdtDrSRzFBtJWUfEjwIWxQEIPXu9+dMj0174m/k0rZtnXQP3UZv4EjUkKT7eS8Nu53dNWQXWcbr7WgD1gt6pRMkUSbINog7nMxRoCgwkYNJ0RyntS6t5wiOObcIaiC6lJuN15Kj4Hhz3JxlxeKKS6b2vgoFDUWvkvUiwXvmrz59zfJV59L3//0Drw2c+O7QO+689u5gd4Q85yYuGOv8X39Rh6svSx7mg3AUAg2TWjoQkQadaiYr51jSPJXsy69o5kr8CnnmjySuJ+m3o0jOQ2c/RFxj6fdPkewj6Dfb1myTLWfeQsZtWbWF1I6hr29ZuYU+eiv7Z/dY9rFE2qaOVK5jvoJTqpdi9nBS5kRZdhkrNKCzQrbD0S5rVkz9iXYJT3O0rJXXm/G6kW0LSNI6e0FzK52oNTe0NqlPLJ21uG1UTdMRPFf6GfIBvMDW4mHkP8gy6p2USJeTSBZma0aRHM8UwdXI1hkLdJfdPfCZ+9DdVBpjLuZxKs64x/2zBnVcJvfPT+San21jP7az512qYvLUdWnwb8zj7HJ7XB6moYop1TTJli3BHkPfZJdH1dzYNfmIR1HZPsI3KWw4T0s0gjcHKSJBfm2Ygp9ld65dvrDtpAWDH7LV1BeOGbN2u3rL48G6iujS48MDB/iKmiVCHlEvkt8zmSUX88JiDqZ2InKJbQ2QHoOb0w6xY8nusNbpDd4p7oUcGSo2vcxRfOSY8Ud0BmsrRoRXb9dOGz+tLRoIOJ3ukjb7ZNMFTL4kyf7Wu/rfsoaTttTfYpLkbA+JbOhjk7Khp1/q+beMK5Ak+V3WOCJYF9RujYqLyTawxO10sovJIoXoP8wnaJ3Yu1wjtUmjmKUxR1rMdl2iBMyL6VEgV4OzcXYk1oxch/CGHQlHRZMu/mYchHRjC6OCpCI2P8LsQWyKmct0TjKdEolE2HWVHMT1ccQg+NmIgWzkQ5h+LOG1vdwSyeaFfIWRZAF/UIMo4GaD5QIcWYAQDEaSufxBeQQQ+Jg1ExsYSbbxZ6MisTZnfAB7NjSSbOLPhkRiTc74aPZsSiQ5mT+bE4lNdsbnsk9fzB8sdsYnst+YFUlO4A+OjcQmOOOnst84hWvwUqhtN7xEEyDwuvLQhI0PaGOPGwaxx4vnssdHTZ89Dh5PmMgez1+I0BINkC7IGT0Bnlcp7E1h+ZRjuUfBPQehlZnvlIx3JPNnrf3/KPMj038xpM2ZN2OxaaLWPnxCWJub8W5cxjvytnbivBlLtAnqoBGdTeo4+59mnm4Sb8j78KtLtIlqO7wdn/Fuse3Jmfgp7I1GktPnzZ1RV1MZppXT58+dCa+UB6edNHdmbU1l44FJ0+bPnVFbG2rQdj0+51h4cWBc71+jAx6bN722tqoR9XazuUi7RDJLOewcKpIqpQapVRoqrZNibeFkO1dEEolppbtdsSGGalaGCfhCebuT+Yb2FMOv+KLJCr7Aw6EcD9J/lYilWlTGgQ0CkFTQODsbM2Glwexxuzs2EBzjHW5PbqiOJxU8LWyXsxvP09rmNzOptyEpA2lti/oh2zWUtEVN5qDWxl742RK1+YsJXJCeljYIJFWFXluTPWzHsgfOmC1fc4dz2Mpxs52TyPNR5wa7a2T5bM/ootkR1wZynzxsx7CRD5zROttZOT13WPE5t2Qf8dTQ1+TA8eynNucR3W8smDrbMW2w+sXIJ0+YLV/4y8uvnZMz9JEJ2qOjnhryj3NWOiqn5o1YMPXgZ7PlkY+1jww/Tl7YYHePLj4+gjlZusj0isD/LpeuEdWY2dFEuYGFZj4ECnjQgE/NRfhUrwFlkCPgUwutOaJ9pCCMAOEVAiA8YfKUgetX4IqVADR4lznL5ebg1rzsw+aq8GdCqGJ1QW8Y1TSEWDJkK328S0dTVU3TFp8wx0bM7s/e+fBNdZ+Op3pgY/cScl1PTNWfL4H8K12vdWv/YudxKZPI9UIeWdFEmdG/aYoCJS7n2Uz4EEDDF4ACLY6KnoJ58ADMg5tLhFkvngzZQKV4ABIZ+QI03QMGi+Yq1Xu8OchG3O5sN0RisToNkfDqVi6RHngP7N7RC11J4WX0ywsM3AfLtEXzTrQQc+6n79z49Dz1PKP0lfdG6vAPp3YeN73rzjFX/7IR/ZkGgRsG9XlL0urzwH2BqjyFV+UliQQvsWLPBBV7/wc1ep7+a/QaLiBVpJB+JADHsEgPMceUL7/ZuPGba6FIT/myW9Nx2mSs4T4V6wwD0uK0Oj1RZ5gq5Ib6PMLr87DU8H9domdMo1dnKBZwn0Jvxr5HahY1emrrk6+//iSdDkV6auvBzbx2Xscdhe6JOem4owVM+DlOxB3NSXFGOLAWDaqV/AJ3FFom/KL3W3PFbGAZG7BXTlfcYof9mIFKynxtc8hURwIk2hZq86ejk86aOWXj4smnr73M17Z5UkhglJ6zs+OsRVtyAahUnrRwWXQagpWmcBD8UjVU3SHnZIGBg4BdAGE9VglYy3kRYJcsF4E7CFf6AQNB8WB1VbkroTrMSJcATWZS3AXTAPhldpwksvgvEXeXotoq+Umtk2i6XU6cUQoWoYPoExPYCM7ozSc8+cZlx15/SmQQx0dwuubefqQvBZJw1FGAkkD33rhy2QaHgZQgr155YuepiJbAcWdHma7hGAUp/HcT1FOa9DrQHvizMrM8NF581QOCVr5e+rV7k7aYVHV/CqDwHE/qNm1c2ufLAqgiIePny+mfb07//FCvz79RJkSjhWoVKacagExxjIUAYsFNFX06mIMwMU2TSJbY5pIJ8rk60SzbH3aEH0vYs3QMKvYvc0ASWXbkDZAE8yxuiBSku6vhAmVh95OAGEX3yK3fyqO/oX/8tvtluVXSey+Uq7DX1BgL4bz06WNRe47F/PvG4uVjUS9QLDSfdNDn6fvkyg/IE1/+/QO6glyJWKX5WhS5seZkYPozKTjCkJ4BQxbOjQLFaN8t5tD2xVhpUgztdMUc9w/aVUqF+ZEwO9yc3xC6wTwGiQKz4lQIOmPfVyoEY3Y9DPI65crHSPmmDf/atGDD2HPO23Dzni8iYwERf739Trr32cfpJzfl5hGl4dn7n3gqi+ZgXX8QMXaKpAUZnX+aMf58Pv78FHRhEbZ8JYpw/EUw/qLU+KEttgh2HvPHALmQzcObmodbn4e3FTMnHIxE4EU5y9g0bgRRjxl7/b/Wn/nG5RcvrlsRXrKKvl5dp1Z9+ZH9wv/c8+CP5w342Vd0y9Wk3ETv4LWkdJF5G1sDr+SD6ADWzTkArcdnnIYcgssfjnl2Z3YJ5YizGfuOMTxgs8NBkQ0FTBxoYodqtme5cnsjdCFUIb7pRQcwkjTQj+7gjADavzI5AWgdWho6LwCMf73pF7YGMP65vcdPDjN+8J1g/+pTiFtsOAG289oPM4Vo2hR6Io2Zu+nBSznWmLY4E22MbgPLwEAcQx5YdpZzboN26TrObpBsEkTdguAADPMaTtSdTnUwKByr351s5rzc1kiivhnUqr7QivHOPL4+Bg1CvIM9aK6HILSzoglNQ2cNW7ZQfTME3QqboAINWseLXIIOwY10CL+ZCMEjtlQoKrorQ4enRnh8YEtZXecRD04YVrZ+4dgjD8WU8Mtf3FXVkVOHtY+d2DBvtRdl10kbBF5bh3Q7j/InI1x2OmhbrD2crOOyS4dvGxyONe5OtnLZtaKf3C+YG3Ol40OY8Fobmbg8+REQVxq2W6iOPa5pbEVq8wiE8hDhzSUQ3tyI8PY7sN16y/EwaG9TMoV4SPA3+mumFBGzWLuRnQE5zBKaluLddhgei8opKEQGWI4I3AGDhcIGiGqqycz7yJCTCA1sxWzJNgzs9G1vcCSQ40gb/ehhalHG6EQJqS3O7Zz16rdsf8PYZvYcG8kcmzltbDrAjD48dqvg4OJmrb3f4elbOtWDl/8VPXgBnSQf0PvvUts3xQ+QhXjXo1K+DQrNanT/ZVS8gzns4P6zOaMj0KUXyg4jrqjXA9JSvEGXGbo0zpTX/oeMpYXkM5r4fu1ZTFQb7pHJ0XHS1n3TwV/Ixf9NNk2jTh1/7CrEyBmVyaAes0R1bJwUBAYnPwPoPAwPRTgicY/xtLHhtMFwQmw4IdeNJOeEy7azMxo6FF/+22XHg2hWkvo170F3Yvf9ZPIKgUEH/sE/kQ+C3SweCSvTeI7GzpwDydPDufHiCZ3h3HgMr8CDXoFH4mSk7Eb0MJWzZjvT+vyjbHhtvJ3SjIYHqVq//kxyNhnDBUevPZfuUQ58u27dt/THe8hbIDp5/LHUqRww7CL1EebP+KCvHmt/nFHeTt1XYyq7ULw43FzdicnFNEAuDNeL1cBeGC6cwrlQ6gOXoxTPxpfuDHgClzmaPnDRg+pQ1pIatuqzyE42+L//QW9Epc9+cyc5gkaZqLfPpzugEZX3qmwWe3iM6AO2pO9h6JsCM8TJeYw4nnc2GnPZMEwXShWSEorZhlIF4J20YSnycSvJKl0LQZjvxADAe0O6KJHRQR/POKaHWczKHGN0PQpEeL5vwcRE+9KuN8gm7DYdX5yTKEp2GA+E+8V4DHRPRZ5LbmBSOp68RP9KJ9FvblSOfDu9RVbgxUE8ZojAYz82tSOcaXJJKjkpGg+X4erJEdGYImg8wOK32fmhhyjsOb3B8Y3/C4IP8KeB5EM5yGk+RKAEqD742aatEphOx/ccG8kcm5oam7nn2Mz62PRD77DDE3iCxEwP0Hfp6cok3kIiohaALCh6fEwz0GfJAfQkHZMmB7MyorPAAp0FWdjoo6RYYDlcPESk7XyMFuv+hAUdBYuZ08Km3CVvuszk4+nL6RL74cAlXFy8J0d7Bv2WPsYjqvgBAEMfTwqBI9usj8fGx8MWMWFFZbP2Ox4Uknwm3Q6wi7qI3j7YJeSD/oulnsmnVO8QihUKLpQSZT+0NHuYcAIaLmBAMdCUS5lwSp0YPCjkchJ0vlZB2w50vgkNzzZ+0MVc7ZzYVxGL2a8jwwlWKhbfFiOey8GVWTfxnPPOvfPlPW2z6R5azWR6leMuuu858GY8AebNvHzHE0/lUp/Yt+jTmM5jMi6G+kecU77AbCxSOaEyzElJzUm4ZUzAxRwDIZ/LOp/HbizCLYN+fAT0AchVYKRnM+PAPnEFEIos+mXTy7MBa0mAQT4w8eqPz1vxxlUXn163onHJ6muu1tjSbGEL06Ze9OM9D36/jns3V11Lb8btj7UDMW27tl6qkZqljQLRN4etThBs4mKdQsxq2p/wwSQjoDMt6TlQaKCrZVOqdWLxX4DNpxUeeaA6wKrkOLGvucmV8FVi0U7AnSgsDvIsaYitY2FpJTyOuJJ2yROAOHfc6tOZh0VpQFWwlFdtcGwmnobyiR7GEACt8JowgEc3LSctpLHl8voJMzrpC09t9ZsGj//zI/EXZp9eP2zciI6l91w273L6Nn1YGdBSMWjsouYO+V6ykJyZ5/qogBa/87U67tNVr7z5yd8u+XyRw/tx3uxSsoKUnnlfY0vsxPdXYi3Yk+oTzJ6ulaJsvyWq0Z9i/kcFyKtETcFTJv2RavBD/CAxDnAkyPGgKaaOt8gwP6vOGQ+zB/m8GQbQjepyXe6kYnW4sAQg7Ir7q3jfeFFJBcrNUc3kVlRWJeQmZeXmc7n5U3Iz+j29hxJcuVSZK0JRM4j6ZfWKxuFTW06bf9qpefbqgltv3bR1cmdBqH3wqKOvWD173Yf0O/nxcfNq66bJDmIilV7323m3PrzpdnXCmvG3PxDbsjwWMTlf8h5TSkL/tXrKkI2to0C/mO/GOYNqgMkcUDyTpdz/0EsBoIwuwOuJBIVQbXpRQCGTTgV6IVBQHC+EK9hfAj0vsQpX0ubIVUvRVcsNwA8KQURxc+jw9QIcoYf0ciX6oR8ij2T6EH3QEXVf3dv/gtoCjmFabcy/RPiuQlNiVXq2Qw9Iiq3FTotkkM8cApIFdkjw+Yo50bWry5qtlODM86qwsjaWyzZZAWytuLWEyUIyIcGr4joECGrv6fcFi0qG9ph7b5jUnl4T8vfSRcjNZIda6QxapiwEOQSGDZtmIBxqzrjFjggOCbMFPUvFIGTU0VMNlia0HJCp6eCFYDMAWxPGEZk/ZMbe3yOkTJhW8TfNffxN0Zl86D+LwK1EpQc5eGv3xWALKEeK+vyn2DwtgHBihtsW+aEU5lBYAQMdYws2hHRjCyXD0c5fQA24HjEZRkrZfTqERum77BZ6Th58MNb9T9mj48PORh+vSSCCWAERBC9vzrmJrcIApB83ofsGdiquOtSYlxBeLIx/5f5AcZa9vGwr+0vz6bvsaigbfUn7tuPIBwf20Aby30a/AczHqbN/6vNJZufYpWzEg81WONOUC8xT6KcCC1WLJGxoxNgszMYXxmq2lbd82+z65HMyJi/ioGUtZS0pIZAw23Pv0n+QsC6M0I+/sqH9WJQmj1xAAvRwqxASK7HsiCEeZxgdJuduaIMBk9AeSTgwieLIhiQKFic53dxdwn5qXXSePkSHXggbYFmmAEku/ZKN8kuSmyHIPT//vEfEDrW1wrYelvJ+nXrkEPFMXLp9bwgpbjHpsbUu1WLNMSJrViNEAHLL5LxqID760V1Ae6W8mSK+oiPQnkbyK0Wysb3xjLCnXTpXqjEilx4QxGG5YVhJG7eXPYcamQDJJR6MDthJWTQDKvfdH+jBP+7dq1htKbhc+gja0QiZy88J0xcop9M5UzkweidycJfmZFmNtLBxfDAfLUewuuUYiMvi98WuNnH8YYCFybLz6DH34DSRf8rc3Pxc0ei55FcSgrPlwA48W85lht/GHueL9inKcLY+Vt5kRgR4iH7ciDGaDzdGsz5Gvb/f1evk4adPHf2MnM92BzuBDnbgCXSljjELMNJM3xYwfYNedr+UBx17glgMQAZNCnRpcF4xRJUOpBNquQxeMUSZZeLKEVAtLgWh73pTjBlgwCTFM8aPZOQa00rT2caEVweMY93nsXGuZDI8DfGu/cCuIECKoYRNUw22KtGX5zIAihFw1m5EpAP68HIBrjg3vRmvj1EamMX8AEfcYvXiNORi4doBejG1pvG0IXpDKkqQFU36TZir9TMV9WPmy58LeN9Gj6HRWMiFm4uNhZCMhxCSBcNcEFayRyBYyIHmFYTekuImP0C4uTnagTWttzDqEjNiN0jQZRb0bgvOm3YV0LutOe28qiqd4O20OTIZSF/LGsBZ3ur89G+kXN6Zjg8dkM6V0iKEMCcN5sQWAczVhF8zpqXhtDQzV1i3ur9H2+ShZmdOmx2YKZobYTbErDpIS9RrzMobbDEJaGn3qs5jAVv6pGGr8poMdOnvPnaEOL50s/vjv6uJdO5Rj461zbRdMJw7dIbzmBt0Xklx6aWCjXaR7EUwNw+aicLJ5QFnwPLCADREGK/464xn36F7Zi+dcPsydiV9OqDyzw93P0M+P/mUkuruzZLO66Beglhz49PGg10yPEphSoEVp8DlcBgcrDhud/FhxKH40PBmU8MBF5a53Sdtm7L9KfreukvvYvfOrNa6+L10Jbl63SjaYuD13cR8ujJmc17N0ePYKuxPZIEJVsX8U0tJQVY2RO8gPIGd/Gh3QhlcKS+DK+ZHgssKP4ZRQsWIQ2TGTRJe4LFiFxtiPAgIwFm5SBficIl2t9wCDjNZAqgd8SoLmOMyBqma26LQTt5BOLsYB6OpaHOZVMTcKa+qLEOpRz6wuI8LBclk4iedpPOgLfvFrvWk47RV9Ju76Wv0usKOW26V75d3PbTjhj8pk5ZOdY4qmkKySQ29lF496tGnZo6gP40dRkaRqg1n3H/zg7pctAJmixdLlVBpky/x/EfCDmZiUN2fNBfl25lcHNGkmYcySyICbRPy2JAH0TAuAScScD6VIOcTuO85An5TE6IpAtHEnO5YYXus1JWwe6BsO5ajtzZ68jkiK/s1H5OgOUM8JpAOoihnwNeWV4RKRQts6Nm845ylxPLqJ0TqHqpdte7k+OzO5Lof6Qdu+hf5RPKQvHzerJXyHceNaI50vvo+R6itqd1bWfXTJ08vPGsxt01QRyqkOukugTBYHAXatUQBxmYLiiB3DRpTAxpTXpSmMZU6xWiaxpSlNKYSNQbjN0xIhU5EoXPo/VAm1Ox4ERQqu+uQTYKpT017utqUo9rU/Aa1ycHYa9Vv0ZwFf11NP/mcfh44vOYM6bDQ1eTKKtJOpDT9YfdWAeI4hcD3twtoY3YiJj2KZAF9CacpTxmTUnUP5SlJKU8ZKo8eEcrnxSegRzWA3aehlIAErRhLZELtsXxXwmOvbNf1J+4vRExo0KDKw2uQCeTUSA6pQ6u30l/++ELOIXVosJ1uJudUffknVCQ9x0PeYOewwk6cVJ0Cian6PYhfmhFDRFZQoIjkcXBzrbmJnZkl0sUZ7FZ6ar3/4rfScMy9Wy9z8+jZGsGBBXmuABcupzSB7HUJYc5xDjQTQMYxnh9wubEq6XBUWZ7M+r+eGfmv6fM8HX9ZD/DDzOQ8pziHr3RedZnze2ENYE8ZkP/vyqBf8rAje8qgHzKxFOuTiBVrJyNWz9I0HWKuCDOkkamzkJeKFGr7dfqRFCwPzDFLzDFQApWLZif0W0KnNdymPieWucQkRHAudMezAhx5TL9hgam539oXUnUZsx/Hdr+rPkVKr9jw9eYFG8asWXvRDbv3j13ITIH5z5O3us+4ln77aFoJzOM782i+iBerj2ENzNy0GpiYGhXx7/S6FzaZolSkG4pdfEWwJqZsQEXTM8ceA6+TGVNYdGb1BdLStCQi9QwQoxED4fotZCwd9jZRVryux4iv39R0ZhGzIurJ67SSfv69CBLfeuWV1+Xa6eOonw52V7QJv+I+KQX7iyYk4EAmLLBZXQp3LBzY2KSzVQ3b9NOV2I5hacyJmXZpcZfjZ4ABSNFVGZ0XmXRVou0i4TaZoekiyS4DfCWAAmwOUYEn+DKl9pjLlSBYYSPoFIYSd5tes1pmZvoYKq90tA2IdDTPKFYWi9LdPfSPjo5ZD11ztHaC/I3n+F/kdqp7fOtoAV19B8Rg+Nm/SNTRTBBsRCCDbJ0IlIP3OQX/QM5ug3EAOhTjWZwsAcqQJfA+8WTvQSLGx8lRj3UmMVFPq/OJqffpWMe644dYxx7J2ENluE7H9dhD9jCsTlLxpRJ53Mvy8z3k55Y8T+Tx9itwRew4apfBbY6wBXqyDLdKyMV1jJ/qkNJb+8VNO9aOPW/Sqou79/AU1S/72bVyZT1RArmP3kP2QrKK74tl6APOT98XbKy2MHQuJhWv1IN3xMe3iA9zDjoXGEjYZxRjelxxG9YvO239jBkRzXU/VqT5Drw7btmQhYtPWagY9GH//oL+5C/+ue3Ki8ilyCMGedITRCxn5v8qT4pxHqg9FwnvvvKQXBVSaVKhqn0mSnme9AoR15n5v8qT/p6x6TlSXUP7ypISiEmgH+2X5h0qIpFwW7GUIcdq9AT2Ck505WS5LAIRMYyWEiiqQ4HQnbe9V5AiiAw9PbjQf6D//KIPNnS6SN5MCoERHf1kuh79ZB9kxHtGJ/zp7q/TiE50Zdudlro0ksX0wjkYIsA09hOowJG2ZHIr/Yce2NObXQkoTl8DgiWef6aLzI8z2eYxj/5K3W4ATL+AUSsqa1Dbl68TCkK/RIAjRGcJsOQCfkw/s+erIjymPeyYzt3FPOaftZi8S4FDC0BaZMUAaYlnAU+g5sYrNGGzu9r1iqGE2eLUiWDSOyhaPUF2LwXdXtDoTWScicxm37hSf6XYLfRmZjjELW7tTG3xgT1qldDuTeE1xHRglzqSdi3tXiOJuu71JuCiLWQ3akLM2eljcy4ytB0oFPmlKtwPF6eAyeKXaiaFoptPtyeFYq6zy5Pr7nUnsWecQtHtSVEoetIoFF2FgkIRqtscRitFIgvpNHvQKaJwUpSKZRmciqTwcvrl+nRmxefTuRXF+d+LX/F/botzfJ+hzBY3s1uuALLBBichxlR8RkzFE05mcWs0CyuQsqAr0cIxwCy7RZVFl9kK1FmSFbkUzDwWCxRWzPnpUp0O9jNF9AhYLWIPxxyupEw8PiDeAO8ZK+Xgds838FihsTnDEC2TAZn1c7KAfEmfPZmaTl7UwwBlvt3CK4LmUoCLJRPoDsP4PvAyefqs8jU4d+D3rmA2eJ5UJTVJL6YzfNdkMHw3pjF8xyrCySIuiCJkZCkqZYIIRHQ8mBCbdMgZy4e+nAA/GQJhSPXCq5ATGr4FJTg7hnkZKiD8lobjZWaOGQPWecJahRZDvWuHOctXVFGDeICcKrwRgi+S2yMSfTLbkm4kDXcdmjQ805j3HJJCfGAPeX7UL6O4NkVI9qCa4hZXuV6ZfmJ6BWi4lRB9zNSsXEOzXNAxD1jIiLJeld6tYOHuMfg0EJpGQQleTCsPvuQAT7OJYDNGPnLdlLoTmsxLxEkuhhYMNVIyyYBAidKfpCtUsc7hsYkr0iyDx0NolGm14PM4aEKNkmek8f6onDtee5TpVoXUKA2S7kjXrlCGdtWna1d5ODYwGi9kwgDIgA4URiW7BwOVwJBUwgRQyZtThQ6FQYFamOYMhggCao4P8+RhF7vUAQzDHXd5QBj1/1O1SZeZoTTpHEp9KVBCl98qoTkWXYB96JB6iy7L4UKHlPsMaXJf+WW0wzxg5WYJPg8rM8VlvTnCHUnmOLOwO4kZkpoFX2omnZQ85opgakiNJKzZWOIkI+uQqHXy4tk4gBjtIvClsJM6KC9Rj+/eT76j2bL/4DO08epfyKmroQPilW/pzd+BIsgj5SZJP09M96iDpWopIg2UHpMQSzVWFQWo3VhdhJdNurEeK9YWSUb9pdls4aN6q3ss6oQSd6wJaMeFr2EjrnHGG/lyQ8tSFO32ZgEeMYh9r5GE5RZrdCUs2Vgg4nfHHVBt3exKuPOx2c/rjhcWIaEroK5KhRB6izeVct4gC2gAwBXbHe0pTagSqoAQRDqrFo9KCiiiSkMbeHxp8icf75g2/sItJybfe2vxsHvOeO277snqpX944uEJD69d/8bo2X+6/qbHSc2Fc85YdNZZ8jpyk3zylL9zbTh65NDxu+b8YfBQeuD9K/5w2ZS9lVVzTlo6LXkzV4fJvyw8i+nBMraxbOyuAoyuy0UmDlIyDpk3CyY9vhwHoCMyfbCHkyo/pVXMTqtmbGxHuyiH+0DuSMKPaTo/BFacTBf8yKTtjElweBN+ZPuxCh5rtiBuB9YxczLiZvCVVDs3QTMP1pQGeZf1OEYjSik1kTdpDfklrSXUUCeDR+5fUq5ULtVIN/VkVWMnRzLIWdWCXG9K9UKaRADx7wPQ6OCN6AU1FnZO+oIRYJjTG2e9YWBZq8C2eM53b0bcvrgFOmrKscRGsbs5OUURUyV0uHWuteChuNYyBXEIxrnqHoL56RDMczpxSPc0oJ5jerDl16+057T1iDR5qpBQnp7r0Nj29xJ3VjaC2el9igLLBgxfOYJxabBBvLB3LFbs6OtStCzRGuzlwRbNFbMAJz3PynGSRtXc0loRNQA0ueOxRfkh6y9dV9J/LNxArLeQ8WQpvY8+Tx+nSTJg26O3PG6XXx/16M4ZR9CjRtILaIw+TC8lK5657+aHruH2Laz5UHUQzuc0fT76FcEcEDGfpFccDmJKZpySzKZUgHdBjynJroSWxVu+DjUjxHbgMwqWVwjYzRnys9pVa0+InTI1uZKYSIh+993HlBKXvOSkE5bZyCtsdSrCe2vL6Ue0m/6HvkMfXrBq2VK493Bt2L0PcwFewCsOvT5AYjMgirWhKVJAsVhAcVfOJlluUALGGjOWEArnqssh9JeVB0sXL2iEIv389v/JIqZfaJVprw+7uN2z9auOrDVYAvtbcHW6uOkGG/cb51IcmsaleL2QWUW6DpRxHeiPS9G7G/rfu8oKvCkuszJoiOcaEkIN6Wp0yOzH1WYASwaBGsyK8SwNwIyZX16B0iv7rQqTYR1w5UmnQutbkeK6xOZwhbrSsA16a5Y6UbcNbgcdU27VBafwPALTNRfzC2uQOamPTEJBOBaKoqqV8UPRsTsVLO/KywGfBJo/3GFwlruK8UGFOBEdEDz3ArpYBUT0ykLthw+aW/vTpP5TCMTbhwr1k0Yw7M7BafamIvIJj/YpC/L/miyIpz9Z9JtKeKMPUfSXTWjrKQpFOpbtpZuYTlQxG2yotIV3DiIJrt42mNYsGGsKxwZHAaIr1hpBII/QbrgUG5gMGoxewa727DwLh22PhuPt0DjuTPUPArxHtIEZVc4KwIGKtbviNuyTLPRBhNLTu3UQrG/pdzQQ9iPCw7cRzuotykO1EspTe2mWInX++pXyNdOraqlZGi7dK6rFVXW/0UqY1kAYi4RjQ6PxeibPgRxRrmZ3PAxeihNPmg7oygB0FGe0755CBJlrCUNDYQhBz8w1HCGlyNVVUjqQ4zzakc63j25CcAD9v6en0NWPaA/TWdhbrIdsLtQ6e8mVSK1MTyNYa3S84JlWNWHJggPjtuWBJasX35jxUkQD1AtpX6cLNEwVBNM2F7vu2pFW2oOUpVkYK3D1FAUp43wJCDrfOnPv/NtufeG5lWQ6lZWr6ckff0//Sj/5ceAvtZGTTp876+9kwndP0tXWfzzxwj4YL21Qi9UqKV86mlnegrMolhfmZTYFwIMdzwUSbCwkMNnZWsL9nWtio+UxMaTDzodG4oTkyuWlEVga5O9ziCY1WB5qnfnmnOtv2/XkMnJ+9yvKDfT4D7+6mB549OtHr6obcP7q9ef+nZz+3pN0VeCbNzb+9xkTRX+Ottl0D/qKs1L9MDrIjDMMvLDoFJJ0RjnM3HgF/R/QvNpcXWaH0405OD3nxLn/stszAWM4WAwbdgohhmPDNMsbdDCYX64RQDDau3/5Sxo/4Xzmy7igqrAHPyGizovCod40hZ5eNIVxE7QoW9yJLGcqMtsfTaE3g6FwtbyhFzmhegsbpSJk+RNigYSMfp40aQbCscooZDSxaKY6faxOzg0PmZs0O06XNJQ7YILW0R4vL8QOhkOLt5+N2lPkrb23Zq8l6OsCVcR6PIq+ZSXwd/dcET9GqVypKJXAJMoBTCLod0xboa5Si9UiajzCELXCUBViQcP84qVQymHKOvRC9TPljMX7Qx8nfC+mybbe81U51wBbW7vklcqkBkBxzEQCx1UNx+qi0NKE1T+N6TjgvlSlD9SwoEmJUXfkHwjDkhdCO7HDY8VD2+Pok4IA0L9LXc6yclN/11xvWoKWWIzMpXfGEoV9mAo9KArIzM++JK+T3V/Jb/aUAre7ZxtrPgCqEBD1u0hnLQgyE4Gte5ivew2TQQRlkA+JqXxJrHs+Lwczs4f15lILIhkzBQF6l3gUgI1zmSBsSlEQBREs6ofxIDPOlgb9ncFWnob3vVOf/mk67jfxGXLIxPlWXtIpyvMF4re8PmUz/f+8E//XvBNa2v5yC+0659ByBZgzpmhFGYqWEnJa+Bsq65huxeozRI+aVso0zerwK3zL/Rbp//Zt13NVlMPvPmOh5I29zyAtY/9xz7fXDqxk61eWj+tXpuJmHMA3o3B7c3bjFsw1QgRoZ+JJm1+GHm2XYisCfKZYoztejsgUZfm/ZQdmSKnfPfhnXQjLeugGIYfbigcf1fVFnpzai6OE/8J1hvkvFomTYnKXFqqi3C4LBLfdpv1dAQvz53trTv5uXVcgWe2JYNuEEyu8nS5rXVe95ux9TMGl1CVbfAD/EHdWMfPCURNGY8KVzeG83FCMFJd55Q34LyKGIugI2sr0AEF/SjXqvW+ZiXcMvZc+se/xT+96ZKel+z55pvbojSfsmHlJH1d3yTx6IX2Y6dLGsf8ZH49/c+cjLZXymD793zHMT7mC6RKX223CpgZCYTfoEXNOkhZznju7LmnhEZRDCM3Eyw+8YM569RJ/qFyoEqxdKXkpWe48kJepCq5xG2bs4iA2KW6GGniC0XUvxlByUIIOvVLJkBd3TNwYT+nv1h9z36YFZ9iAcdJy8onLL5o8Nnnsz9/RX+mLZX04I/smnr3m6ZUrO14oq2Me9bf0C/pRHz4I1karPzJb2SP5mXeHXV9QhsM7vzQsf/Dy5gyoupDiTqMoKC7ncNZoAiANJEfWKSnakJJtIJludZESEqZTjrnq6ctXnTLl3KPmlN0L9vDBX8Lymwdrn7jzqKKD5eNnqdOEPcw5sOdLPuZhRHpxYPvDEBAlCO8II/mt/NU4mn5Yq/8Ehm9vLhD1GrR9uWx+YrIpkeoAq6OXdIrCQI/gh5Obl0bn7tareksFnQHUPufngrcKYYBSV1yRsVDpt8ixv8BJ37Ld2pfh21PW3/Th33O5P8rkXi41Qr1OD8mXhmP1UQDrilVFkArGz+sWi3h7QI2Z878UQTqE+NohPxDXgL+n5vcxjfc7335Wb2dflm8frOPhvuYMa2vOZWtbJFUx27fX2hLgeKn+7So/lHCe+qhOWN/PKt3WsdBDiovfHrN3Qyspztt5ah/7If/o+0O50aei+Y8syK3ZfmRqjTgHUQ3Txh5rBJE8iND9nm3Re8T9yPm5nkPue8/0GjWMG/upjD10piSQTnhBWNJlyoYKALjMsSIsBwgKeu4pXr/SlatIwp9iTlZ2qjqsKivbUqfXT2TsOOiD7t3C1iuhna5qqYox0dH2XW8dyywhw/Y25ce+/Ensu2L7yi0VS7XSCoEpKArLkk4tC+buZCZNYThWHYV7HXty6vRKsy4PTjnAp5yVqjmrtGeJQoCScLxSMAgEPHD9YJhFc+p4oBltcYecuVGBJrrkdvRh2qWXpGHLnDK897yhHnWRWqQtlqxwinPoQvAZbDgvZob00/Ft14uTRAPkw8qS7seguVBb/N3B9VAZhvWj65WVahX77BbR562qqc827++/s7vnx98ov0dHQ1ugWiWausEeBWyXKNNXm9DYsHQJt0fhCLSbOEt5rCGaVDw2LKw09dTYJqOVX45A72JuqtMDWix5VQs3I1JKC4UusIhhZsUPAEcS7NNgDTpQdoHugIzepSpE7kJ6sKzf2Dov8TqR2EkV3Us/mX7k5osuuHt4H9FgModUaou7v3jvpbf2fDNn7typqqvHmv78ElaKaYgz8z7TZ5vQ6EZDNnVRTE+jatcDA7RNFJ32UO2wQQ3OZePhyCFAGQtl75VY2oLhYZ130cyrXeqEZQ/3jDnAZFNeDbJxZ8iGTz4kEG8PJZobSfnl3+/fv//6i56eP++CIX1IZQwpV6voKVtue+DBv1w0tE05s4dQDtiAAJznbhtojcAwzZfW90AxBcPJyTwZZ57OxtIHrmnBb8c1RfoJOy/9gKCaHRy8HOy9y3Jidr4n6CmA5kGdNqI8pCOgDh/YvpLkPXTnicdkYKEe/JfnLnI6Pe2Bx/IAy5jWCEzUtLkJVNRDz03tOTfz/+HcvH3MLR1RdbAxt3Rs1e4b2dRG040wNbQ3a7TTEKciz8D3s0T1Fv2YLwz3USLHh73bLqhQDgCyANA/oy/ucRqt8Tk+3sAmYeBddsdVbDVPde9biZY+1h5d/LuZh/Nn+me5KbUkRi9/9yjo438ntSioczamc39FvIs86ci0sZP0sf+OAXcBYEp6Xz/715455oz2frKQPrp3LzknNWCjy797H3T4v5MmasHB6UZs7yFitDlRDpZlYeeFDMBUsawoHqe2CMS8kX4Cc4sxZ3tcU8RGHwDZAZ5bZCoAL8jZ9FtSQG8wxHkbyaP7yGVCpBO+kQegIF/5pnsHR0SA8bBjSz0Oe3bTx0N6jUc9zHiiJNgS5UAIUW8QZGYjhc//jf5LCOrzv79ISlBUf9xD7gAB0Tl76FQDA2EQuUYeKK8DCw9a/wcRSq756ivpf/WzSeQ2Za18NvuZH7hU4kTdD19QDCwqgOE/maQMILe98w7/ffPEw/++iYrfz1M2kavZWrIrVuLg7GZFsqoGDDSkRK16v7CCJlirGygKyvK8cyKvDiujPyr3TSemRfR9HK/+eSb4PNh9SUl8njkck3fHVfZ5UAWqynqztsfdVuY3KXkjiok9O7ya/feBZ71/ot/z+Q/+VSNJaR/7vEqYT1I+zKf5W/HTBg8tJ7acAWcd6N7r20V/5vuMjU2ZgHN1AHKkjtLIJxzLieggmyYz8mGKYlUeBOfTB+dfxUSXPV0UlT1FQrZ750QzhOM1ZJQah4mdxKO4lMCI5IKKmTkgNZ9dTOVJCMC+cKQmCn1k5vaYHSzDlAijmZL8YmQRsTmaUhJNCVYGuSrLUK7Z0khJgD9y4eqQ2L9nBELs0UzpfzGEfXdE9FVIrQWRZpMb5fOU79mZxzlsFKRpEt8Q6Ac6k63QkSu+6XA+adf/7Cs3XHDV1eevv0p+cfMtWzZtuu02tNWX/vqJyUlqkBM1yE5U9vlxb1k0Cp/uYR/kKIhExGsSq9D/UgnvgWamedLN37mxZCBZjO+A4579+bZ+LJH010unH3PUjJmTjpop106bctT0GZOOmSHXTZsMr46eccnRx0yZNGHGtCN7fIe9Kx3LZPIPtiZlEmo4tB3j3GNKBNURW9NVXPIW4rcS8yQy51X6H2J9VbbkkfhyuoPuWM7Pjd6fxS5u8XGpzyLwWW1W0ka8ZBKx0J9eJXPoHS+TCWTCcnpUHj0GPmsY86/Ha6vYjr5ISlRIHPsPCYMhMM/shArouM9nGsxDcYWRpNmEz3xGI3UuTygynWI2YiIg66WN7F8fEE8FEH9e4sxIkE4MyHC/YVGKVMJGWtYed5lThkNVSxs7rFsNPCy2+7xlZq+f/evjuGDlFaFhy1R5yXlB0vxpYsvsEWcMPfN6H1lLV8gyOYbubCLkknOXPLCfvh4iL231VUbu/4TYJ71bVH7RuvvLGkq2ftr63cDuD7B3Ut6lzcJzI096UnhBtiymTybOLWbJyY1EIqIOnj/C1xLnlAEkmQAk1KGHHKiZNJMBJmPCIK5Jh7Fi2pbHYTjysM9CoNbqfZjPfP3luwYLs3dX3J77sxazQYOP3QttLDZ7rldv8HFAg48AITRoztnRH3QFXcQVLSBR9qItqLD/+10OOe/Pd5BLPr/xro/uUE33XnyrSVU/uOqq7g/lEvb1EC0gH3dPIRvOoDby42l0hcCXqlar2W4LpfX+iR6VpGLluxm/iXtnAMC+sv/kwFvS/wP23c4iAAEAAAABGds+bUeDXw889QAfCAAAAAAAyUIXoAAAAADV+7Do/3D+GgoGCCAAAQAIAAIAAAAAAAB42mNgZGDgCPzbwMDAxfq/4H8PFxsDUAQZMB4DAH4uBbkAAAB42l1VbYhUVRh+5t5zzr2uyiQGCbmVJKxpwxZMy7IOLeJgoLHgEA4rbaGmLf5Q12UFIS1ri/mxUbaQV9hgMRbLqEnUBSsWK8w/ffmrDxGhZNsfggWxFOZOz3Pm3o0ceHjvOed9z3nf533OmeAGyuAvvAbk/gaCh7E3fBuHzQzWmC14yv2Ikj2DnsDicDBKO4ousxIlrQVFlIL96ApWM+ZBLObcBmKQ2JhiBfEsUSaKqe2Wv2K1R4ZwHM5dxjb7OGDvRd38gAE7TruOWIO6fYnj71EPhoXGPruI85tQj1aj7grEIgyYi01rDdfa0Wt2oc1OYcL8DkS93HcJYKaIXWjnPjXmvJD2EbMQcXh/4x8zlltrjqFivkMSzqBKWzWHUA3+QBvPcmYOSbAZI8HmxrCZ9N9JdACJ5s1Z758oJhxk/CXaJ1Hg2lumArgjWGqeQ4u+w3MoBnNoNe25j2l7VL+4p60RGjvmssBVyN2H5Jwc+2/ml3ujcVVznqcUUYmx5Mtz1cRJWfI0QdwWJxnExzyeZ76qN4X7CxVf96H/g/Wq5uu+xgyqK0OlmYffh3n4PZSH4jchCF5m/eyReIp2YiDaw3n2Rxxl/RAn83YMp8323Hrai1lN7j72YD11sJJ1MjbVwW1pITqGfPRO00facYqZZU7v0195/UQrTSn+W/ZgndcNzA30ylfQOv3z0pN05rlivDTluaWWtKeroSod2Zv0q6E/fhT1+AC/X+PaL/TVWS0oxytoFzdmPSefsM4r1MQJJNTtcvHiTvD8Tmy0Bzl30OsnMdPcYzfHcaqnP72emlosUkvSUTu/qSPbxbVbGIr6yOkLjNnJtSHOnaL/dWxwtOYIz8j6OAej88Nb1OUl9dTreFpadhcYe8Hr2CgPn0/F38MkLlM35+FsK8cxtdZJbu6mzwj3vsrxuxz/jMQtJz+fYWm8iuM647/huBOt7j30u6dR8/eTNdn9jDvOvVLbYjEQnyEfW8n3Q6j6875Mrc5lv5WzGccOsxYfmO2YoTYmibPRK2iLymhzszzzHp75ETk6xRrUM93F3aiTi8R0oxB+CmNHOT9Kvi4z71XN/vseTKlXvjd18zr9f+Uek/Q/yjyfIDc7uD7BGrfQfkFORnje5/T/jTUpt0zz0kiBOUjTfelbQ8tYcdUSLWGuIQrkqt8OY0j6UQ9p6zbPvIr03cPcUiuNS6fSiv2KPo45PIO8tCaNSifuVdqTzCXdK7rGmAV8m4ZT7VN/mdU7oTtO/e/zGnwMY+bofzY7K+OFPh3ksMPfD2pi3qa9vNNK99Ke7on0c6fNctQ9lBZ1X7xms/68Sb9pSkLvtN7Ku4D4AX6nNjhHUIO5rSkMMc4/r0HO638oRfg1eqLj6MlNYJkQdKAUbsMyj5v8z7qCPvci9io2oK9H7N/fbnsaeUNt/AvvTZCUAAAAACwALAAsACwAeAC0AZgCKALIA1gDeAOiA8wD9gQ4BF4EfASqBMQFEgU+BZgGBgZeBrYHKAdMB84IQgiECMQI2Aj6CQ4JggouCnQK2gskC2ILngvUDEAMeAyWDMYM/A0iDYwN1A4kDmgOyg8iD5YPxhAEEEAQ3hESEUIRcBGgEboR7hIMEigSUBLAEygTbBPIFC4UfhVEFYQVuhYEFkAWXBbKFxIXYBfGGCgYYhjQGSwZdhmiGkwafhq8GuobUhtuG9ocGBwYHIQc6h1MHYoeKh5OHlwfBh8wH3YfnB/wIFYg1iEqIawh+iJKIqAjFiNMI6YkCiR4JPolTCWqJh4mpicoJ7IoWCkIKYwqBCp8Kv4rkCvGLCAsgizyLXYt1C48Lr4vOC+4MF4wuDEMMXgyGDJSMnwy1jMyM640TjTUNVQ1xDYANjw2gjbINvQ3QDd8N8o4QDimON45PDmwOc46KDpYOuw7TjucO948ODyuPOw9Mj1+PeQ+Cj5iPp4+5D9UP5xAFkBKQLZBIEFYQahB0kIWQmBCkELMQ0RDeEO4RABEOESKRNpFLkVwRcxGPkaURwRHiEfsSBJIbEjSSRhJjEnQSkhKfEq6SzhLcEu+S+hMTkySTMJNAE12TahN5k4sTmROsk7+T05Pjk/qUFRQqlEiUbZSMFJqUspTOFNuU8hUElRwVMxVMFVyVchWQlaAVxZXelfaWDxYslkeWWpZrFocWoBa9FtuXABcml1YXg5eZF7MXypfdl/SYBZglmD+YYpiFmKSYwpj/GTiZZ5mImaCZthnFGdIZ8Jn+GguaYpqOGrAa0prrmwObGxs5G0UbURtim3Obi5ukG7wb1Jv8HCScOBxMHF4cb5yFnJ0crxzAHNOc55z5nQudJh1AHWYdjB2sHcud2h3onfSeAp4WniuePZ5QnmYeeZ6OnqMevZ7Xnume+p8dnz8fZZ+In5AfsJ/RH+wgBKAlIDmgTyBlIHigjCCioLeg1iD6IQGhISFMoWyhliGrIdch86IYIjIiS6JyIpkiuqLbowWjMKNGo1ujcKOFI6KjwKPhJAIkGaQspFEkc6SapMEk0qTkpQGlICU2JU0lbKWLpZcloyXGpemmBSYgpjgmTiZgJnEmcSZxJnEmcSZxJnEmcSZxJnEmcSZxJnSmeCZ7poGmh6aRppumpSa2Jsam1qbiJvkm+ScCpwwnDCcsJ06nVoAAAABAAABxgBuAAgAAAAAAAIAAQACABYAAAEAAXAAAAAAeNqdk79uE0EQxr/zBTAQUqRAUURxJQU5zkEIFCoTAkKKSJEIGoTk2I5zcI6T8xkUakoeI00knoCagj8tQqLhEXgGfju7NpgoBWg1c9/On29nZvckzeuHYkUz5yWViMcR9jLgmup6E3CsVG8DntEVvQ/4jBb0LeCzWtTPgM/pKKoHXNfV6F3AF3U7+hrwrJ7WZgO+BN4NeE5btQ8Bf9TleCHgT8riNODPmoufBfxFF+LC4++xFuOXuqdcPaRCXqurjhKkxb4FamugfR3Sp4vaxZroGFlWpgayFFBD17A+IHpAXAFPolVwSbbTLeMfaI/ZbGDrghJtYt/TUHfxFJzawOtY76CbeFdB4+hx7NIk+iRPMvE9xlNi8WcmE+Z/Y8tNuzlU1kOHiD7fUi+wDbRzomeX6Sboog75bpu1RPeMrbK6/JRzO61tFjdtv3+ukU17SEyOdzy3IR000W2rsmNZp83Y3VOFdUXXWa9spfins9shNzXUJ/J/8yp63beuujbzHrF+/qlx9pnOunXTtU58/6M/+qiIc5NqwtMizu+mc9wL+/telzkhO7Xu31yp1dzDW0xxDrGs6yFzXNMjbn7NXrTjfIJ3mxt251ThBWXagm3EbsNuJmHdRDL0CpKhb5A//j9uWX87VDHi3Mpq8JXfn/Bu6gBvjse9i+IXDnayqQB42m3VZZRWRQDG8ecZYBeW7k4FA5T39r0GeFNAwEAUAZUVll0Ed6kVwe5uxe4OVFBBsRXs7gIV7O7GOPs+x0/OOXP+986H+Z35MgODprGpDjPxP4OP/zsNm6EZmqMFKlCJlmiFKrRGG7RFO7RHB3REJ3RGF3RFN3RHD/REL/RGH/RFP/THAAzEIGyGzTEYQ7AFtsRW2BpDMQzbYFsMRwkWbDhw4cFHgBARtsP22AE7YgRGYifESJAiQ44CO2MURmMMdsFYjMN47IrdsDv2wATsiYnYC3tjEvbBZEzBVOyL/bA/pqGazXEcjsdSnIFTcRNb4BScjvW4GcvwBA7AWZiBZ1CDJ/E0nsPzeBEvoRav4zXU4WQciNmYgyvRgHmYi/lYgIOxCItxKA7DkTgKR2M1K1iJTfiLLdkKG7CRVWyNO7CcbdgW97Ed27MDO+JNrMNb7MTO7MKu7Mbu7MGe7MXe7MO+7Mf+HMCBHMTNuDkHcwi34JbciltzKIdxG27L4SzRok2HLj36DBgy4nbcnjtwR47gSO7EmAlTZsxZcGeO4miO4S4cy3Ecz125G3fnHpzAPTmRe3FvTuI+nMwpnMp9uR/35zRW8wBO5wzWcCZrWcdZPJCzOYcHsZ4NnMt5nM8FXMhGHsxFPISLuYSH8jAeziN4JI/i0TyGx/I4Hs8TeCJP4sk8hafyNJ7OM3gmz+LZPIfn8jyez6W8gBfyIl7MS3gpL+PlvIJX8ipezWt4La/j9byBN/Im3sxbeCuX8Tbezju4nCt4J+/i3VzJVbyH93I17+P9fIAP8iE+zEf4KB/jGq7l43yCT/IpPs1n+Cyf4/N8gS/yJb7MV/gqX+PrfINv8i2+zXf4LtdxPd/j+/yAG7iRH/IjfsxP+Ck/4+f8gl/yK37Nb/gtv+P3/IE/8if+zF/4K3/j7/yDf3IT/+LfBobGmGamuWlhKkylaWlamSrT2rQxbU070950MB1NJ9PZdDFdTTfT3fQwPU0v09v0MX1NP6zAnViJVViDu3A31uJE3GL640E8ZAaYgTjNDKqonbN4bp1V2Vg/q1QqZeXGJTWrjBtqG+prZldWq7laU27F+OrpjQtrKurLmVDOgnIml7OkKVWTZzQsrJ4+vaZ+YdWS/z6bHLdUUi3VVh3VVT3VVwM1VCM1VhM1VTM1V4tyLfmWfEu+Jd+Sb8m35FvyLfmWfEu+Jd+Sb8m35Fvybfm2fFu+Ld+Wb8u35dvybfm2fFu+Ld+Wb8u35dvyHfmOfEe+I9+R78h35DvyHfmOfEe+I9+R78h35DvyXfmufFe+K9+V78p35bvyXfmufFe+K9+V78p35bvyPfmefE++J9+T78n35HvyPfmefE++J9+T78n35Hvyffm+fF++L9+X78v35fvyffm+fF++L9+X78v35fvyA/mB/EB+ID+QH8gP5AfyA/mB/EB+ID+QH8gP5AfyQ/mh/FB+KD+UH8oP5YdyQ7mh3FBuKDeUG8oN5UZyI7mR3EhuJDeSG8mNdO5IfiQ/kh/Jj+RH8iP5kXzds24sP5Yfy4/lx/Jj+bH8WH4sP5Yfy4/lx/Jj+bH8RH4iP5GfyE/kJ/IT+Yn8RH4iP5GfyE/kJ/IT+Yn8VH4qP5Wfyk/lp/JT+an8VH4qP5Wfyk/lp/JT+an8TH4mP5Ofyc/kZ/Iz+Zn8TH4mP5Ofyc/kZ/Iz+Zn8XH4uP5efy8/l5/Jz+bn8XH4uP5efy8/l5/Jz+bn8Qn4hv5BfyC/kF/IL+YX8Qn4hv5BfyC/kF/IL+UWTb5fK7/6/tVRbdVRX9VRfDdRQjdS4XEv7WlbVzFm1jfNrZlQvqCsv2aK9onneOL+h6ccr0n8ATfJAqAB42tvB+L91A2Mvg/cGjoCIjYyMfZEb3di0IxQ3CER6bxAJAjIaImU3sGnHRDBsYFZw3cCs7bKBTcF1E/N/Jm0whxXIYYuAcliAHFY1CIdxAztUPYeC6y4G9vr/DEzaG5ndyoAinCARDkZVuEjkBhFtAOsLKKcAAAAAAVnWAGkAAA==) format(\'woff\');font-weight:700;font-style:normal}.weight-regular{font-family:\"Open Sans\",Arial,sans-serif;font-weight:400}.weight-medium{font-family:\"Open Sans\",Arial,sans-serif;font-weight:600}.weight-bold{font-family:\"Open Sans\",Arial,sans-serif;font-weight:700}/*! normalize.css v3.0.1 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box}:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{position:relative;background:#fff;font-size:1.3rem;line-height:1.428571429;color:#282828;background-color:#e6e6e6;font-family:\"Open Sans\",Arial,sans-serif;font-weight:400;overflow-y:hidden}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;outline:0;border-radius:0;box-shadow:none}a{color:#36ba53;text-decoration:underline;outline:0}a:hover{color:#257f39;text-decoration:underline}figure{margin:0}img{vertical-align:middle;max-width:100%}form{margin:0}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:1.57142857;font-size:21px;line-height:inherit;border:0}label{display:inline-block}input[type=search]{box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=checkbox]:focus,input[type=file]:focus,input[type=radio]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.form-control{display:block;width:100%;height:40px;padding:6px 15px 4px;font-size:14px;line-height:22px;color:#333;background:#fff;border:1px solid #e6e6e6;box-shadow:inset 0 3px 3px rgba(0,0,0,.04)}.form-control:focus{border-color:#8c8c8c;outline:0}.form-control::-moz-placeholder{color:#777;opacity:1}.form-control:-ms-input-placeholder{color:#777}.form-control::-webkit-input-placeholder{color:#777}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#fff;opacity:1}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{line-height:22px}.form-group{margin:23px 0 0}.form-group:first-child{margin-top:0}fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.form-ui{position:relative;display:inline-block;vertical-align:top;margin:0;line-height:20px;font-weight:400;cursor:pointer}.change-position_input,.form-ui-control,.menu-filter_input{position:absolute;top:-9999px;left:-9999px;width:0;height:0;overflow:hidden;clip:rect(0,0,0,0);outline:0 none}.form-ui-txt{position:relative;display:inline-block;vertical-align:top;padding:2px 0 0 30px}.form-ui-txt:before{content:\'\';position:absolute;top:0;left:0;width:22px;height:22px}.form-ui-txt:after{content:\'\';position:absolute}input[type=radio]+.form-ui .form-ui-txt:before{border:1px solid #cfcfcf;border-radius:50%;background:#fff}input[type=radio]+.form-ui .form-ui-txt:after{top:7px;left:7px;width:8px;height:8px;border-radius:50%}input[type=radio]:checked+.form-ui .form-ui-txt:after{background:#36ba53}input[type=radio]:disabled+.form-ui .form-ui-txt:before{background:#f2f2f2;opacity:.6}input[type=radio]:disabled+.form-ui .form-ui-txt:after{opacity:.6}input[type=checkbox]+.form-ui .form-ui-txt:before{border:1px solid #cfcfcf;background:#fff}input[type=checkbox]+.form-ui .form-ui-txt:after{top:7px;left:5px;width:13px;height:6px;border-bottom:2px solid transparent;border-left:2px solid transparent;-ms-transform:rotate(-45deg);transform:rotate(-45deg)}input[type=checkbox]:checked+.form-ui .form-ui-txt:before{border:1px solid #36ba53;background:#36ba53}input[type=checkbox]:checked+.form-ui .form-ui-txt:after{border-bottom-color:#fff;border-left-color:#fff}input[type=checkbox]:disabled+.form-ui .form-ui-txt:before{opacity:.6}input[type=checkbox]:disabled+.form-ui .form-ui-txt:after{opacity:.6}.btn{display:inline-block;margin-bottom:0;padding:10px 20px;font-size:13px;line-height:18px;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:hover{color:#000;text-decoration:none}.btn.active,.btn:active{outline:0}.btn:focus{outline:0;box-shadow:inset 0 0 0 1px #fff}.btn.disabled,.btn[disabled]{cursor:default;box-shadow:none;opacity:.5;pointer-events:none}.btn-default{border-color:#58595b;background:#58595b;color:#fff}.btn-default:hover{border-color:#717275;background:#717275;color:#fff}.btn-default.active,.btn-default:active{border-color:#717275;background:#717275}.btn-default.disabled,.btn-default[disabled]{border-color:#58595b;background:#58595b}.btn-primary{border-color:#36ba53;background:#36ba53;color:#fff}.btn-primary:hover{border-color:#30a64a;background:#30a64a;color:#fff}.btn-primary.active,.btn-primary:active{border-color:#30a64a;background:#30a64a}.btn-primary.disabled,.btn-primary[disabled]{border-color:#36ba53;background:#36ba53}@media (max-width:320px){.btn-another-el{font-size:9px;padding-left:0;padding-right:0;background-color:transparent;border:0;color:#000}.btn-another-el:hover{border-color:transparent;background:0 0;color:#000}}.btn-cancel{border-color:#f3523d;background:#f3523d;color:#fff}.btn-cancel:hover{border-color:#ee290f;background:#ee290f;color:#fff}.btn-cancel.active,.btn-cancel:active{border-color:#ee290f;background:#ee290f}.btn-cancel.disabled,.btn-cancel[disabled]{border-color:#f3523d;background:#f3523d}.btn-lg{font-size:20px;padding:14px 24px 12px}.btn-sm{font-size:16px;padding-top:14px;padding-bottom:14px}.btn-xs{font-size:14px;padding-top:12px;padding-bottom:12px}.btn-block{display:block;width:100%;padding-left:0;padding-right:0}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.btn-upload{position:relative;overflow:hidden}.btn-upload input[type=file]{position:absolute;top:0;right:0;margin:0;font-size:600%;line-height:600%;width:auto;height:auto;opacity:0;cursor:pointer}.close{position:absolute;top:10px;right:10px;display:inline-block;vertical-align:top;width:1em;font-size:12px;line-height:1;background:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%0A%3Cline%20fill%3D%22none%22%20stroke%3D%22%23000000%22%20stroke-width%3D%2220%22%20x1%3D%225%22%20y1%3D%225%22%20x2%3D%2295%22%20y2%3D%2295%22%2F%3E%0A%3Cline%20fill%3D%22none%22%20stroke%3D%22%23000000%22%20stroke-width%3D%2220%22%20x1%3D%2295%22%20y1%3D%225%22%20x2%3D%225%22%20y2%3D%2295%22%2F%3E%0A%3C%2Fsvg%3E%0A) no-repeat 0 0/cover;opacity:.2;cursor:pointer}.close:before{content:\"\\00a0\"}.close:hover{opacity:.5}@media (max-width:320px){.close{font-size:15px;top:18px;right:14px}}.logo{display:inline-block;vertical-align:top;width:1em;line-height:1;background:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2035%2036%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard-Copy-5%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-164.000000%2C%20-219.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-3%22%20transform%3D%22translate(40.000000%2C%20190.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate(124.500000%2C%2029.414062)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-9%22%20transform%3D%22translate(0.453656%2C%200.226828)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-8%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-7%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.7157492%2C0%20C11.4909195%2C0%205.18846877%2C1.26558351%205.12620114e-06%2C4.05122239%20C5.12620114e-06%2C10.0674495%20-0.0716136324%2C25.0556925%2016.7157492%2C35.2966798%20C33.503483%2C25.0556925%2033.4322354%2C10.0674495%2033.4322354%2C4.05122239%20C28.2434006%2C1.26558351%2021.9409499%2C0%2016.7157492%2C0%20L16.7157492%2C0%20Z%22%20id%3D%22Path%22%20fill%3D%22%2368BC71%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.6986743%2C35.2862582%20C-0.0715650605%2C25.0455268%205.12620113e-06%2C10.0654091%205.12620113e-06%2C4.05122239%20C5.18281802%2C1.26861734%2011.4771929%2C0.00275849124%2016.6986743%2C4.50378311e-06%20L16.6986743%2C35.2862617%20Z%22%20id%3D%22Combined-Shape%22%20fill%3D%22%2367B279%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.1060247%2C23.551094%20L26.2143155%2C9.51801869%20C25.4736005%2C8.90647249%2024.8238876%2C9.33808916%2024.4662281%2C9.672244%20L24.4531774%2C9.67331501%20L16.0248987%2C18.7044208%20L12.8493477%2C14.7681053%20C11.3344091%2C12.96524%209.27486866%2C14.3404157%208.79375662%2C14.7038448%20L16.1060247%2C23.551094%22%20id%3D%22Fill-11%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\") no-repeat 0 0;background-size:100%}.logo:before{content:\"\\00a0\"}.a-logo{display:inline-block;vertical-align:top;width:40px;height:40px;padding:10px 0 0;font-size:20px;text-align:center;border:1px solid #cdcdcd;border-radius:50%;background:#fff}.a-logo__small{width:24px;height:24px;font-size:12px;padding:6px 0 0}.tooltip{position:relative}.tooltip:before{display:none;content:attr(data-title);position:absolute;top:100%;left:50%;width:170px;margin:7px 0 0 -85px;padding:6px 0 5px;font-size:10px;font-style:normal;font-weight:500;color:#fff;text-align:center;white-space:nowrap;border-radius:4px;background:rgba(0,0,0,.8)}.tooltip:after{display:none;content:\'\';position:absolute;top:100%;left:50%;margin:3px 0 0 -4px;border-bottom:4px solid rgba(0,0,0,.8);border-left:4px solid transparent;border-right:4px solid transparent}.tooltip:hover:after,.tooltip:hover:before{display:block}.main{position:relative;background:#fff}.head{padding:18px 20px;cursor:move}.head_title{font-size:16px;font-weight:700;color:#343434}.head_text{margin:4px 0 0;font-size:12px;color:#343434}.content{border-top:1px solid #e0dfdb}.foot{padding:20px;border-top:1px solid #e0dfdb}.foot_action{float:right}.foot_action_btn{font-size:0}.foot_action_btn .btn+.btn{margin-left:10px}.foot .cf{clear:right}.element-rule{padding:20px}.element-rule_slider{margin:5px 0 7px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:320px){.element-rule_slider{display:none}}.element-rule_expand-link{font-size:12px;line-height:15px;font-weight:500;cursor:pointer}.element-rule_expand-link_txt{display:inline-block;vertical-align:top;color:#36ba53;border-bottom:1px solid #ccf0d4}.element-rule_expand-link_arr{display:inline-block;vertical-align:top;width:5px;height:5px;margin:3px 0 0 3px;border-bottom:1px solid #91a795;border-left:1px solid #91a795;-ms-transform:rotate(-45deg);transform:rotate(-45deg);transition:.2s}.element-rule_expand-link:hover .element-rule_expand-link_txt{color:#257f39;border-bottom-color:#91dfa2}.element-rule_expand-link.active .element-rule_expand-link_arr{margin-top:5px;-ms-transform:rotate(-225deg);transform:rotate(-225deg)}.element-rule_form{height:0;margin:0 -20px;transition:.2s height,.2s margin-bottom;overflow:hidden}.element-rule_form.open{height:auto;margin-bottom:-20px}@media (max-width:320px){.element-rule_form.open{padding:20px;padding-top:0}}.element-rule_form-cont{margin:4px 0 0;padding:20px;border-top:1px solid #e0dfdb;background:#f4f4ef}@media (max-width:320px){.element-rule_form-cont{margin-top:0}}.element-rule_fieldset{margin:10px 0 0}.element-rule_fieldset:first-child{margin:0}.element-rule_more--mobile{display:none}@media (max-width:320px){.element-rule_more--mobile{display:block}.element-rule_more--mobile .element-rule_expand-link{display:none}.element-rule_more--mobile #adg-cancel{width:106px;padding:10px 7px}.element-rule_more--mobile #adg-accept{padding:10px 6px}}.adg-slide{position:relative;width:500px;height:44px;margin:auto;transform:translate3d(0,0,0)}.adg-slide-clue-max,.adg-slide-clue-min{position:absolute;top:14px;left:-35px;width:30px;font-size:12px;font-weight:500;color:#8f9b92;cursor:pointer}.adg-slide-clue-min{left:auto;right:-40px;text-align:right}.adg-slide-btns{display:none}.adg-slide-btn{position:relative;width:36px;height:36px;border:2px solid #e2e2e2;border-radius:2px}.adg-slide-btn:after{content:\"\";position:absolute;left:8px;top:15.3px;width:18px;height:2px;background-color:#4e4e4e;border-radius:2px}.adg-slide-btn--plus{margin-left:9px}.adg-slide-btn--plus:before{content:\"\";position:absolute;left:16px;top:8px;height:17px;width:2px;background-color:#4e4e4e;border-radius:2px}.ui-slider-handle{position:absolute;top:22px;z-index:2;cursor:pointer}.ui-slider-handle:before{content:\'\';position:absolute;top:50%;left:50%;width:30px;height:30px;margin:-15px 0 0 -15px;background:rgba(0,0,0,.1);border-radius:50%;transition:.2s}.ui-slider-handle:after{content:\'\';position:absolute;top:50%;left:50%;width:20px;height:20px;margin:-10px 0 0 -10px;background:#36ba53;border-radius:50%}.ui-slider-handle:hover:active,.ui-slider-handle:hover:before{background:rgba(0,0,0,.15)}.tick{position:absolute;height:44px;border:20px solid #fff;border-left:1px solid #fff;border-right:1px solid #fff}.settings_fieldset{padding:20px;border-top:1px solid #e0dfdb}.settings_fieldset:first-child{border:0}.settings_fieldset_lbl{float:left;width:126px;margin:1px 0 0;font-weight:500}.settings_fieldset_lbl__pos{margin-top:21px}.settings_fieldset_val{margin:0 0 0 126px}.choice-size{position:relative;font-size:14px}.choice-size_field{margin:10px 0 0}.choice-size_field:first-child{margin:0}.choice-size_logo{display:none;position:absolute;top:10px;right:15px;width:40px;height:40px;background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2035%2036%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard-Copy-5%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-164.000000%2C%20-219.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-3%22%20transform%3D%22translate(40.000000%2C%20190.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate(124.500000%2C%2029.414062)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-9%22%20transform%3D%22translate(0.453656%2C%200.226828)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-8%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-7%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.7157492%2C0%20C11.4909195%2C0%205.18846877%2C1.26558351%205.12620114e-06%2C4.05122239%20C5.12620114e-06%2C10.0674495%20-0.0716136324%2C25.0556925%2016.7157492%2C35.2966798%20C33.503483%2C25.0556925%2033.4322354%2C10.0674495%2033.4322354%2C4.05122239%20C28.2434006%2C1.26558351%2021.9409499%2C0%2016.7157492%2C0%20L16.7157492%2C0%20Z%22%20id%3D%22Path%22%20fill%3D%22%2368BC71%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.6986743%2C35.2862582%20C-0.0715650605%2C25.0455268%205.12620113e-06%2C10.0654091%205.12620113e-06%2C4.05122239%20C5.18281802%2C1.26861734%2011.4771929%2C0.00275849124%2016.6986743%2C4.50378311e-06%20L16.6986743%2C35.2862617%20Z%22%20id%3D%22Combined-Shape%22%20fill%3D%22%2367B279%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.1060247%2C23.551094%20L26.2143155%2C9.51801869%20C25.4736005%2C8.90647249%2024.8238876%2C9.33808916%2024.4662281%2C9.672244%20L24.4531774%2C9.67331501%20L16.0248987%2C18.7044208%20L12.8493477%2C14.7681053%20C11.3344091%2C12.96524%209.27486866%2C14.3404157%208.79375662%2C14.7038448%20L16.1060247%2C23.551094%22%20id%3D%22Fill-11%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\");background-size:21px;background-position:50% 11px;background-repeat:no-repeat;background-color:#fff;border:none;box-shadow:0 0 10px 3px rgba(162,161,161,.3);border-radius:100%}.choice-size_logo.logo__small{top:15px;right:20px;width:30px;height:30px;background-position:50% 8px;background-size:16px}.choice-size_input:checked~.choice-size_logo{display:block}[class^=s-position-arr-]{display:block;width:11px;height:11px;background:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%0A%20%20%20%20%20width%3D%22400%22%20height%3D%22200%22%20viewBox%3D%220%200%20400%20200%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22arr%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%2218.8%2C84.5%2018.8%2C32%2086.7%2C100%20100%2C86.7%2032%2C18.8%2084.5%2C18.8%2084.5%2C0%2018.8%2C0%200%2C0%200%2C18.8%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%200%2C84.5%20%09%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%0A%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23arr%22%20fill%3D%22%23ababab%22%2F%3E%0A%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23arr%22%20fill%3D%22%23ababab%22%20transform%3D%22rotate(90%20100%20100)%22%2F%3E%0A%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23arr%22%20fill%3D%22%23ababab%22%20transform%3D%22rotate(180%20100%20100)%22%2F%3E%0A%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23arr%22%20fill%3D%22%23ababab%22%20transform%3D%22rotate(270%20100%20100)%22%2F%3E%0A%0A%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23arr%22%20fill%3D%22%23fff%22%20x%3D%22200%22%2F%3E%0A%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23arr%22%20fill%3D%22%23fff%22%20y%3D%22-200%22%20transform%3D%22rotate(90%20100%20100)%22%2F%3E%0A%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23arr%22%20fill%3D%22%23fff%22%20x%3D%22-200%22%20transform%3D%22rotate(180%20100%20100)%22%2F%3E%0A%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23arr%22%20fill%3D%22%23fff%22%20y%3D%22200%22%20transform%3D%22rotate(270%20100%20100)%22%2F%3E%0A%3C%2Fsvg%3E%0A\") no-repeat;background-size:44px 22px}.s-position-arr-top-left{background-position:0 0}.s-position-arr-top-right{background-position:-11px 0}.s-position-arr-bottom-left{background-position:0 -11px}.s-position-arr-bottom-right{background-position:-11px -11px}.change-position{position:relative;display:inline-block;vertical-align:top;width:70px;margin:-3px 0 0 -3px}.change-position_i{float:left;margin:3px 0 0 3px}.change-position_input:checked+.change-position_label{border-color:#36ba53;background:#36ba53}.change-position_input:checked+.change-position_label .s-position-arr-top-left{background-position:-22px 0}.change-position_input:checked+.change-position_label .s-position-arr-top-right{background-position:-33px 0}.change-position_input:checked+.change-position_label .s-position-arr-bottom-left{background-position:-22px -11px}.change-position_input:checked+.change-position_label .s-position-arr-bottom-right{background-position:-33px -11px}.change-position_input:checked~.change-position_val{display:block}.change-position_label{display:block;width:32px;height:32px;margin:0;padding:9px 0 0 9px;border:1px solid #dfdedb;cursor:pointer}.change-position_val{display:none;position:absolute;top:27px;left:82px;font-size:12px;white-space:nowrap}.wot-indicator{display:inline-block;vertical-align:top;margin-right:5px}#WotDescriptionText{white-space:pre-line}#WotDescriptionText #WotLogo{cursor:pointer}.adg-wot{width:18px;height:18px;display:block;border:5px solid #000;border-radius:50%}.adg-wot-unknown{border-color:#ccc}.adg-wot-red{border-color:#b60000}.adg-wot-lightRed{border-color:#f21800}.adg-wot-yellow{border-color:#fac000}.adg-wot-lightGreen{border-color:#69d225}.adg-wot-green{border-color:#00ae17}.adg-wot-confidence{width:52px;height:18px;display:inline-block;vertical-align:middle}.adg-wot-confidence-0{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2052%2018%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.353%2C7.412%20L5.304%2C7.363%20C7.121%2C7.125%208.529%2C5.587%208.529%2C3.706%20C8.529%2C1.659%206.87%2C0%204.824%2C0%20C2.777%2C0%201.118%2C1.659%201.118%2C3.706%20C1.118%2C5.572%202.502%2C7.099%204.294%2C7.358%20L4.294%2C7.412%20C1.118%2C7.412%200.059%2C9.529%200.059%2C9.529%20L1.118%2C15.882%20C1.118%2C16.938%202.475%2C17.806%204.244%2C17.967%20L4.294%2C18%20L5.353%2C18%20L5.403%2C17.967%20C7.172%2C17.806%208.529%2C16.938%208.529%2C15.882%20L9.588%2C9.529%20C9.588%2C9.529%208.529%2C7.412%205.353%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M15.941%2C7.412%20L15.892%2C7.363%20C17.709%2C7.125%2019.118%2C5.587%2019.118%2C3.706%20C19.118%2C1.659%2017.458%2C0%2015.412%2C0%20C13.365%2C0%2011.706%2C1.659%2011.706%2C3.706%20C11.706%2C5.572%2013.09%2C7.099%2014.882%2C7.358%20L14.882%2C7.412%20C11.706%2C7.412%2010.647%2C9.529%2010.647%2C9.529%20L11.706%2C15.882%20C11.706%2C16.938%2013.063%2C17.806%2014.833%2C17.967%20L14.882%2C18%20L15.941%2C18%20L15.991%2C17.967%20C17.76%2C17.806%2019.118%2C16.938%2019.118%2C15.882%20L20.176%2C9.529%20C20.176%2C9.529%2019.118%2C7.412%2015.941%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M26.529%2C7.412%20L26.481%2C7.363%20C28.298%2C7.125%2029.706%2C5.587%2029.706%2C3.706%20C29.706%2C1.659%2028.047%2C0%2026%2C0%20C23.953%2C0%2022.294%2C1.659%2022.294%2C3.706%20C22.294%2C5.572%2023.678%2C7.099%2025.471%2C7.358%20L25.471%2C7.412%20C22.294%2C7.412%2021.235%2C9.529%2021.235%2C9.529%20L22.294%2C15.882%20C22.294%2C16.938%2023.652%2C17.806%2025.421%2C17.967%20L25.471%2C18%20L26.529%2C18%20L26.579%2C17.967%20C28.348%2C17.806%2029.706%2C16.938%2029.706%2C15.882%20L30.765%2C9.529%20C30.765%2C9.529%2029.706%2C7.412%2026.529%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M37.118%2C7.412%20L37.069%2C7.363%20C38.886%2C7.125%2040.294%2C5.587%2040.294%2C3.706%20C40.294%2C1.659%2038.635%2C0%2036.588%2C0%20C34.542%2C0%2032.882%2C1.659%2032.882%2C3.706%20C32.882%2C5.572%2034.266%2C7.099%2036.059%2C7.358%20L36.059%2C7.412%20C32.882%2C7.412%2031.824%2C9.529%2031.824%2C9.529%20L32.882%2C15.882%20C32.882%2C16.938%2034.24%2C17.806%2036.009%2C17.967%20L36.059%2C18%20L37.118%2C18%20L37.167%2C17.967%20C38.937%2C17.806%2040.294%2C16.938%2040.294%2C15.882%20L41.353%2C9.529%20C41.353%2C9.529%2040.294%2C7.412%2037.118%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M47.706%2C7.412%20L47.657%2C7.363%20C49.474%2C7.125%2050.882%2C5.587%2050.882%2C3.706%20C50.882%2C1.659%2049.223%2C0%2047.176%2C0%20C45.13%2C0%2043.471%2C1.659%2043.471%2C3.706%20C43.471%2C5.572%2044.854%2C7.099%2046.647%2C7.358%20L46.647%2C7.412%20C43.471%2C7.412%2042.412%2C9.529%2042.412%2C9.529%20L43.471%2C15.882%20C43.471%2C16.938%2044.828%2C17.806%2046.597%2C17.967%20L46.647%2C18%20L47.706%2C18%20L47.756%2C17.967%20C49.525%2C17.806%2050.882%2C16.938%2050.882%2C15.882%20L51.941%2C9.529%20C51.941%2C9.529%2050.882%2C7.412%2047.706%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.adg-wot-confidence-1{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2052%2018%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.353%2C7.412%20L5.304%2C7.363%20C7.121%2C7.125%208.529%2C5.587%208.529%2C3.706%20C8.529%2C1.659%206.87%2C0%204.824%2C0%20C2.777%2C0%201.118%2C1.659%201.118%2C3.706%20C1.118%2C5.572%202.502%2C7.099%204.294%2C7.358%20L4.294%2C7.412%20C1.118%2C7.412%200.059%2C9.529%200.059%2C9.529%20L1.118%2C15.882%20C1.118%2C16.938%202.475%2C17.806%204.244%2C17.967%20L4.294%2C18%20L5.353%2C18%20L5.403%2C17.967%20C7.172%2C17.806%208.529%2C16.938%208.529%2C15.882%20L9.588%2C9.529%20C9.588%2C9.529%208.529%2C7.412%205.353%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M15.941%2C7.412%20L15.892%2C7.363%20C17.709%2C7.125%2019.118%2C5.587%2019.118%2C3.706%20C19.118%2C1.659%2017.458%2C0%2015.412%2C0%20C13.365%2C0%2011.706%2C1.659%2011.706%2C3.706%20C11.706%2C5.572%2013.09%2C7.099%2014.882%2C7.358%20L14.882%2C7.412%20C11.706%2C7.412%2010.647%2C9.529%2010.647%2C9.529%20L11.706%2C15.882%20C11.706%2C16.938%2013.063%2C17.806%2014.833%2C17.967%20L14.882%2C18%20L15.941%2C18%20L15.991%2C17.967%20C17.76%2C17.806%2019.118%2C16.938%2019.118%2C15.882%20L20.176%2C9.529%20C20.176%2C9.529%2019.118%2C7.412%2015.941%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M26.529%2C7.412%20L26.481%2C7.363%20C28.298%2C7.125%2029.706%2C5.587%2029.706%2C3.706%20C29.706%2C1.659%2028.047%2C0%2026%2C0%20C23.953%2C0%2022.294%2C1.659%2022.294%2C3.706%20C22.294%2C5.572%2023.678%2C7.099%2025.471%2C7.358%20L25.471%2C7.412%20C22.294%2C7.412%2021.235%2C9.529%2021.235%2C9.529%20L22.294%2C15.882%20C22.294%2C16.938%2023.652%2C17.806%2025.421%2C17.967%20L25.471%2C18%20L26.529%2C18%20L26.579%2C17.967%20C28.348%2C17.806%2029.706%2C16.938%2029.706%2C15.882%20L30.765%2C9.529%20C30.765%2C9.529%2029.706%2C7.412%2026.529%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M37.118%2C7.412%20L37.069%2C7.363%20C38.886%2C7.125%2040.294%2C5.587%2040.294%2C3.706%20C40.294%2C1.659%2038.635%2C0%2036.588%2C0%20C34.542%2C0%2032.882%2C1.659%2032.882%2C3.706%20C32.882%2C5.572%2034.266%2C7.099%2036.059%2C7.358%20L36.059%2C7.412%20C32.882%2C7.412%2031.824%2C9.529%2031.824%2C9.529%20L32.882%2C15.882%20C32.882%2C16.938%2034.24%2C17.806%2036.009%2C17.967%20L36.059%2C18%20L37.118%2C18%20L37.167%2C17.967%20C38.937%2C17.806%2040.294%2C16.938%2040.294%2C15.882%20L41.353%2C9.529%20C41.353%2C9.529%2040.294%2C7.412%2037.118%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M47.706%2C7.412%20L47.657%2C7.363%20C49.474%2C7.125%2050.882%2C5.587%2050.882%2C3.706%20C50.882%2C1.659%2049.223%2C0%2047.176%2C0%20C45.13%2C0%2043.471%2C1.659%2043.471%2C3.706%20C43.471%2C5.572%2044.854%2C7.099%2046.647%2C7.358%20L46.647%2C7.412%20C43.471%2C7.412%2042.412%2C9.529%2042.412%2C9.529%20L43.471%2C15.882%20C43.471%2C16.938%2044.828%2C17.806%2046.597%2C17.967%20L46.647%2C18%20L47.706%2C18%20L47.756%2C17.967%20C49.525%2C17.806%2050.882%2C16.938%2050.882%2C15.882%20L51.941%2C9.529%20C51.941%2C9.529%2050.882%2C7.412%2047.706%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.adg-wot-confidence-2{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2052%2018%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.353%2C7.412%20L5.304%2C7.363%20C7.121%2C7.125%208.529%2C5.587%208.529%2C3.706%20C8.529%2C1.659%206.87%2C0%204.824%2C0%20C2.777%2C0%201.118%2C1.659%201.118%2C3.706%20C1.118%2C5.572%202.502%2C7.099%204.294%2C7.358%20L4.294%2C7.412%20C1.118%2C7.412%200.059%2C9.529%200.059%2C9.529%20L1.118%2C15.882%20C1.118%2C16.938%202.475%2C17.806%204.244%2C17.967%20L4.294%2C18%20L5.353%2C18%20L5.403%2C17.967%20C7.172%2C17.806%208.529%2C16.938%208.529%2C15.882%20L9.588%2C9.529%20C9.588%2C9.529%208.529%2C7.412%205.353%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M15.941%2C7.412%20L15.892%2C7.363%20C17.709%2C7.125%2019.118%2C5.587%2019.118%2C3.706%20C19.118%2C1.659%2017.458%2C0%2015.412%2C0%20C13.365%2C0%2011.706%2C1.659%2011.706%2C3.706%20C11.706%2C5.572%2013.09%2C7.099%2014.882%2C7.358%20L14.882%2C7.412%20C11.706%2C7.412%2010.647%2C9.529%2010.647%2C9.529%20L11.706%2C15.882%20C11.706%2C16.938%2013.063%2C17.806%2014.833%2C17.967%20L14.882%2C18%20L15.941%2C18%20L15.991%2C17.967%20C17.76%2C17.806%2019.118%2C16.938%2019.118%2C15.882%20L20.176%2C9.529%20C20.176%2C9.529%2019.118%2C7.412%2015.941%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M26.529%2C7.412%20L26.481%2C7.363%20C28.298%2C7.125%2029.706%2C5.587%2029.706%2C3.706%20C29.706%2C1.659%2028.047%2C0%2026%2C0%20C23.953%2C0%2022.294%2C1.659%2022.294%2C3.706%20C22.294%2C5.572%2023.678%2C7.099%2025.471%2C7.358%20L25.471%2C7.412%20C22.294%2C7.412%2021.235%2C9.529%2021.235%2C9.529%20L22.294%2C15.882%20C22.294%2C16.938%2023.652%2C17.806%2025.421%2C17.967%20L25.471%2C18%20L26.529%2C18%20L26.579%2C17.967%20C28.348%2C17.806%2029.706%2C16.938%2029.706%2C15.882%20L30.765%2C9.529%20C30.765%2C9.529%2029.706%2C7.412%2026.529%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M37.118%2C7.412%20L37.069%2C7.363%20C38.886%2C7.125%2040.294%2C5.587%2040.294%2C3.706%20C40.294%2C1.659%2038.635%2C0%2036.588%2C0%20C34.542%2C0%2032.882%2C1.659%2032.882%2C3.706%20C32.882%2C5.572%2034.266%2C7.099%2036.059%2C7.358%20L36.059%2C7.412%20C32.882%2C7.412%2031.824%2C9.529%2031.824%2C9.529%20L32.882%2C15.882%20C32.882%2C16.938%2034.24%2C17.806%2036.009%2C17.967%20L36.059%2C18%20L37.118%2C18%20L37.167%2C17.967%20C38.937%2C17.806%2040.294%2C16.938%2040.294%2C15.882%20L41.353%2C9.529%20C41.353%2C9.529%2040.294%2C7.412%2037.118%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M47.706%2C7.412%20L47.657%2C7.363%20C49.474%2C7.125%2050.882%2C5.587%2050.882%2C3.706%20C50.882%2C1.659%2049.223%2C0%2047.176%2C0%20C45.13%2C0%2043.471%2C1.659%2043.471%2C3.706%20C43.471%2C5.572%2044.854%2C7.099%2046.647%2C7.358%20L46.647%2C7.412%20C43.471%2C7.412%2042.412%2C9.529%2042.412%2C9.529%20L43.471%2C15.882%20C43.471%2C16.938%2044.828%2C17.806%2046.597%2C17.967%20L46.647%2C18%20L47.706%2C18%20L47.756%2C17.967%20C49.525%2C17.806%2050.882%2C16.938%2050.882%2C15.882%20L51.941%2C9.529%20C51.941%2C9.529%2050.882%2C7.412%2047.706%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.adg-wot-confidence-3{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2052%2018%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.353%2C7.412%20L5.304%2C7.363%20C7.121%2C7.125%208.529%2C5.587%208.529%2C3.706%20C8.529%2C1.659%206.87%2C0%204.824%2C0%20C2.777%2C0%201.118%2C1.659%201.118%2C3.706%20C1.118%2C5.572%202.502%2C7.099%204.294%2C7.358%20L4.294%2C7.412%20C1.118%2C7.412%200.059%2C9.529%200.059%2C9.529%20L1.118%2C15.882%20C1.118%2C16.938%202.475%2C17.806%204.244%2C17.967%20L4.294%2C18%20L5.353%2C18%20L5.403%2C17.967%20C7.172%2C17.806%208.529%2C16.938%208.529%2C15.882%20L9.588%2C9.529%20C9.588%2C9.529%208.529%2C7.412%205.353%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M15.941%2C7.412%20L15.892%2C7.363%20C17.709%2C7.125%2019.118%2C5.587%2019.118%2C3.706%20C19.118%2C1.659%2017.458%2C0%2015.412%2C0%20C13.365%2C0%2011.706%2C1.659%2011.706%2C3.706%20C11.706%2C5.572%2013.09%2C7.099%2014.882%2C7.358%20L14.882%2C7.412%20C11.706%2C7.412%2010.647%2C9.529%2010.647%2C9.529%20L11.706%2C15.882%20C11.706%2C16.938%2013.063%2C17.806%2014.833%2C17.967%20L14.882%2C18%20L15.941%2C18%20L15.991%2C17.967%20C17.76%2C17.806%2019.118%2C16.938%2019.118%2C15.882%20L20.176%2C9.529%20C20.176%2C9.529%2019.118%2C7.412%2015.941%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M26.529%2C7.412%20L26.481%2C7.363%20C28.298%2C7.125%2029.706%2C5.587%2029.706%2C3.706%20C29.706%2C1.659%2028.047%2C0%2026%2C0%20C23.953%2C0%2022.294%2C1.659%2022.294%2C3.706%20C22.294%2C5.572%2023.678%2C7.099%2025.471%2C7.358%20L25.471%2C7.412%20C22.294%2C7.412%2021.235%2C9.529%2021.235%2C9.529%20L22.294%2C15.882%20C22.294%2C16.938%2023.652%2C17.806%2025.421%2C17.967%20L25.471%2C18%20L26.529%2C18%20L26.579%2C17.967%20C28.348%2C17.806%2029.706%2C16.938%2029.706%2C15.882%20L30.765%2C9.529%20C30.765%2C9.529%2029.706%2C7.412%2026.529%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M37.118%2C7.412%20L37.069%2C7.363%20C38.886%2C7.125%2040.294%2C5.587%2040.294%2C3.706%20C40.294%2C1.659%2038.635%2C0%2036.588%2C0%20C34.542%2C0%2032.882%2C1.659%2032.882%2C3.706%20C32.882%2C5.572%2034.266%2C7.099%2036.059%2C7.358%20L36.059%2C7.412%20C32.882%2C7.412%2031.824%2C9.529%2031.824%2C9.529%20L32.882%2C15.882%20C32.882%2C16.938%2034.24%2C17.806%2036.009%2C17.967%20L36.059%2C18%20L37.118%2C18%20L37.167%2C17.967%20C38.937%2C17.806%2040.294%2C16.938%2040.294%2C15.882%20L41.353%2C9.529%20C41.353%2C9.529%2040.294%2C7.412%2037.118%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M47.706%2C7.412%20L47.657%2C7.363%20C49.474%2C7.125%2050.882%2C5.587%2050.882%2C3.706%20C50.882%2C1.659%2049.223%2C0%2047.176%2C0%20C45.13%2C0%2043.471%2C1.659%2043.471%2C3.706%20C43.471%2C5.572%2044.854%2C7.099%2046.647%2C7.358%20L46.647%2C7.412%20C43.471%2C7.412%2042.412%2C9.529%2042.412%2C9.529%20L43.471%2C15.882%20C43.471%2C16.938%2044.828%2C17.806%2046.597%2C17.967%20L46.647%2C18%20L47.706%2C18%20L47.756%2C17.967%20C49.525%2C17.806%2050.882%2C16.938%2050.882%2C15.882%20L51.941%2C9.529%20C51.941%2C9.529%2050.882%2C7.412%2047.706%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.adg-wot-confidence-4{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2052%2018%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.353%2C7.412%20L5.304%2C7.363%20C7.121%2C7.125%208.529%2C5.587%208.529%2C3.706%20C8.529%2C1.659%206.87%2C0%204.824%2C0%20C2.777%2C0%201.118%2C1.659%201.118%2C3.706%20C1.118%2C5.572%202.502%2C7.099%204.294%2C7.358%20L4.294%2C7.412%20C1.118%2C7.412%200.059%2C9.529%200.059%2C9.529%20L1.118%2C15.882%20C1.118%2C16.938%202.475%2C17.806%204.244%2C17.967%20L4.294%2C18%20L5.353%2C18%20L5.403%2C17.967%20C7.172%2C17.806%208.529%2C16.938%208.529%2C15.882%20L9.588%2C9.529%20C9.588%2C9.529%208.529%2C7.412%205.353%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M15.941%2C7.412%20L15.892%2C7.363%20C17.709%2C7.125%2019.118%2C5.587%2019.118%2C3.706%20C19.118%2C1.659%2017.458%2C0%2015.412%2C0%20C13.365%2C0%2011.706%2C1.659%2011.706%2C3.706%20C11.706%2C5.572%2013.09%2C7.099%2014.882%2C7.358%20L14.882%2C7.412%20C11.706%2C7.412%2010.647%2C9.529%2010.647%2C9.529%20L11.706%2C15.882%20C11.706%2C16.938%2013.063%2C17.806%2014.833%2C17.967%20L14.882%2C18%20L15.941%2C18%20L15.991%2C17.967%20C17.76%2C17.806%2019.118%2C16.938%2019.118%2C15.882%20L20.176%2C9.529%20C20.176%2C9.529%2019.118%2C7.412%2015.941%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M26.529%2C7.412%20L26.481%2C7.363%20C28.298%2C7.125%2029.706%2C5.587%2029.706%2C3.706%20C29.706%2C1.659%2028.047%2C0%2026%2C0%20C23.953%2C0%2022.294%2C1.659%2022.294%2C3.706%20C22.294%2C5.572%2023.678%2C7.099%2025.471%2C7.358%20L25.471%2C7.412%20C22.294%2C7.412%2021.235%2C9.529%2021.235%2C9.529%20L22.294%2C15.882%20C22.294%2C16.938%2023.652%2C17.806%2025.421%2C17.967%20L25.471%2C18%20L26.529%2C18%20L26.579%2C17.967%20C28.348%2C17.806%2029.706%2C16.938%2029.706%2C15.882%20L30.765%2C9.529%20C30.765%2C9.529%2029.706%2C7.412%2026.529%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M37.118%2C7.412%20L37.069%2C7.363%20C38.886%2C7.125%2040.294%2C5.587%2040.294%2C3.706%20C40.294%2C1.659%2038.635%2C0%2036.588%2C0%20C34.542%2C0%2032.882%2C1.659%2032.882%2C3.706%20C32.882%2C5.572%2034.266%2C7.099%2036.059%2C7.358%20L36.059%2C7.412%20C32.882%2C7.412%2031.824%2C9.529%2031.824%2C9.529%20L32.882%2C15.882%20C32.882%2C16.938%2034.24%2C17.806%2036.009%2C17.967%20L36.059%2C18%20L37.118%2C18%20L37.167%2C17.967%20C38.937%2C17.806%2040.294%2C16.938%2040.294%2C15.882%20L41.353%2C9.529%20C41.353%2C9.529%2040.294%2C7.412%2037.118%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M47.706%2C7.412%20L47.657%2C7.363%20C49.474%2C7.125%2050.882%2C5.587%2050.882%2C3.706%20C50.882%2C1.659%2049.223%2C0%2047.176%2C0%20C45.13%2C0%2043.471%2C1.659%2043.471%2C3.706%20C43.471%2C5.572%2044.854%2C7.099%2046.647%2C7.358%20L46.647%2C7.412%20C43.471%2C7.412%2042.412%2C9.529%2042.412%2C9.529%20L43.471%2C15.882%20C43.471%2C16.938%2044.828%2C17.806%2046.597%2C17.967%20L46.647%2C18%20L47.706%2C18%20L47.756%2C17.967%20C49.525%2C17.806%2050.882%2C16.938%2050.882%2C15.882%20L51.941%2C9.529%20C51.941%2C9.529%2050.882%2C7.412%2047.706%2C7.412%20z%22%20fill%3D%22%23D6D6D6%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.adg-wot-confidence-5{background-image:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2052%2018%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M5.353%2C7.412%20L5.304%2C7.363%20C7.121%2C7.125%208.529%2C5.587%208.529%2C3.706%20C8.529%2C1.659%206.87%2C0%204.824%2C0%20C2.777%2C0%201.118%2C1.659%201.118%2C3.706%20C1.118%2C5.572%202.502%2C7.099%204.294%2C7.358%20L4.294%2C7.412%20C1.118%2C7.412%200.059%2C9.529%200.059%2C9.529%20L1.118%2C15.882%20C1.118%2C16.938%202.475%2C17.806%204.244%2C17.967%20L4.294%2C18%20L5.353%2C18%20L5.403%2C17.967%20C7.172%2C17.806%208.529%2C16.938%208.529%2C15.882%20L9.588%2C9.529%20C9.588%2C9.529%208.529%2C7.412%205.353%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M15.941%2C7.412%20L15.892%2C7.363%20C17.709%2C7.125%2019.118%2C5.587%2019.118%2C3.706%20C19.118%2C1.659%2017.458%2C0%2015.412%2C0%20C13.365%2C0%2011.706%2C1.659%2011.706%2C3.706%20C11.706%2C5.572%2013.09%2C7.099%2014.882%2C7.358%20L14.882%2C7.412%20C11.706%2C7.412%2010.647%2C9.529%2010.647%2C9.529%20L11.706%2C15.882%20C11.706%2C16.938%2013.063%2C17.806%2014.833%2C17.967%20L14.882%2C18%20L15.941%2C18%20L15.991%2C17.967%20C17.76%2C17.806%2019.118%2C16.938%2019.118%2C15.882%20L20.176%2C9.529%20C20.176%2C9.529%2019.118%2C7.412%2015.941%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M26.529%2C7.412%20L26.481%2C7.363%20C28.298%2C7.125%2029.706%2C5.587%2029.706%2C3.706%20C29.706%2C1.659%2028.047%2C0%2026%2C0%20C23.953%2C0%2022.294%2C1.659%2022.294%2C3.706%20C22.294%2C5.572%2023.678%2C7.099%2025.471%2C7.358%20L25.471%2C7.412%20C22.294%2C7.412%2021.235%2C9.529%2021.235%2C9.529%20L22.294%2C15.882%20C22.294%2C16.938%2023.652%2C17.806%2025.421%2C17.967%20L25.471%2C18%20L26.529%2C18%20L26.579%2C17.967%20C28.348%2C17.806%2029.706%2C16.938%2029.706%2C15.882%20L30.765%2C9.529%20C30.765%2C9.529%2029.706%2C7.412%2026.529%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M37.118%2C7.412%20L37.069%2C7.363%20C38.886%2C7.125%2040.294%2C5.587%2040.294%2C3.706%20C40.294%2C1.659%2038.635%2C0%2036.588%2C0%20C34.542%2C0%2032.882%2C1.659%2032.882%2C3.706%20C32.882%2C5.572%2034.266%2C7.099%2036.059%2C7.358%20L36.059%2C7.412%20C32.882%2C7.412%2031.824%2C9.529%2031.824%2C9.529%20L32.882%2C15.882%20C32.882%2C16.938%2034.24%2C17.806%2036.009%2C17.967%20L36.059%2C18%20L37.118%2C18%20L37.167%2C17.967%20C38.937%2C17.806%2040.294%2C16.938%2040.294%2C15.882%20L41.353%2C9.529%20C41.353%2C9.529%2040.294%2C7.412%2037.118%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M47.706%2C7.412%20L47.657%2C7.363%20C49.474%2C7.125%2050.882%2C5.587%2050.882%2C3.706%20C50.882%2C1.659%2049.223%2C0%2047.176%2C0%20C45.13%2C0%2043.471%2C1.659%2043.471%2C3.706%20C43.471%2C5.572%2044.854%2C7.099%2046.647%2C7.358%20L46.647%2C7.412%20C43.471%2C7.412%2042.412%2C9.529%2042.412%2C9.529%20L43.471%2C15.882%20C43.471%2C16.938%2044.828%2C17.806%2046.597%2C17.967%20L46.647%2C18%20L47.706%2C18%20L47.756%2C17.967%20C49.525%2C17.806%2050.882%2C16.938%2050.882%2C15.882%20L51.941%2C9.529%20C51.941%2C9.529%2050.882%2C7.412%2047.706%2C7.412%20z%22%20fill%3D%22%23717171%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.confidence-indication,.wot-indicator{text-decoration:none;vertical-align:middle}.confidence-indication:hover,.wot-indicator:hover{text-decoration:none}.confidence-indication{display:inline-block;margin-right:10px}.wot-logo{display:inline-block;vertical-align:top;width:31px;height:12px;background:url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2038%2015%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M21.91%2C1.083%20C18.008%2C1.083%2014.846%2C4.07%2014.846%2C7.758%20C14.846%2C11.445%2018.008%2C14.432%2021.91%2C14.432%20C25.813%2C14.432%2028.977%2C11.445%2028.977%2C7.758%20C28.978%2C4.07%2025.813%2C1.083%2021.91%2C1.083%20z%20M21.771%2C11.9%20C19.5%2C11.9%2017.657%2C10.056%2017.657%2C7.783%20C17.657%2C5.508%2019.501%2C3.664%2021.771%2C3.664%20C24.045%2C3.664%2025.886%2C5.508%2025.886%2C7.783%20C25.886%2C10.057%2024.045%2C11.9%2021.771%2C11.9%20z%22%20fill%3D%22%2374B03E%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M16.751%2C0.642%20L17.031%2C0%20L14.063%2C0%20L11.27%2C8%20L8.648%2C0%20L8.272%2C0%20L5.65%2C8%20L3%2C0%20L0.031%2C0%20L4.9%2C13.486%20C4.9%2C13.486%205.078%2C13.86%205.275%2C13.86%20C5.451%2C13.86%205.649%2C13.486%205.649%2C13.486%20L8.445%2C6.406%20L11.269%2C13.486%20C11.269%2C13.486%2011.455%2C13.86%2011.643%2C13.86%20C11.829%2C13.86%2012.018%2C13.486%2012.018%2C13.486%20L13.614%2C9.067%20C13.445%2C8.433%2013.345%2C7.773%2013.345%2C7.089%20C13.346%2C4.453%2014.686%2C2.118%2016.751%2C0.642%20z%22%20fill%3D%22%23EE3428%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M27.031%2C0%20L27.031%2C0.613%20C27.944%2C1.258%2028.715%2C2.067%2029.295%2C3%20L31.031%2C3%20L31.031%2C14%20L34.031%2C14%20L34.031%2C3%20L38.031%2C3%20L38.031%2C0%20L27.031%2C0%20z%22%20fill%3D%22%23F08615%22%2F%3E%0A%3C%2Fsvg%3E%0A) no-repeat 0 0/cover;margin-top:3px}.wot-hide{display:none}iframe#adguard-assistant-dialog{position:fixed;clip:auto;border-radius:3px;box-shadow:0 0 10px 3px rgba(162,161,161,.3)}.sg_hide_element{display:none!important}img.adguard_sg_selected{border:5px solid #0f0!important}#_sg_div.sg_top{top:5px!important}#_sg_div.sg_bottom{bottom:5px!important}#_sg_div input{margin-right:10px!important;font-size:15px!important}#_sg_path_field{width:400px!important}#_sg_div .sg_new_line{clear:both!important}#_sg_div .sg_option{float:left!important}#_sg_div .adguard_sg_selected_option{text-decoration:underline}.adguard-placeholder{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OUM5OUE4MEZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OUM5OUE4MUZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5Qzk5QTdFRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5Qzk5QTdGRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9rJm9wAAAAZQTFRF2+7g1OfZ+LX/EgAAACtJREFUeNpiYIQABhhA5TIyoHIhfCS1DKhcEB/FJAZG7AYzoNlLLy5AgAEAMigAar6TcqkAAAAASUVORK5CYII=)}.adguard-placeholder-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkNBQTNGMkZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkNBQTNGM0ZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2Q0FBM0YwRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ2Q0FBM0YxRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+49sbDwAAAl9JREFUeNrMmE0o5VEYxq9vJmpI2SBZjCSNKKGwkDE0m8mg2QwzEtkNCeUjGyVhYTbTUIZEMWmkbCVlw9QkG4mammbK5zAWuLqek3ch3W7v+Z8P/7d+u/cczz3neM7zP0Htg12eR6wUkA+eg2yQDOLAYegjiIkEr0AjyAPRfnp8toW9Be20QoHKa0tYEhgCVdwBNoQVgCmQKjPItLAKMAtiZAeaFFYM5sATJ4ODDYl6BuadijIlLAJMgHiFOWJMbGUfmaZsHYN98Bvs6haWA1olx2yCMfAd/DF1+Psl5rwGPWAYXJn8r3wNXjB7L0ENrZLRwy/m6ZDorw8kSqewUpDL7P0Epm3YRRBoYfbugW5bPpZDK8apTnBqS9h7WjWOLXyz5fxPQSWjz0dWcmPrEhdJNIEprIlW198Z7aUV1SasQWJnAp3Dzw+FqWxlOmV2HeXVecbegHBTYS5YYVy1yejrVJhIpxluFPaB6V1WhSWQTXjcJqyKjFVnhagabBhFFk7tgnPmlp+oChNbmMXM70XgL3Nen6qwj8y+xfv53fQZKweFzN5xW4c/Cgwwe9fAui1hIuBlMntHZOKNirAyiQ+NLbBkw8fEE9IM2QSnBv19I+oWVguWQSxzrnX6EVrqoV2I15kS0AxeSszjo+326hQm3hoSQRqR6mCeL2BV5x0VSjYQojDHNmgzcYn/Uxj/H9SBM7fkMQ951Tuw4aageEMpY8FUHnPy+XZECXbRTUFxhezEqCiZFfsFRnXdg1xhgcT9BF/BJG2htRKiDjx376EX9Md36HoR/NDp5jJ1K8AAcQBmooZhTgQAAAAASUVORK5CYII=);background-position:center center;background-repeat:no-repeat;height:100%}.adguard-placeholder-domain{background:#778b7c;color:#fff;left:0;top:0;padding:2px 4px;position:relative}@media print{#adguard-assistant-dialog,.adguard-alert{display:none!important;opacity:0!important;visibility:hidden!important}}.menu-head{padding:18px 20px;cursor:move;touch-action:none;-ms-touch-action:none}.menu-head_title{font-size:16px;font-weight:700;color:#343434}.menu-head_name{display:inline-block;vertical-align:top;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:260px;line-height:26px;margin:0 10px 5px 0}.menu-head_text{margin:4px 10px 0 0;font-size:12px;color:#343434}.menu-filter{width:100%;display:table;padding:20px;border-top:1px solid #e0dfdb}.menu-filter_lbl{display:table-cell;vertical-align:middle}.menu-filter_val{display:table-cell;vertical-align:middle}.menu-filter_label{position:relative;width:30px;height:12px;border-radius:25px;background-color:#ed7865;cursor:pointer;transition:all .3s ease;float:right}.menu-filter_label:after{content:\"\";cursor:pointer;border-radius:100%;position:absolute;left:-3px;top:-4px;box-shadow:0 0 10px 3px rgba(162,161,161,.3);width:20px;height:20px;background-color:#e85037;transition:all .3s ease}.menu-filter_handle{position:absolute;width:20px;height:20px;top:1px;left:1px;border-radius:4px;background:#fff}.menu-filter_input:checked+.menu-filter_label{background-color:#bde5c1}.menu-filter_input:checked+.menu-filter_label:after{left:12px;background-color:#68bc72}.menu{border-top:1px solid #e0dfdb}.menu__btn{position:relative;cursor:pointer;line-height:45px;height:45px;background-repeat:no-repeat;background-position:20px 50%;transition:.3s ease;padding:0 20px 0 60px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.menu__btn:hover{background-color:rgba(104,188,113,.2)}.menu__btn--clock{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2017%2017%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%202%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-22.000000%2C%20-144.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-2%22%20transform%3D%22translate(23.000000%2C%20141.000000)%22%20stroke%3D%22%23979797%22%20stroke-width%3D%221.35%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22Oval%22%20cx%3D%227.87036133%22%20cy%3D%2211.2759766%22%20r%3D%227.37885742%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolyline%20id%3D%22Line-2%22%20stroke-linecap%3D%22square%22%20points%3D%227.76796875%207.46328125%207.76796875%2011.9632812%2011.3679687%2011.9632812%22%3E%3C%2Fpolyline%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\");background-size:16px 19px}.menu__btn--landscape{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2019%2017%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%203%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Crect%20id%3D%22path-1%22%20x%3D%220.76796875%22%20y%3D%220.980664063%22%20width%3D%2218%22%20height%3D%2215.8805176%22%20rx%3D%221.8%22%3E%3C%2Frect%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-20.000000%2C%20-184.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-3%22%20transform%3D%22translate(20.000000%2C%20184.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Rectangle%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill-rule%3D%22evenodd%22%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20stroke%3D%22%23979797%22%20stroke-width%3D%221.35%22%20x%3D%221.44296875%22%20y%3D%221.65566406%22%20width%3D%2216.65%22%20height%3D%2214.5305176%22%20rx%3D%221.8%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolyline%20id%3D%22Line-3%22%20stroke%3D%22%23979797%22%20stroke-width%3D%221.35%22%20stroke-linecap%3D%22square%22%20points%3D%221.62666016%2013.0713379%205.22666016%209.47133789%208.17407227%2012.1155273%2012.929834%206.72827148%2017.8679687%2012.3330566%22%3E%3C%2Fpolyline%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\");background-size:19px 17px}.menu__btn--report{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2017%2018%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3ECombined%20Shape%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-22.000000%2C%20-224.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M22.8175781%2C234.417455%20L22.8175781%2C240.559747%20L36.896066%2C232.723089%20L22.8175781%2C225.699121%20L22.8175781%2C231.080572%20L25.9788363%2C232.657771%20L22.8175781%2C234.417455%20Z%22%20id%3D%22Combined-Shape%22%20stroke%3D%22%23979797%22%20stroke-width%3D%221.35%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\");background-size:16px 17px}.menu__btn--security{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2018%2018%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EPath%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-21.000000%2C%20-263.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M30.0235895%2C280.119024%20C29.9710016%2C280.119024%2029.9183625%2C280.110898%2029.8676655%2C280.094647%20C28.1635915%2C279.548785%2026.7127981%2C278.501779%2025.5555057%2C276.982759%20C24.6443903%2C275.786831%2023.914854%2C274.298373%2023.3872881%2C272.558729%20C22.4973305%2C269.624485%2022.4871094%2C267.010522%2022.4871094%2C266.900696%20C22.4871094%2C266.637501%2022.6870355%2C266.417286%2022.9490553%2C266.391988%20C22.988509%2C266.388155%2026.9576974%2C265.980688%2029.7232914%2C263.972279%20C29.9023664%2C263.842163%2030.1448637%2C263.842316%2030.3239387%2C263.97233%20C33.0887662%2C265.980688%2037.0584656%2C266.388155%2037.0982259%2C266.392039%20C37.3600413%2C266.417592%2037.5599163%2C266.637705%2037.5599163%2C266.900696%20C37.5599163%2C267.010522%2037.5496952%2C269.624485%2036.6597887%2C272.55878%20C36.1321717%2C274.298424%2035.4026865%2C275.786882%2034.4915711%2C276.982811%20C33.3343299%2C278.50183%2031.8835365%2C279.548836%2030.1794624%2C280.094698%20C30.1287654%2C280.110898%2030.0761775%2C280.119024%2030.0235895%2C280.119024%20L30.0235895%2C280.119024%20Z%22%20id%3D%22Path%22%20stroke%3D%22%23979797%22%20stroke-width%3D%221.35%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\");background-size:15px 16px}.menu__btn--extensions{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2020%2019%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3ECombined%20Shape%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M27.6156931%2C322.288086%20L20.7679687%2C322.288086%20L20.7679687%2C315.416026%20L21.9599314%2C315.416026%20C22.5102908%2C315.416026%2022.9564453%2C314.969871%2022.9564453%2C314.419512%20C22.9564453%2C313.869153%2022.5102908%2C313.422998%2021.9599314%2C313.422998%20L20.7679687%2C313.422998%20L20.7679687%2C306.91711%20L25.9398926%2C306.91711%20L25.9398926%2C306.816368%20C25.9398926%2C305.325199%2027.1487238%2C304.116368%2028.6398926%2C304.116368%20C30.1310614%2C304.116368%2031.3398926%2C305.325199%2031.3398926%2C306.816368%20L31.3398926%2C306.91711%20L36.1389445%2C306.91711%20L36.1389445%2C311.902598%20L36.3320801%2C311.902598%20C37.8232489%2C311.902598%2039.0320801%2C313.111429%2039.0320801%2C314.602598%20C39.0320801%2C316.093767%2037.8232489%2C317.302598%2036.3320801%2C317.302598%20L36.1389445%2C317.302598%20L36.1389445%2C322.288086%20L29.6087209%2C322.288086%20L29.6087209%2C320.57169%20C29.6087209%2C320.02133%2029.1625665%2C319.575176%2028.612207%2C319.575176%20C28.0618476%2C319.575176%2027.6156931%2C320.02133%2027.6156931%2C320.57169%20L27.6156931%2C322.288086%20Z%22%20id%3D%22path-1%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-20.000000%2C%20-304.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Combined-Shape%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill-rule%3D%22evenodd%22%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20stroke%3D%22%23979797%22%20stroke-width%3D%221.35%22%20d%3D%22M26.9406931%2C321.613086%20L26.9406931%2C320.57169%20C26.9406931%2C319.648538%2027.6890554%2C318.900176%2028.612207%2C318.900176%20C29.5353587%2C318.900176%2030.2837209%2C319.648538%2030.2837209%2C320.57169%20L30.2837209%2C321.613086%20L35.4639445%2C321.613086%20L35.4639445%2C316.627598%20L36.3320801%2C316.627598%20C37.4504567%2C316.627598%2038.3570801%2C315.720975%2038.3570801%2C314.602598%20C38.3570801%2C313.484221%2037.4504567%2C312.577598%2036.3320801%2C312.577598%20L35.4639445%2C312.577598%20L35.4639445%2C307.59211%20L30.6648926%2C307.59211%20L30.6648926%2C306.816368%20C30.6648926%2C305.697991%2029.7582692%2C304.791368%2028.6398926%2C304.791368%20C27.521516%2C304.791368%2026.6148926%2C305.697991%2026.6148926%2C306.816368%20L26.6148926%2C307.59211%20L21.4429687%2C307.59211%20L21.4429687%2C312.747998%20L21.9599314%2C312.747998%20C22.8830831%2C312.747998%2023.6314453%2C313.49636%2023.6314453%2C314.419512%20C23.6314453%2C315.342664%2022.8830831%2C316.091026%2021.9599314%2C316.091026%20L21.4429687%2C316.091026%20L21.4429687%2C321.613086%20L26.9406931%2C321.613086%20Z%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\");background-size:18px}.menu__btn--settings{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2019%2019%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-20.000000%2C%20-343.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate(20.142383%2C%20343.303467)%22%20stroke%3D%22%23979797%22%20stroke-width%3D%221.35%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M7.71152344%2C1.90063477%20L7.71152344%2C2.89634315%20L7.22906694%2C3.03992922%20C6.81135543%2C3.16424625%206.40862208%2C3.33146468%206.02648841%2C3.53853477%20L5.58370832%2C3.77846786%20L4.87910242%2C3.07386196%20C4.4397626%2C2.63452214%203.72745199%2C2.63452214%203.28811217%2C3.07386196%20L3.0022311%2C3.35974303%20C2.56289128%2C3.79908285%202.56289128%2C4.51139346%203.0022311%2C4.95073328%20L3.706837%2C5.65533918%20L3.46690391%2C6.09811927%20C3.25983382%2C6.48025293%203.09261539%2C6.88298629%202.96829836%2C7.3006978%20L2.82471229%2C7.7831543%20L1.82900391%2C7.7831543%20C1.20768356%2C7.7831543%200.704003906%2C8.28683395%200.704003906%2C8.9081543%20L0.704003906%2C9.31245117%20C0.704003906%2C9.93377152%201.20768356%2C10.4374512%201.82900391%2C10.4374512%20L2.82471229%2C10.4374512%20L2.96829836%2C10.9199077%20C3.09261539%2C11.3376192%203.25983382%2C11.7403525%203.46690391%2C12.1224862%20L3.706837%2C12.5652663%20L3.0022311%2C13.2698722%20C2.56289128%2C13.709212%202.56289128%2C14.4215226%203.0022311%2C14.8608624%20L3.28811217%2C15.1467435%20C3.72745199%2C15.5860833%204.4397626%2C15.5860833%204.87910242%2C15.1467435%20L5.58370832%2C14.4421376%20L6.02648841%2C14.6820707%20C6.40862208%2C14.8891408%206.81135543%2C15.0563592%207.22906694%2C15.1806762%20L7.71152344%2C15.3242623%20L7.71152344%2C16.3199707%20C7.71152344%2C16.941291%208.21520309%2C17.4449707%208.83652344%2C17.4449707%20L9.24082031%2C17.4449707%20C9.86214066%2C17.4449707%2010.3658203%2C16.941291%2010.3658203%2C16.3199707%20L10.3658203%2C15.3242623%20L10.8482768%2C15.1806762%20C11.2659883%2C15.0563592%2011.6687217%2C14.8891408%2012.0508553%2C14.6820707%20L12.4936354%2C14.4421376%20L13.1982413%2C15.1467435%20C13.6375812%2C15.5860833%2014.3498918%2C15.5860833%2014.7892316%2C15.1467435%20L15.0751126%2C14.8608624%20C15.5144525%2C14.4215226%2015.5144525%2C13.709212%2015.0751126%2C13.2698722%20L14.3705067%2C12.5652663%20L14.6104398%2C12.1224862%20C14.8175099%2C11.7403525%2014.9847284%2C11.3376192%2015.1090454%2C10.9199077%20L15.2526315%2C10.4374512%20L16.2483398%2C10.4374512%20C16.8696602%2C10.4374512%2017.3733398%2C9.93377152%2017.3733398%2C9.31245117%20L17.3733398%2C8.9081543%20C17.3733398%2C8.28683395%2016.8696602%2C7.7831543%2016.2483398%2C7.7831543%20L15.2526315%2C7.7831543%20L15.1090454%2C7.3006978%20C14.9847284%2C6.88298629%2014.8175099%2C6.48025293%2014.6104398%2C6.09811927%20L14.3705067%2C5.65533918%20L15.0751126%2C4.95073328%20C15.5144525%2C4.51139346%2015.5144525%2C3.79908285%2015.0751126%2C3.35974303%20L14.7892316%2C3.07386196%20C14.3498918%2C2.63452214%2013.6375812%2C2.63452214%2013.1982413%2C3.07386196%20L12.4936354%2C3.77846786%20L12.0508553%2C3.53853477%20C11.6687217%2C3.33146468%2011.2659883%2C3.16424625%2010.8482768%2C3.03992922%20L10.3658203%2C2.89634315%20L10.3658203%2C1.90063477%20C10.3658203%2C1.27931442%209.86214066%2C0.775634766%209.24082031%2C0.775634766%20L8.83652344%2C0.775634766%20C8.21520309%2C0.775634766%207.71152344%2C1.27931442%207.71152344%2C1.90063477%20Z%22%20id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22Oval-15%22%20cx%3D%229.03867188%22%20cy%3D%229.11030273%22%20r%3D%221.8%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\");background-size:19px}.menu__btn.hidden{display:none}:host{display:block!important;position:relative!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important;z-index:9999999999!important}";

    if(window.innerWidth < menuMaxWidth) menuMaxWidth = window.innerWidth;
    if(window.innerWidth < settingsMaxWidth) settingsMaxWidth = window.innerWidth;

    var onCloseMenu = new CustomEvent();
    var onShowMenuItem = new CustomEvent();

    var createIframe = function (onIframeLoadCallback) {
        log.debug('Creating iframe');
        iframe = CommonUtils.createElement('iframe');

        // IE hack for prevent access denied error
        // see: https://stackoverflow.com/questions/1886547/access-is-denied-javascript-error-when-trying-to-access-the-document-object-of
        if (navigator.userAgent.match(/msie/i)) {
            iframe.src= "javascript:'<script>window.onload=function(){document.write(\\'<script>document.domain=\\\"" + document.domain + "\\\";<\\\\/script>\\');document.close();};<\/script>'";
        }

        var iframePosition = getIframePosition();
        var css = {
            left: iframePosition.left + 'px',
            top: iframePosition.top + 'px'
        };
        var attributes = {
            id: settings.Constants.IFRAME_ID,
            'class': selector.ignoreClassName(),
            frameBorder: 0,
            allowTransparency: 'true'
        };
        Object.keys(css).forEach(function (item) {
            iframe.style[item] = css[item];
        });
        Object.keys(attributes).forEach(function (item) {
            iframe.setAttribute(item, attributes[item]);
        });
        var iframeAlreadyLoaded = false;
        $(iframe).on('load', function () {
            if (iframeAlreadyLoaded) {
                //IE calls load each time when we use document.close
                return;
            }
            iframeAlreadyLoaded = true;
            appendDefaultStyle();
            onIframeLoadCallback();
        });

        if (CommonUtils.checkShadowDomSupport()) {
            iframeElement = CommonUtils.createElement('div');
            createShadowRootElement(iframeElement).appendChild(iframe);
        } else {
            iframeElement = iframe;
        }

        document.documentElement.appendChild(iframeElement);
    };

    var createShadowRootElement = function(iframeElement) {
        var shadowiframeElement = iframeElement.attachShadow({mode: 'closed'});
        shadowiframeElement.innerHTML = '<style>' + IFRAME_CSS + '</style>';
        return shadowiframeElement;
    };

    var getIframePosition = function() {
        var viewPort = uiValidationUtils.getViewPort();

        if (!buttonPosition) {
            return {
                left: 0,
                top: 0
            };
        }

        var defaultPosition = {
            left: buttonPosition.left,
            top: buttonPosition.top
        };
        var sides = [
            { //left top
                left: buttonPosition.left - iframeMaxWidth - iframePositionOffset,
                top: buttonPosition.top - iframeMaxHeight - iframePositionOffset
            },
            { //right top
                left: buttonPosition.left + iframePositionOffset,
                checkLeft: buttonPosition.left + iframeMaxWidth + iframePositionOffset,
                top: buttonPosition.top - iframeMaxHeight - iframePositionOffset
            },
            { //bottom right
                left: buttonPosition.left + iframePositionOffset,
                checkLeft: buttonPosition.left + iframeMaxWidth + iframePositionOffset,
                checkTop: buttonPosition.top + iframeMaxHeight + iframePositionOffset,
                top: buttonPosition.top + iframePositionOffset
            },
            { //bottom left
                left: buttonPosition.left - iframeMaxWidth - iframePositionOffset,
                checkTop: buttonPosition.top + iframeMaxHeight + iframePositionOffset,
                top: buttonPosition.top + iframePositionOffset
            }
        ];

        for (var i = 0; i < sides.length; i++) {
            var currentSide = sides[i];
            var left = currentSide.checkLeft ? currentSide.checkLeft : currentSide.left;
            var top = currentSide.checkTop ? currentSide.checkTop : currentSide.top;

            if (left < 0 || left > viewPort.width) {
                continue;
            }
            if (top < 0 || top > viewPort.height) {
                continue;
            }
            return currentSide;
        }

        return defaultPosition;
    };

    var specifyIframePosition = function () {
        var viewPort = uiValidationUtils.getViewPort();
        var frameElement = iframe;
        if ((frameElement.offsetLeft + frameElement.offsetWidth) > viewPort.width) {
            frameElement.style.left = Math.max(0, (viewPort.width - frameElement.offsetWidth - iframePositionOffset)) + 'px';
        }
        if (frameElement.offsetLeft < 0) {
            frameElement.style.left = iframePositionOffset + 'px';
        }
        if ((frameElement.offsetTop + frameElement.offsetHeight) > viewPort.height) {
            frameElement.style.top = Math.max(0, (viewPort.height - frameElement.offsetHeight - iframePositionOffset)) + 'px';
        }
        if (frameElement.offsetHeight < 0) {
            frameElement.style.top = iframePositionOffset + 'px';
        }

    };

    var appendDefaultStyle = function () {
        try {
            log.info('Iframe loaded writing styles');
            var doc = iframe.contentDocument;
            doc.open();
            doc.write('<html><head><style type="text/css">' + getStyleNonce() + IFRAME_CSS + '</style></head></html>');
            doc.close();
            iframe.style.setProperty('display', 'block', 'important');
        } catch (ex) {
            log.error(ex);
        }
    };

    var getStyleNonce = function () {
        var adgSettings = settings.getAdguardSettings();
        if (adgSettings === null) {
            return '';
        }
        return 'nonce="' + adgSettings.nonce + '"';
    };

    var showMenuItem = function (viewName, controller, width, height, options) {
        log.debug(StringUtils.format("Showing menu item: {0}", viewName));
        if (currentItem === viewName) {
            return;
        }
        var onIframeLoad = function () {
            var frameElement = iframe;

            var view = CommonUtils.createElement(views[viewName]);
            appendContent(view);
            localize();
            specifyIframePosition();
            if (!options) {
                options = {};
            }
            controller.init(frameElement, options);
            currentItem = viewName;
            onShowMenuItem.notify();
            if (options.dragElement) {
                uiUtils.makeIframeDraggable(iframe, iframe.contentDocument.querySelector(options.dragElement));
            }

            resizeIframe(width, height);
        };

        if (!iframe) {
            createIframe(onIframeLoad);
            return;
        }
        onIframeLoad();
    };

    var setButtonPosition = function (coords) {
        buttonPosition = coords;
    };

    var showDetailedMenu = function () {
        var controller = Ioc.get(DetailedMenuController);
        var options = {dragElement: '.menu-head'};
        showMenuItem(settings.MenuItemsNames.DetailedMenu, controller, iframeMaxWidth, 'auto', options);
        setCloseEventIfNotHitIframe(true);
    };

    var showSelectorMenu = function () {
        var controller = Ioc.get(SelectorMenuController);
        var options = {dragElement: '.head'};
        showMenuItem(settings.MenuItemsNames.SelectorMenu, controller, menuMaxWidth, 160, options);
        setCloseEventIfNotHitIframe(false);
    };

    var showSliderMenu = function (element) {
        var controller = Ioc.get(SliderMenuController);
        var options = {element: element, dragElement: '.head'};
        showMenuItem(settings.MenuItemsNames.SliderMenu, controller, menuMaxWidth, 'auto', options);
        setCloseEventIfNotHitIframe(true);
    };

    var showBlockPreview = function (element, path, currentElement) {
        var controller = Ioc.get(BlockPreviewController);
        var options = {element: element, path: path, dragElement: '.head', currentElement: currentElement};
        showMenuItem(settings.MenuItemsNames.BlockPreview, controller, menuMaxWidth, 'auto', options);
        setCloseEventIfNotHitIframe(true);
    };

    var showSettingsMenu = function () {
        var controller = Ioc.get(SettingsMenuController);
        var options = {dragElement: '.head'};
        showMenuItem(settings.MenuItemsNames.SettingsMenu, controller, 400, 360, options);
        setCloseEventIfNotHitIframe(true);
    };

    var localize = function () {
        var elements = iframe.contentDocument.querySelectorAll("[i18n]");
        for (var i = 0; i < elements.length; i++) {
            var message = localization.getMessage(elements[i].getAttribute("i18n"));
            localization.translateElement(elements[i], message);
        }
    };

    var resizeIframe = function(width, height) {
        var frame = iframe;

        // setting iframe height dynamically based on inner content
        if (height === 'auto' || !height) {
            height = frame.contentWindow.document.body.querySelector('.main').clientHeight || iframeMaxHeight;
        }

        if (width) {
            frame.width = width;
            frame.style.setProperty('width', width + 'px', 'important');
        }

        if (height) {
            frame.height = height;
            frame.style.setProperty('height', height + 'px', 'important');
        }
    };

    var resizeSliderMenuToAdvanced = function () {
        resizeIframe(null, sliderMenuHeight.advanced);
    };

    var resizeSliderMenuToNormal = function () {
        resizeIframe(null, sliderMenuHeight.normal);
    };

    var appendContent = function (view) {
        var body = iframe.contentDocument.body;
        for (var i = 0; i < body.children.length; i++) {
            body.removeChild(body.children[i]);
        }
        body.appendChild(view);
    };

    var setCloseEventIfNotHitIframe = function (setEvent) {
        document.removeEventListener('click', removeIframe);

        if(setEvent) {
            window.setTimeout(function () {
                document.addEventListener('click', removeIframe);
            }, 150);
        }
    };

    // e.isTrusted checking for prevent programmatically events
    // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
    var removeIframe = function(e) {
        if (e && e.isTrusted === false) return false;
        document.removeEventListener('click', removeIframe);
        document.documentElement.removeChild(iframeElement);
        iframe = null;
        iframeElement = null;
        currentItem = null;
        selector.close();
        onCloseMenu.notify();
    };

    return {
        showDetailedMenu: showDetailedMenu,
        showSelectorMenu: showSelectorMenu,
        showSliderMenu: showSliderMenu,
        showBlockPreview: showBlockPreview,
        showSettingsMenu: showSettingsMenu,
        setButtonPosition: setButtonPosition,
        onCloseMenu: onCloseMenu,
        onShowMenuItem: onShowMenuItem,
        removeIframe: removeIframe,
        resizeSliderMenuToAdvanced: resizeSliderMenuToAdvanced,
        resizeSliderMenuToNormal: resizeSliderMenuToNormal,
        resizeIframe: resizeIframe
    };
};

/**
 * Gm api wrapper
 * @param ADG_addRule
 * @param ADG_temporaryDontBlock
 * @param ADG_sendAbuse
 * @param ADG_isFiltered
 * @param ADG_changeFilteringState
 * @returns {{GM_getValue, GM_setValue, GM_getResourceText, GM_addStyle, ADG_addRule: *, ADG_temporaryDontBlock: *, ADG_sendAbuse: *, ADG_isFiltered: *, ADG_changeFilteringState: *}}
 * @constructor
 */
/* global GM_getValue, GM_setValue, GM_getResourceText, GM_addStyle */
var GM = function (ADG_addRule, ADG_temporaryDontBlock, ADG_sendAbuse, ADG_isFiltered, ADG_changeFilteringState) { // jshint ignore:line
    if (!ADG_addRule) {
        ADG_addRule = function (rule, callback) {
            alert('GM_api is not supported. ' + rule + ' rule added');
            if(callback) callback();
        };
    }

    if (!ADG_sendAbuse) {
        ADG_sendAbuse = function (url, callback) {
            alert('GM_api is not supported. ' + url + 'abused');
            if(callback) callback();
        };
    }

    if (!ADG_temporaryDontBlock) {
        ADG_temporaryDontBlock = function (timeout, callback) {
            alert('GM_api is not supported. ' + 'Do not block for ' + timeout + ' seconds');
            if(callback) callback();
        };
    }

    if (!ADG_isFiltered) {
        ADG_isFiltered = function (callback) {
            if(callback) callback();
            return true;
        };
    }

    if (!ADG_changeFilteringState) {
        ADG_changeFilteringState = function (callback) {
            alert('GM_api is not supported. ' + 'State changed');
            if(callback) callback();
        };
    }

    return {
        GM_getValue: GM_getValue,
        GM_setValue: GM_setValue,
        GM_getResourceText: GM_getResourceText,
        GM_addStyle: GM_addStyle,
        ADG_addRule: ADG_addRule,
        ADG_temporaryDontBlock: ADG_temporaryDontBlock,
        ADG_sendAbuse: ADG_sendAbuse,
        ADG_isFiltered: ADG_isFiltered,
        ADG_changeFilteringState: ADG_changeFilteringState
    };
};

/**
 * Slider widget
 * @type {Function}
 */
var SliderWidget = (function(api, $) { // jshint ignore:line
    var PLACEHOLDER_CLASS = "adg-slide ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all";
    var HANDLE_CLASS = "ui-slider-handle";
    var HANDLE_FULL_CLASS = "ui-slider-handle ui-state-default ui-corner-all";
    var TICK_CLASS = "tick";
    var TICK_FULL_CLASS = "tick ui-widget-content";
    var TICK_LEFT_COLOR = "#36BA53";
    var TICK_RIGHT_COLOR = "#E0DFDB";

    var placeholder = null;

    var min = 0;
    var max = 1;
    var value = 0;
    var sliderArea = null;

    var onValueChanged = null;


    var refresh = function() {
        var handle = placeholder.querySelectorAll("." + HANDLE_CLASS);
        $(handle).css('left', (value - 1) * 100 / (max - min) + "%");

        var ticks = placeholder.querySelectorAll("." + TICK_CLASS);
        for (var i = 0; i < ticks.length; i++) {
            if (i + 1 < value) {
                $(ticks[i]).css('background-color', TICK_LEFT_COLOR);
            } else {
                $(ticks[i]).css('background-color', TICK_RIGHT_COLOR);
            }
        }
    };

    var render = function() {
        $(placeholder).addClass(PLACEHOLDER_CLASS);

        var handle = CommonUtils.createElement('span');
        handle.setAttribute('class', HANDLE_FULL_CLASS);
        placeholder.appendChild(handle);

        var count = max - min;
        var prepare = function(i) {
            var tick = CommonUtils.createElement('div');
            tick.setAttribute('class', TICK_FULL_CLASS);
            tick.style.left = (100 / count * i) + '%';
            tick.style.width = (100 / count) + '%';

            placeholder.appendChild(tick);
        };

        for (var i = 0; i < count; i++) {
            prepare(i);
        }

        refresh();
    };

    var setValue = function(v) {
        if (v < min) {
            value = min;
        } else if (v > max) {
            value = max;
        } else {
            value = v;
        }

        refresh();

        onValueChanged(value);
    };

    var bindEvents = function() {
        var $placeholder = $(placeholder);
        var handle = placeholder.querySelectorAll("." + HANDLE_CLASS);
        var $handle = $(handle);
        var $sliderArea = $(sliderArea);

        $(document).on('mouseup touchend pointerup', function() {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
        });

        var rect = placeholder.getBoundingClientRect();
        var sliderWidth = rect.width;
        var offsetLeft = rect.left + document.body.scrollLeft;

        var getSliderValue = function(pageX) {
            return Math.round((max - min) / sliderWidth * (pageX - offsetLeft) + min);
        };

        var onClick = function(e) {
            //calculate the correct position of the slider set the value
            var value = getSliderValue(e.pageX);
            setValue(value);
        };

        var onMouseMove = function(e) {
            //calculate the correct position of the slider set the value
            var value = getSliderValue(e.pageX);
            setValue(value);
        };

        var onMouseDown = function(e) {
            e.stopPropagation();
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = false;

            $sliderArea.on('mousemove touchmove pointermove', onMouseMove);
        };

        $placeholder.on('click', onClick);
        $placeholder.on('mousedown touchstart', onMouseDown);

        $sliderArea.on('mouseup touchend pointerup', function() {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
        });

        $sliderArea.on('mouseleave', function() {
            $sliderArea.off('mousemove touchmove pointermove', onMouseMove);
        });
    };

    /**
     *
     * @param placeholderElement
     * @param options
     */
    api.init = function(placeholderElement, options) {
        placeholder = placeholderElement;

        min = options.min;
        max = options.max;
        value = options.value;
        onValueChanged = options.onValueChanged;
        sliderArea = options.sliderArea;

        render();
        bindEvents();
    };

    return api;
});

/**
 * Object that manages wot data
 * @returns {{registerWotEventHandler: Function, getWotData: Function, getWotScorecardUrl: Function, WOT_URL: string}}
 * @constructor
 */
/* global StringUtils */
var Wot = function () { // jshint ignore:line
    var wotUrlScorecardTemplate = 'http://adguard.com/wot-scorecard.html?domain={0}';
    var WOT_URL = 'http://adguard.com/wot.html';
    var wotData = null;

    /*
     Waiting for event from wot extension. Send event back to stop
     firing wot extension events
     */
    var registerWotEventHandler = function () {
        document.addEventListener('wot-score', function (e) {
            wotData = e.data.wotData;
            fireEvent('wot-accepted', null);
        });
    };

    var getWotData = function () {
        return wotData;
    };

    var getWotScorecardUrl = function (url) {
        return StringUtils.format(wotUrlScorecardTemplate, url);
    };

    var fireEvent = function (name, data) {
        var event = document.createEvent("Events");
        event.initEvent(name, true, true);
        event.data = data;
        document.dispatchEvent(event);
    };

    return {
        registerWotEventHandler: registerWotEventHandler,
        getWotData: getWotData,
        getWotScorecardUrl: getWotScorecardUrl,
        WOT_URL: WOT_URL
    };
};

/**
 * Object that manages localizations
 * @returns {{getMessage: Function, translateElement: Function}}
 * @constructor
 */
/* global en, ru, uk, pl, de, zh_CN, zh_TW, he, it, fa, tr, ja, ar, es_419, pt_BR, pt_PT, ko, AdguardSettings */

var Localization = function() { // jshint ignore:line
    var currentLocale = null, locale;
    var SupportedLocales = {
        'en': en,
        'ru': ru,
        'uk': uk,
        'pl': pl,
        'de': de,
        'zh': zh_CN,
        'zh-tw': zh_TW,
        'he': he,
        'it': it,
        'fa': fa,
        'tr': tr,
        'ja': ja,
        'ar': ar,
        'es': es_419,
        'pt-br': pt_BR,
        'pt': pt_PT,
        'ko': ko,
        'sk': sk,
        'no': no,
        'da': da,
        'fr': fr,
        'id': id,
        'sv': sv,
        'sr': sr_Latn
    };

    if (typeof AdguardSettings !== 'undefined') {
        locale = AdguardSettings.locale.toLocaleLowerCase();
    } else if (navigator.languages) {
        locale = navigator.languages[0];
    } else if (navigator.language) {
        locale = navigator.language.split('-')[0];
    }

    if (SupportedLocales[locale]) {
        currentLocale = locale;
    } else {

        var langSplit = locale.split('-')[0];
        if (SupportedLocales[langSplit]) {
            currentLocale = langSplit;
        } else {
            currentLocale = 'en';
        }
    }

    var getMessage = function (messageId) {
        var message = SupportedLocales[currentLocale][messageId];
        if (!message) {
            return messageId;
        }
        return SupportedLocales[currentLocale][messageId].message || SupportedLocales[currentLocale][messageId];
    };

    var translateElement = function (element, message) {
        try {
            while (element.lastChild) {
                element.removeChild(element.lastChild);
            }
            processString(message, element);
        } catch (ex) {
            // Ignore exceptions
        }
    };

    var processString = function (str, element) {
        var el;

        var match1 = /^([^]*?)<(a|strong|span|i)([^>]*)>(.*?)<\/\2>([^]*)$/m.exec(str);
        var match2 = /^([^]*?)<(br|input)([^>]*)\/?>([^]*)$/m.exec(str);
        if (match1) {

            processString(match1[1], element);

            el = createElement(match1[2], match1[3]);

            processString(match1[4], el);
            element.appendChild(el);

            processString(match1[5], element);

        } else if (match2) {

            processString(match2[1], element);

            el = createElement(match2[2], match2[3]);
            element.appendChild(el);

            processString(match2[4], element);

        } else {
            element.appendChild(document.createTextNode(str.replace(/&nbsp;/g, '\u00A0')));
        }
    };

    var createElement = function (tagName, attributes) {

        var el = CommonUtils.createElement(tagName);
        if (!attributes) {
            return el;
        }

        var attrs = attributes.split(/([a-z]+='[^']+')/);
        for (var i = 0; i < attrs.length; i++) {
            var attr = attrs[i].trim();
            if (!attr) {
                continue;
            }
            var index = attr.indexOf("=");
            var attrName;
            var attrValue;
            if (index > 0) {
                attrName = attr.substring(0, index);
                attrValue = attr.substring(index + 2, attr.length - 1);
            }
            if (attrName && attrValue) {
                el.setAttribute(attrName, attrValue);
            }
        }
        return el;
    };

    return {
        getMessage: getMessage,
        translateElement: translateElement
    };
};

/**
 * Main menu controller
 * @param $
 * @param wot
 * @param localization
 * @param gmApi
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc, StringUtils */
var DetailedMenuController = function($, wot, localization, gmApi, settings, log) { // jshint ignore:line
    var contentDocument = null;
    var iframeCtrl = null;
    var domain = null;
    var FILTERING_STATE_LS_PROPERTY = '__adfstate';

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function(iframe) {
        contentDocument = iframe.contentDocument;
        iframeCtrl = Ioc.get('iframeController');
        setDomain();
        setWotData();
        bindEvents();
        setInitFilteringState();
    };

    var setDomain = function() {
        domain = decodeURIComponent(location.hostname);
        contentDocument.getElementsByClassName('menu-head_name')[0].textContent = domain || 'unknown';
    };

    var bindEvents = function() {
        var menuEvents = {
            '.close': iframeCtrl.removeIframe,
            '#block-ad': startAdSelector,
            '#assistant-settings': iframeCtrl.showSettingsMenu,
            '#WotLogo': goToWotUrl,
            '#do-not-block-30-sec': doNotBlock,
            '#report-abuse': reportAbuse,
            '#site-report': goToSiteReport,
            '#is-filter': onIsFilterChange
        };
        Object.keys(menuEvents).forEach(function(item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var onIsFilterChange = function() {
        var isFilter = contentDocument.getElementById('is-filter').checked;

        // animate class for prevent animation while the state from the application is determined
        $(contentDocument.querySelectorAll(".menu-filter_label")).addClass("animate");

        showHideBlockAdButton(isFilter);
        setFilteringStateToStore(isFilter);
        gmApi.ADG_changeFilteringState(isFilter, function() {
            CommonUtils.reloadPageBypassCache();
        });
    };

    var setInitFilteringState = function() {
        var input = contentDocument.getElementById('is-filter');
        input.checked = getFilteringStateFromStore();
        gmApi.ADG_isFiltered(function(isFiltered) {
            input.checked = isFiltered;
            setFilteringStateToStore(isFiltered);
            showHideBlockAdButton(isFiltered);
        });
    };

    /**
     * Storing the filtering state for quick initialization
     *
     * @param {Boolean} state  on/off filtering state
     */
    var setFilteringStateToStore = function(state) {
        try {
            localStorage.setItem(FILTERING_STATE_LS_PROPERTY, JSON.stringify({
                "state": state
            }));
        } catch (ex) {
            log.error(ex);
            return null;
        }
    };

    /**
     * Getting the filtering state for quick initialization from the localStorage,
     * while the state from the application is determined
     *
     * @returns {Boolean} on/off filtering state
     */
    var getFilteringStateFromStore = function() {
        try {
            var state = localStorage.getItem(FILTERING_STATE_LS_PROPERTY);
            if (state) {
                return JSON.parse(state).state;
            } else {
                return false;
            }
        } catch (ex) {
            log.error(ex);
            return false;
        }
        return false;
    };

    var doNotBlock = function() {
        gmApi.ADG_temporaryDontBlock(30, function() {
            CommonUtils.reloadPageBypassCache();
        });
    };

    var reportAbuse = function() {
        gmApi.ADG_sendAbuse(function() {
            iframeCtrl.removeIframe();
        });
    };

    var goToSiteReport = function() {
        var url = StringUtils.format(settings.Constants.REPORT_URL, domain);
        window.open(url, '_blank');
    };

    var setWotData = function() {
        var wotData = wot.getWotData();
        var wotReputationSettings = getWotReputationSettings(wotData);

        if (wotReputationSettings) {
            var wotIndication = $(contentDocument.getElementById('WotIndication'));
            var wotDescriptionText = contentDocument.getElementById('WotDescriptionText');
            var confidenceIndication = $(contentDocument.getElementById('ConfidenceIndication'));

            contentDocument.getElementsByClassName('wot-indicator')[0].href = wot.getWotScorecardUrl(domain);
            wotIndication.addClass(wotReputationSettings.class);
            var wotLogo = CommonUtils.createElement('<span id="WotLogo"><span class="wot-logo"></span></span>');
            wotDescriptionText.textContent = wotReputationSettings.text;
            wotDescriptionText.appendChild(wotLogo);

            var wotConfidenceClass = getWotConfidenceClass(wotData);
            confidenceIndication.addClass(wotConfidenceClass);

            $(contentDocument.getElementsByClassName('wot-hide')).removeClass('wot-hide');
        }
    };

    var goToWotUrl = function() {
        window.open(wot.WOT_URL, '_blank');
    };

    var getWotReputationSettings = function(wotData) {
        if (!wotData) {
            return null;
        }
        var prefix = 'adg-wot-';
        var averageWot = wotData.reputation;
        var wotRatingText = null;
        var wotRating = null;
        if (averageWot === 0) {
            wotRatingText = localization.getMessage('wot_unknown_description');
            wotRating = prefix + 'unknown';
            return {
                text: wotRatingText,
                class: wotRating
            };
        }
        var wotSettings = {
            0: {
                color: 'red',
                string: localization.getMessage('wot_bad_description')
            },
            1: {
                color: 'lightRed',
                string: localization.getMessage('wot_poor_description')
            },
            2: {
                color: 'yellow',
                string: localization.getMessage('wot_unsatisfactory_description')
            },
            3: {
                color: 'lightGreen',
                string: localization.getMessage('wot_good_description')
            },
            4: {
                color: 'green',
                string: localization.getMessage('wot_excellent_description')
            },
            5: {
                color: 'green',
                string: localization.getMessage('wot_excellent_description')
            }
        };
        var current = wotSettings[truncateDecimals(averageWot / 20)];
        wotRatingText = current.string;
        wotRating = prefix + current.color;
        return {
            text: wotRatingText,
            class: wotRating
        };
    };

    var truncateDecimals = function(number) {
        return Math[number < 0 ? 'ceil' : 'floor'](number);
    };

    var getWotConfidenceClass = function(wotData) {
        if (!wotData) {
            return null;
        }
        var prefix = 'adg-wot-confidence-';
        var confidenceWot = wotData.confidence;
        if (confidenceWot >= 0 && confidenceWot < 6) {
            return prefix + '0';
        }
        if (confidenceWot >= 6 && confidenceWot < 12) {
            return prefix + '1';
        }
        if (confidenceWot >= 12 && confidenceWot < 23) {
            return prefix + '2';
        }
        if (confidenceWot >= 23 && confidenceWot < 34) {
            return prefix + '3';
        }
        if (confidenceWot >= 34 && confidenceWot < 45) {
            return prefix + '4';
        }
        if (confidenceWot >= 45) {
            return prefix + '5';
        }
    };

    var startAdSelector = function() {
        iframeCtrl.showSelectorMenu();
    };

    var showHideBlockAdButton = function(isFilter) {
        if (isFilter) {
            $(contentDocument.getElementById('block-ad')).removeClass('hidden');
        } else {
            $(contentDocument.getElementById('block-ad')).addClass('hidden');
        }

        iframeCtrl.resizeIframe();
    };

    return {
        init: init
    };
};

/**
 * Selector menu controller
 * @param $
 * @param selector
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc */
var SelectorMenuController = function ($, selector) { // jshint ignore:line
    var contentDocument = null;
    var iframeCtrl = Ioc.get('iframeController');

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe) {
        contentDocument = iframe.contentDocument;
        bindEvents();
        startSelector();
    };

    var close = function () {
        iframeCtrl.removeIframe();
    };

    var bindEvents = function () {
        var menuEvents = {
            '.close': close,
            '.btn-default': close
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };
    var startSelector = function () {
        selector.reset();
        selector.init(onElementSelected);
    };

    var onElementSelected = function (element) {
        iframeCtrl.showSliderMenu(element);
    };

    iframeCtrl.onCloseMenu.attach(selector.close);

    return {
        init: init,
        startSelector: startSelector
    };
};

/**
 * Slider menu controller
 * @param $
 * @param selector
 * @param sliderWidget
 * @param settings
 * @param adguardRulesConstructor
 * @param localization
 * @param gmApi
 * @param addRule
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc, CommonUtils */
var SliderMenuController = function ($, selector, sliderWidget, settings, adguardRulesConstructor, localization, gmApi, addRule) { // jshint ignore:line
    var contentDocument = null;
    var selectedElement = null;
    var startElement = null;
    var iframeCtrl = Ioc.get('iframeController');

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe, options) {
        selectedElement = options.element;
        startElement = selectedElement;
        contentDocument = iframe.contentDocument;
        bindEvents();
        createSlider();
        onScopeChange();
        selector.selectElement(selectedElement);
    };

    var close = function () {
        iframeCtrl.removeIframe();
    };

    var bindEvents = function () {
        var menuEvents = {
            '.close': close,
            '#ExtendedSettingsText': expandAdvanced,
            '#adv-settings': onScopeChange,
            '#adg-cancel': iframeCtrl.showSelectorMenu,
            '#adg-preview': showPreview,
            '#adg-accept': blockElement
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var blockElement = function () {
        if (gmApi.ADG_addRule) {
            gmApi.ADG_addRule(getFilterRuleInputText(), function () {
                iframeCtrl.removeIframe();
                CommonUtils.reloadPageBypassCache();
            });
        } else {
            addRule(getFilterRuleInputText());
            iframeCtrl.removeIframe();
        }
    };

    var expandAdvanced = function () {
        var hidden = !$(contentDocument.getElementById('adv-settings')).hasClass("open");
        if (hidden) {
            iframeCtrl.resizeSliderMenuToAdvanced();
            $(contentDocument.getElementById('adv-settings')).addClass('open');
            $(contentDocument.getElementById('ExtendedSettingsText')).addClass('active');
        } else {
            iframeCtrl.resizeSliderMenuToNormal();
            $(contentDocument.getElementById('adv-settings')).removeClass('open');
            $(contentDocument.getElementById('ExtendedSettingsText')).removeClass('active');
        }
    };

    var showPreview = function () {
        iframeCtrl.showBlockPreview(selectedElement, getFilterRuleInputText(), startElement);
    };

    var createSlider = function () {
        var parents = CommonUtils.getParentsLevel(selectedElement);
        var children = CommonUtils.getAllChildren(selectedElement);

        var value = Math.abs(parents.length + 1);
        var max = parents.length + children.length + 1;
        var min = 1;
        var options = {value: value, min: min, max: max};
        var slider = contentDocument.getElementById('slider');
        var sliderArea = contentDocument.getElementById('slider-area');

        if (min === max) {
            //hide slider text
            $(slider).hide();
            $(contentDocument.getElementsByClassName('element-rule_text')).hide();
            expandAdvanced();
        }

        options.onSliderMove = function (delta) {
            var elem;
            if (delta > 0) {
                elem = parents[delta - 1];
            }
            if (delta === 0) {
                elem = startElement;
            }
            if (delta < 0) {
                elem = children[Math.abs(delta + 1)];
            }

            onSliderMove(elem);
        };

        sliderWidget.init(slider, {
            min: options.min,
            max: options.max,
            value: options.value,
            onValueChanged: function (value) {
                var delta = options.value - value;
                options.onSliderMove(delta);
            },
            sliderArea: sliderArea
        });
    };

    var onSliderMove = function (element) {
        selectedElement = element;
        selector.selectElement(element);

        makeDefaultCheckboxesForDetailedMenu();
        onScopeChange();
        handleShowBlockSettings(haveUrlBlockParameter(element), haveClassAttribute(element));
    };

    var makeDefaultCheckboxesForDetailedMenu = function () {
        contentDocument.getElementById('block-by-url-checkbox').checked = false;
        contentDocument.getElementById('block-similar-checkbox').checked = false;
        contentDocument.getElementById('one-domain-checkbox').checked = false;
    };

    var onScopeChange = function () {

        var isBlockByUrl = contentDocument.getElementById('block-by-url-checkbox').checked;
        var isBlockSimilar = contentDocument.getElementById('block-similar-checkbox').checked;
        var isBlockOneDomain = contentDocument.getElementById('one-domain-checkbox').checked;

        handleShowBlockSettings(haveUrlBlockParameter(selectedElement) && !isBlockSimilar, haveClassAttribute(selectedElement) && !isBlockByUrl);

        var options = {
            urlMask: getUrlBlockAttribute(selectedElement),
            cssSelectorType: isBlockSimilar ? "SIMILAR" : "STRICT_FULL",
            isBlockOneDomain: isBlockOneDomain,
            url: document.location,
            ruleType: isBlockByUrl ? "URL" : "CSS"
        };

        var ruleText = adguardRulesConstructor.constructRuleText(selectedElement, options);
        setFilterRuleInputText(ruleText);
    };

    var haveUrlBlockParameter = function (element) {
        var value = getUrlBlockAttribute(element);
        return value && value !== '';
    };

    var getUrlBlockAttribute = function (element) {
        var urlBlockAttributes = ["src", "data"];
        for (var i = 0; i < urlBlockAttributes.length; i++) {
            var attr = urlBlockAttributes[i];
            var value = element.getAttribute(attr);
            if (value) {
                return value;
            }
        }
        return null;
    };

    var haveClassAttribute = function (element) {
        var className = element.className;
        return className && className.trim() !== '';
    };

    var handleShowBlockSettings = function (showBlockByUrl, showBlockSimilar) {
        var blockByUrlBlock = $(contentDocument.getElementById('block-by-url-checkbox-block'));
        var blockSimilarBlock = $(contentDocument.getElementById('block-similar-checkbox-block'));
        if (showBlockByUrl) {
            blockByUrlBlock.show();
        } else {
            contentDocument.getElementById('block-by-url-checkbox').checked = false;
            blockByUrlBlock.hide();
        }
        if (showBlockSimilar) {
            blockSimilarBlock.show();
        } else {
            contentDocument.getElementById('block-similar-checkbox').checked = false;
            blockSimilarBlock.hide();
        }
    };

    var setFilterRuleInputText = function (ruleText) {
        contentDocument.getElementById('filter-rule').value = ruleText;
    };

    var getFilterRuleInputText = function () {
        return contentDocument.getElementById('filter-rule').value;
    };

    return {
        init: init
    };
};

/**
 * Slider menu controller mobile
 * @param $
 * @param selector
 * @param adguardRulesConstructor
 * @param localization
 * @param addRule
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc, CommonUtils */
var SliderMenuControllerMobile = function ($, selector, adguardRulesConstructor, localization, addRule) { // jshint ignore:line
    var contentDocument = null;
    var selectedElement = null;
    var iframeCtrl = Ioc.get('iframeController');

    var nodeParentsCount = 0;
    var nodeChildsCount = 0;
    var parents, children;
    var nodeNumber = 0;

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe, options) {
        selectedElement = options.element;
        contentDocument = iframe.contentDocument;
        bindEvents();
        selector.selectElement(selectedElement);

        children = CommonUtils.getAllChildren(selectedElement);
        parents = CommonUtils.getParentsLevel(selectedElement);

        parents.splice(0,0,selectedElement);

        nodeParentsCount = parents.length;
        nodeChildsCount = children.length;
    };

    var close = function () {
        iframeCtrl.removeIframe();
    };

    var plus = function() {
        (nodeNumber + 1) > nodeParentsCount ? nodeNumber = nodeNumber : nodeNumber++;

        if (nodeNumber >= 0) {
            if (parents[nodeNumber]) onSliderMove(parents[nodeNumber]);
        } else {
            if (children[~nodeNumber]) onSliderMove(children[~nodeNumber]);
        }
    };

    var minus = function() {
        nodeNumber <= -nodeChildsCount ? nodeNumber = nodeNumber : nodeNumber--;

        if (nodeNumber >= 0) {
            if (parents[nodeNumber]) onSliderMove(parents[nodeNumber]);
        } else {
            if (children[~nodeNumber]) onSliderMove(children[~nodeNumber]);
        }
    };

    var bindEvents = function () {
        var menuEvents = {
            '.adg-close': iframeCtrl.showSelectorMenu,
            '.adg-preview': showPreview,
            '.adg-accept': blockElement,
            '.adg-plus': plus,
            '.adg-minus': minus
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });

        window.addEventListener('orientationchange', iframeCtrl.showSelectorMenu);
    };

    var blockElement = function () {
        addRule(getFilterText());
        iframeCtrl.removeIframe();
    };

    var showPreview = function () {
        selector.reset();

        if (this.classList.contains('active')) {
            selectedElement.classList.remove('sg_hide_element');
            this.classList.remove('active');
            selector.selectElement(selectedElement);
            contentDocument.querySelector('.adg-plus').removeAttribute('disabled');
            contentDocument.querySelector('.adg-minus').removeAttribute('disabled');
            contentDocument.querySelector('.adg-close').removeAttribute('disabled');
        } else {
            selectedElement.classList.add('sg_hide_element');
            this.classList.add('active');
            contentDocument.querySelector('.adg-plus').setAttribute('disabled','disabled');
            contentDocument.querySelector('.adg-minus').setAttribute('disabled','disabled');
            contentDocument.querySelector('.adg-close').setAttribute('disabled','disabled');
        }
    };

    var onSliderMove = function (element) {
        selectedElement = element;
        selector.selectElement(element);
    };

    var getFilterText = function () {
        var options = {
            urlMask: getUrlBlockAttribute(selectedElement),
            cssSelectorType: "STRICT_FULL",
            isBlockOneDomain: false,
            url: document.location,
            ruleType: "CSS"
        };

        return adguardRulesConstructor.constructRuleText(selectedElement, options);
    };

    var getUrlBlockAttribute = function (element) {
        var urlBlockAttributes = ["src", "data"];
        for (var i = 0; i < urlBlockAttributes.length; i++) {
            var attr = urlBlockAttributes[i];
            var value = element.getAttribute(attr);
            if (value) {
                return value;
            }
        }
        return null;
    };

    return {
        init: init
    };
};

/**
 * Block preview controller
 * @param $
 * @param selector
 * @param gmApi
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc */
var BlockPreviewController = function ($, selector, gmApi) { // jshint ignore:line
    var contentDocument = null;
    var selectedElement = null;
    var selectedPath = null;
    var iframeCtrl = Ioc.get('iframeController');

    /*
     Called from IframeController.showMenuItem to initialize view
     */
    var init = function (iframe, options) {
        selectedElement = options.element;
        selectedPath = options.path;
        currentElement = options.currentElement;
        contentDocument = iframe.contentDocument;
        selector.reset();
        bindEvents();
        hideElement();
    };

    var close = function () {
        showElement();
        iframeCtrl.removeIframe();
    };

    var bindEvents = function () {
        var menuEvents = {
            '.close': close,
            '#select-another-element': selectAnotherElement,
            '#end-preview': showDetailedMenu,
            '#block-element': blockElement
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var hideElement = function () {
        if (!selectedElement) {
            return;
        }
        $(selectedElement).addClass('sg_hide_element');
    };

    var showElement = function () {
        if (!selectedElement) {
            return;
        }
        $(selectedElement).removeClass('sg_hide_element');
    };

    var selectAnotherElement = function () {
        showElement();
        iframeCtrl.showSelectorMenu();
    };

    var blockElement = function () {
        gmApi.ADG_addRule(selectedPath, function() {
            iframeCtrl.removeIframe();
            CommonUtils.reloadPageBypassCache();
        });
    };

    var showDetailedMenu = function () {
        showElement();
        iframeCtrl.showSliderMenu(currentElement);
    };

    return {
        init: init
    };
};

/**
 * Settings menu controller
 * @param $
 * @param settings
 * @param button
 * @returns {{init: init}}
 * @constructor
 */
/* global Ioc */
var SettingsMenuController = function ($, settings, button) { // jshint ignore:line
    var contentDocument = null;
    var iframeCtrl = Ioc.get('iframeController');
    var buttonSides = {
        'position-bottom-right': {top: false, left: false},
        'position-bottom-left': {top: false, left: true},
        'position-top-right': {top: true, left: false},
        'position-top-left': {top: true, left: true}
    };

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe) {
        contentDocument = iframe.contentDocument;
        bindEvents();
        setDefaultSettings();
    };

    var close = function () {
        iframeCtrl.removeIframe();
    };

    var bindEvents = function () {
        var menuEvents = {
            '.close': close,
            '#cancel': iframeCtrl.showDetailedMenu,
            '#save-settings': saveSettings
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var saveSettings = function () {
        var largeIcon = contentDocument.getElementById('size-big').checked;
        var sideItem = null;
        Object.keys(buttonSides).forEach(function (item) {
            if (contentDocument.getElementById(item).checked) {
                sideItem = item;
            }
        });
        var config = settings.getSettings();
        config.largeIcon = largeIcon;
        if (sideItem) {
            config.buttonPositionTop = buttonSides[sideItem].top;
            config.buttonPositionLeft = buttonSides[sideItem].left;
            settings.removeUserPositionForButton();
        }
        settings.saveSettings(config);
        close();
        button.remove();
        button.show();
    };

    var setDefaultSettings = function () {
        var currentSettings = settings.getSettings();
        if (currentSettings.largeIcon) {
            contentDocument.getElementById('size-big').checked = true;
        } else {
            contentDocument.getElementById('size-small').checked = true;
        }
        var position = settings.getUserPositionForButton();
        if (position) {
            return;
        }
        var sideFromSettings = {top: currentSettings.buttonPositionTop, left: currentSettings.buttonPositionLeft};
        Object.keys(buttonSides).forEach(function (item) {
            var sideItem = buttonSides[item];
            if ((sideItem.left === sideFromSettings.left) && (sideItem.top === sideFromSettings.top)) {
                contentDocument.getElementById(item).checked = true;
            }
        });
    };

    return {
        init: init
    };
};

/**
 * Adguard assistant button
 * @param log Logger
 * @param settings User settings
 * @param uiValidationUtils Validation utils
 * @param $ balalaika
 * @param gmApi Gm API impl
 * @param uiUtils UI Utils
 * @param iframeController Iframe controller
 * @returns {{show: show, remove: remove}}
 * @constructor
 */
var UIButton = function(log, settings, uiValidationUtils, $, gmApi, uiUtils, iframeController) { // jshint ignore:line
    var button = null;
    var buttonElement = null;
    var isFullScreenEventsRegistered = false;

    /**
     * Shows Adguard initial button
     */
    var show = function() {
        if (!checkRequirements()) {
            log.info("Environment doesn't satisfy requirements, so don't show Adguard");
            return;
        }
        if (button) {
            return;
        }
        log.debug("Requirements checked, all ok");

        var buttonTemplate = "<div class=\"adguard-alert adguard-assistant-button-fixed\"></div>";
        var buttonCSS = "@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,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) format(\'woff\');font-weight:400;font-style:normal}@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,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) format(\'woff\');font-weight:600;font-style:normal}@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,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) format(\'woff\');font-weight:700;font-style:normal}.weight-regular{font-family:\"Open Sans\",Arial,sans-serif;font-weight:400}.weight-medium{font-family:\"Open Sans\",Arial,sans-serif;font-weight:600}.weight-bold{font-family:\"Open Sans\",Arial,sans-serif;font-weight:700}:host{display:block!important;position:relative!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important;z-index:9999999999!important}.adguard-alert{cursor:pointer;left:0;top:0;position:fixed!important;z-index:2147483646!important;width:40px!important;height:40px!important;zoom:1!important;display:inline-block!important;margin:0!important;border:0!important;padding:0!important;will-change:transform;opacity:1;touch-action:none;-ms-touch-action:none;visibility:visible!important;min-height:auto!important;max-height:auto!important;min-width:auto!important;max-width:auto!important;background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2035%2036%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard-Copy-5%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-164.000000%2C%20-219.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-3%22%20transform%3D%22translate(40.000000%2C%20190.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate(124.500000%2C%2029.414062)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-9%22%20transform%3D%22translate(0.453656%2C%200.226828)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-8%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-7%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.7157492%2C0%20C11.4909195%2C0%205.18846877%2C1.26558351%205.12620114e-06%2C4.05122239%20C5.12620114e-06%2C10.0674495%20-0.0716136324%2C25.0556925%2016.7157492%2C35.2966798%20C33.503483%2C25.0556925%2033.4322354%2C10.0674495%2033.4322354%2C4.05122239%20C28.2434006%2C1.26558351%2021.9409499%2C0%2016.7157492%2C0%20L16.7157492%2C0%20Z%22%20id%3D%22Path%22%20fill%3D%22%2368BC71%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.6986743%2C35.2862582%20C-0.0715650605%2C25.0455268%205.12620113e-06%2C10.0654091%205.12620113e-06%2C4.05122239%20C5.18281802%2C1.26861734%2011.4771929%2C0.00275849124%2016.6986743%2C4.50378311e-06%20L16.6986743%2C35.2862617%20Z%22%20id%3D%22Combined-Shape%22%20fill%3D%22%2367B279%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.1060247%2C23.551094%20L26.2143155%2C9.51801869%20C25.4736005%2C8.90647249%2024.8238876%2C9.33808916%2024.4662281%2C9.672244%20L24.4531774%2C9.67331501%20L16.0248987%2C18.7044208%20L12.8493477%2C14.7681053%20C11.3344091%2C12.96524%209.27486866%2C14.3404157%208.79375662%2C14.7038448%20L16.1060247%2C23.551094%22%20id%3D%22Fill-11%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\")!important;background-size:21px!important;background-position:50% 11px!important;background-repeat:no-repeat!important;background-color:#fff!important;border:none!important;box-shadow:0 0 10px 3px rgba(162,161,161,.3)!important;border-radius:100%!important;transition:background .3s ease}.adguard-alert.sg_hide_element{display:none!important}.adguard-alert.logo-small{width:30px!important;height:30px!important;background-position:50% 8px!important;background-size:16px!important}.adguard-alert:hover{background-color:#ccf0d4!important}.adguard-assistant-button-right{left:auto;right:0}.adguard-assistant-button-left{left:0;right:auto}.adguard-assistant-button-top{top:0;bottom:auto}.adguard-assistant-button-bottom{top:auto;bottom:0}.adguard-assistant-button-top.adguard-assistant-button-left{left:0;right:auto;transform:translate3d(10px,10px,0)}.adguard-assistant-button-top.adguard-assistant-button-right{left:auto;right:0;transform:translate3d(-10px,10px,0)}.adguard-assistant-button-bottom.adguard-assistant-button-left{left:0;right:auto;transform:translate3d(10px,-10px,0)}.adguard-assistant-button-bottom.adguard-assistant-button-right{left:auto;right:0;transform:translate3d(-10px,-10px,0)}.adguard-assistant-button-bottom.adguard-assistant-button-respect-vk{transform:translate3d(-70px,-5px,0)}.adguard-assistant-button-bottom.adguard-assistant-button-respect-fb{transform:translate3d(-5px,-40px,0)}";

        buttonElement = CommonUtils.createElement('div');
        buttonElement.innerHTML = buttonTemplate;
        button = buttonElement.firstChild;

        if (CommonUtils.checkShadowDomSupport()) {
            var shadowbuttonElement = buttonElement.attachShadow({mode: 'closed'});
            shadowbuttonElement.innerHTML = '<style>' + buttonCSS + '</style>';
            shadowbuttonElement.appendChild(button);
            document.documentElement.appendChild(buttonElement);
        } else {
            gmApi.GM_addStyle(buttonCSS);
            document.documentElement.appendChild(button);
            buttonElement = button;
        }

        setPositionSettingsToButton(button);
        registerEvents(button);
    };

    /**
     * Checking browser and other requirements.
     * @private
     */
    var checkRequirements = function() {
        if (!uiValidationUtils.validateBrowser()) {
            return false;
        }

        if (!uiValidationUtils.validatePage()) {
            return false;
        }

        if (!uiValidationUtils.checkVisibleAreaSize()) {
            return false;
        }

        if (isButtonAlreadyInDOM()) {
            return false;
        }
        return true;
    };

    var isButtonAlreadyInDOM = function() {
        var already =  $('.adguard-alert').length > 0;

        if (already) {
            log.error('Assistant button is already in DOM');
            return true;
        }
    };

    var setUserPositionIfExists = function(button) {
        var position = settings.getUserPositionForButton();

        // check if the browser stores old data without a anchor to prevent an error
        if (!position || !position.storedAnchor) {
            return false;
        }

        uiUtils.setAnchorPosition.positionY(button, position.storedAnchor.top);
        uiUtils.setAnchorPosition.positionX(button, position.storedAnchor.left);

        uiUtils.moveElementTo(button, position.x, position.y);

        // validate that button is in the viewport
        // with timeout for deferred execution
        setTimeout(function () {
            uiUtils.checkElementPosition(button, position);
        });

        return true;
    };

    var setPositionSettingsToButton = function(button) {
        var config = settings.getSettings();
        if (!config.largeIcon) {
            $(button).addClass('logo-small');
        }
        if (setUserPositionIfExists(button)) {
            return;
        }

        uiUtils.setAnchorPosition.positionY(button, config.buttonPositionTop);
        uiUtils.setAnchorPosition.positionX(button, config.buttonPositionLeft);

        respectPageElements(button);
    };

    var registerEvents = function(button) {
        var onDragEnd = function(data) {
            settings.setUserPositionForButton(data);
        };

        var openMenu = function() {
            iframeController.setButtonPosition(getButtonPosition(button));
            iframeController.showDetailedMenu();
        };

        uiUtils.makeElementDraggable(button, onDragEnd, openMenu);
        hideRestoreOnFullScreen();
    };

    /**
     * Get center button position
     * @returns {{left: *, top: *}}
     * @private
     */
    var getButtonPosition = function(button) {
        var box = button.getBoundingClientRect();
        return {
            top: box.top + button.offsetHeight / 2,
            left: box.left + button.offsetWidth / 2
        };
    };

    var hideRestoreOnFullScreen = function() {
        if (isFullScreenEventsRegistered) {
            return;
        }
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function() {
            if (uiUtils.tryFullScreenPrefix(document, "FullScreen") || uiUtils.tryFullScreenPrefix(document, "IsFullScreen")) {
                hideButton();
            } else {
                showButton();
            }
        });
        isFullScreenEventsRegistered = true;
    };

    var hideButton = function() {
        if (!button) {
            return;
        }
        $(button).addClass('sg_hide_element');
    };

    var showButton = function() {
        if (!button) {
            return;
        }
        $(button).removeClass('sg_hide_element');
    };

    var removeButton = function() {
        if (!button) {
            return;
        }
        document.documentElement.removeChild(buttonElement);
        button = null;
    };

    /**
     * Set a special classes for the pages on which
     * under the button there are important elements
     * issue: https://github.com/AdguardTeam/AdguardAssistant/issues/32
     */
    var respectPageElements = function(element) {
        var buttonInRightBottom =
            $(element).hasClass('adguard-assistant-button-bottom') &&
            $(element).hasClass('adguard-assistant-button-right');

        if (buttonInRightBottom && document.location.hostname.indexOf('vk.com') >= 0) {
            $(element).addClass('adguard-assistant-button-respect adguard-assistant-button-respect-vk');
        }
        if (buttonInRightBottom && document.location.hostname.indexOf('facebook.com') >= 0) {
            $(element).addClass('adguard-assistant-button-respect adguard-assistant-button-respect-fb');
        }
        return false;
    };

    iframeController.onCloseMenu.attach(showButton);
    iframeController.onShowMenuItem.attach(hideButton);

    return {
        show: show,
        remove: removeButton
    };
};

/**
 * Manages iframe and it's content
 * @param $
 * @param log
 * @param selector
 * @param localization
 * @returns {{showSelectorMenu: showSelectorMenu, showSliderMenu: showSliderMenu, setButtonPosition: setButtonPosition, onCloseMenu: CustomEvent, onShowMenuItem: CustomEvent, removeIframe: removeIframe}}
 * @constructor
 */

/* global CommonUtils, Ioc, SelectorMenuController, SliderMenuControllerMobile */

/*
 * globals generated by gulp tasks/compile.js:
 * RESOURCE_TEMPLATE_POPUP, RESOURCE_TEMPLATE_MENU,
 * RESOURCE_CSS_SELECTOR, RESOURCE_CSS_MOBILE
 */

var IframeControllerMobile = function ($, log, selector, localization) { // jshint ignore:line
    var iframe = null;
    var iframeElement = null;
    var currentItem = null;
    var iframePositionOffset = 5;

    var onCloseMenu = new CustomEvent();
    var onShowMenuItem = new CustomEvent();

    var views = {};

    views['mobilePopup.html'] = "<div class=\"main mobile main-popup\"><div class=\"main-popup__logo\"></div><h2 class=\"mobile-title main-popup__title\" i18n=\"assistant_select_element\"></h2><div class=\"content main-popup__content\" i18n=\"assistant_select_element_text\"></div><div class=\"footer\"><button i18n=\"assistant_select_element_start\" class=\"btn btn-active start-select-mode main-popup__btn main-popup__btn--green\"></button> <button i18n=\"assistant_select_element_cancel\" class=\"btn cancel-select-mode main-popup__btn\"></button></div><i class=\"main-version\">v4.1.2</i></div>";
    views['mobileMenu.html'] = "<div class=\"main mobile main-menu\"><button i18n-title=\"assistant_block\" class=\"adg-accept main-menu__btn main-menu__btn--accept\">accept</button> <button i18n-title=\"assistant_preview\" class=\"adg-preview main-menu__btn main-menu__btn--preview\">preview</button> <button i18n-title=\"plus\" class=\"adg-plus main-menu__btn main-menu__btn--plus\">plus</button> <button i18n-title=\"minus\" class=\"adg-minus main-menu__btn main-menu__btn--minus\">minus</button> <button i18n-title=\"close\" class=\"adg-close main-menu__btn main-menu__btn--close\">close</button></div>";

    var defaultCSS = {
        clip: 'auto',
        'z-index': 999999999999
    };

    var defaultAttributes = {
        'class': selector.ignoreClassName(),
        frameBorder: 0,
        width: 320,
        height: 'auto',
        allowTransparency: 'true',
        id: 'iframe-x2eRYVVQRsG9'
    };

    var createIframe = function (onIframeLoadCallback, styles, attrs) {
        log.debug('Creating iframe');

        if (document.querySelector('#' + defaultAttributes.id)) {
            log.error("Iframe already added");
            return;
        }

        iframe = CommonUtils.createElement('iframe');

        $(iframe).on('load', function () {
            // styles inside iframe
            appendDefaultStyleInIframe();
            onIframeLoadCallback();

            updateIframeAttrs(attrs);
            updateIframeStyles(styles);
        });

        iframeElement = iframe;

        document.documentElement.appendChild(iframeElement);
    };

    var createShadowRootElement = function(iframeElement) {
        var shadowiframeElement = iframeElement.attachShadow({mode: 'closed'});

        var shadowRootDefaultStyle = {
            display: 'block',
            position: 'relative',
            width: 0,
            height: 0,
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            'z-index': 9999999999
        };

        var style = [];

        Object.keys(shadowRootDefaultStyle).forEach(function(key) {
            style.push(key + ':' + shadowRootDefaultStyle[key] + '!important;');
        });

        style = ':host {' + style.join('') + '}';
        shadowiframeElement.innerHTML = '<style>' + style + '</style>';

        return shadowiframeElement;
    };

    var updateIframeAttrs = function(attrs) {
        iframe.removeAttribute('style');
        iframe.removeAttribute('height');

        var attributes = CommonUtils.objectAssign(defaultAttributes, attrs);

        Object.keys(attributes).forEach(function (item) {
            iframe.setAttribute(item, attributes[item]);
        });

        iframe.setAttribute('width', attributes.width);
        iframe.setAttribute('height', attributes.height === 'auto' ? iframe.contentDocument.body.scrollHeight : attributes.height);
    };

    var updateIframeStyles = function (styles) {
        var css = CommonUtils.objectAssign(defaultCSS, styles);

        Object.keys(css).forEach(function (item) {
            iframe.style[item] = css[item];
        });

        iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px';
    };

    var appendSelectorStyles = function() {
        if(document.querySelector('.adg-styles')) {
            return false;
        }

        var selectorStyleTag = CommonUtils.createElement('style');
        var selectorStyles = "iframe#adguard-assistant-dialog{position:fixed;clip:auto;border-radius:3px;box-shadow:0 0 10px 3px rgba(162,161,161,.3)}.sg_hide_element{display:none!important}img.adguard_sg_selected{border:5px solid #0f0!important}#_sg_div.sg_top{top:5px!important}#_sg_div.sg_bottom{bottom:5px!important}#_sg_div input{margin-right:10px!important;font-size:15px!important}#_sg_path_field{width:400px!important}#_sg_div .sg_new_line{clear:both!important}#_sg_div .sg_option{float:left!important}#_sg_div .adguard_sg_selected_option{text-decoration:underline}.adguard-placeholder{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OUM5OUE4MEZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OUM5OUE4MUZEQzUxMUUyOTAzM0EyODQyRjc5QjI2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5Qzk5QTdFRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5Qzk5QTdGRkRDNTExRTI5MDMzQTI4NDJGNzlCMjZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9rJm9wAAAAZQTFRF2+7g1OfZ+LX/EgAAACtJREFUeNpiYIQABhhA5TIyoHIhfCS1DKhcEB/FJAZG7AYzoNlLLy5AgAEAMigAar6TcqkAAAAASUVORK5CYII=)}.adguard-placeholder-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkNBQTNGMkZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkNBQTNGM0ZEQzUxMUUyQjVFMkZEMUFFRjlGOEQyMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2Q0FBM0YwRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ2Q0FBM0YxRkRDNTExRTJCNUUyRkQxQUVGOUY4RDIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+49sbDwAAAl9JREFUeNrMmE0o5VEYxq9vJmpI2SBZjCSNKKGwkDE0m8mg2QwzEtkNCeUjGyVhYTbTUIZEMWmkbCVlw9QkG4mammbK5zAWuLqek3ch3W7v+Z8P/7d+u/cczz3neM7zP0Htg12eR6wUkA+eg2yQDOLAYegjiIkEr0AjyAPRfnp8toW9Be20QoHKa0tYEhgCVdwBNoQVgCmQKjPItLAKMAtiZAeaFFYM5sATJ4ODDYl6BuadijIlLAJMgHiFOWJMbGUfmaZsHYN98Bvs6haWA1olx2yCMfAd/DF1+Psl5rwGPWAYXJn8r3wNXjB7L0ENrZLRwy/m6ZDorw8kSqewUpDL7P0Epm3YRRBoYfbugW5bPpZDK8apTnBqS9h7WjWOLXyz5fxPQSWjz0dWcmPrEhdJNIEprIlW198Z7aUV1SasQWJnAp3Dzw+FqWxlOmV2HeXVecbegHBTYS5YYVy1yejrVJhIpxluFPaB6V1WhSWQTXjcJqyKjFVnhagabBhFFk7tgnPmlp+oChNbmMXM70XgL3Nen6qwj8y+xfv53fQZKweFzN5xW4c/Cgwwe9fAui1hIuBlMntHZOKNirAyiQ+NLbBkw8fEE9IM2QSnBv19I+oWVguWQSxzrnX6EVrqoV2I15kS0AxeSszjo+326hQm3hoSQRqR6mCeL2BV5x0VSjYQojDHNmgzcYn/Uxj/H9SBM7fkMQ951Tuw4aageEMpY8FUHnPy+XZECXbRTUFxhezEqCiZFfsFRnXdg1xhgcT9BF/BJG2htRKiDjx376EX9Md36HoR/NDp5jJ1K8AAcQBmooZhTgQAAAAASUVORK5CYII=);background-position:center center;background-repeat:no-repeat;height:100%}.adguard-placeholder-domain{background:#778b7c;color:#fff;left:0;top:0;padding:2px 4px;position:relative}@media print{#adguard-assistant-dialog,.adguard-alert{display:none!important;opacity:0!important;visibility:hidden!important}}";
        selectorStyleTag.classList.add('adg-styles');

        if (selectorStyleTag.styleSheet) {
            selectorStyleTag.styleSheet.cssText = selectorStyles;
        } else {
            selectorStyleTag.appendChild(document.createTextNode(selectorStyles));
        }

        document.getElementsByTagName("head")[0].appendChild(selectorStyleTag);
    };

    var appendDefaultStyleInIframe = function() {
        try {
            log.info('Iframe loaded writing styles');
            var doc = iframe.contentDocument;
            doc.open();
            doc.write('<html><head><style type="text/css">' + "@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,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) format(\'woff\');font-weight:400;font-style:normal}@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,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) format(\'woff\');font-weight:600;font-style:normal}@font-face{font-family:\'Open Sans\';src:url(data:application/font-woff;base64,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) format(\'woff\');font-weight:700;font-style:normal}.weight-regular{font-family:\"Open Sans\",Arial,sans-serif;font-weight:400}.weight-medium{font-family:\"Open Sans\",Arial,sans-serif;font-weight:600}.weight-bold{font-family:\"Open Sans\",Arial,sans-serif;font-weight:700}/*! normalize.css v3.0.1 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{box-sizing:border-box}:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{position:relative;background:#fff;font-size:1.3rem;line-height:1.428571429;color:#282828;background-color:#e6e6e6;font-family:\"Open Sans\",Arial,sans-serif;font-weight:400;overflow-y:hidden}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;outline:0;border-radius:0;box-shadow:none}a{color:#36ba53;text-decoration:underline;outline:0}a:hover{color:#257f39;text-decoration:underline}figure{margin:0}img{vertical-align:middle;max-width:100%}form{margin:0}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:1.57142857;font-size:21px;line-height:inherit;border:0}label{display:inline-block}input[type=search]{box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=checkbox]:focus,input[type=file]:focus,input[type=radio]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.form-control{display:block;width:100%;height:40px;padding:6px 15px 4px;font-size:14px;line-height:22px;color:#333;background:#fff;border:1px solid #e6e6e6;box-shadow:inset 0 3px 3px rgba(0,0,0,.04)}.form-control:focus{border-color:#8c8c8c;outline:0}.form-control::-moz-placeholder{color:#777;opacity:1}.form-control:-ms-input-placeholder{color:#777}.form-control::-webkit-input-placeholder{color:#777}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#fff;opacity:1}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{line-height:22px}.form-group{margin:23px 0 0}.form-group:first-child{margin-top:0}fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.form-ui{position:relative;display:inline-block;vertical-align:top;margin:0;line-height:20px;font-weight:400;cursor:pointer}.form-ui-control{position:absolute;top:-9999px;left:-9999px;width:0;height:0;overflow:hidden;clip:rect(0,0,0,0);outline:0 none}.form-ui-txt{position:relative;display:inline-block;vertical-align:top;padding:2px 0 0 30px}.form-ui-txt:before{content:\'\';position:absolute;top:0;left:0;width:22px;height:22px}.form-ui-txt:after{content:\'\';position:absolute}input[type=radio]+.form-ui .form-ui-txt:before{border:1px solid #cfcfcf;border-radius:50%;background:#fff}input[type=radio]+.form-ui .form-ui-txt:after{top:7px;left:7px;width:8px;height:8px;border-radius:50%}input[type=radio]:checked+.form-ui .form-ui-txt:after{background:#36ba53}input[type=radio]:disabled+.form-ui .form-ui-txt:before{background:#f2f2f2;opacity:.6}input[type=radio]:disabled+.form-ui .form-ui-txt:after{opacity:.6}input[type=checkbox]+.form-ui .form-ui-txt:before{border:1px solid #cfcfcf;background:#fff}input[type=checkbox]+.form-ui .form-ui-txt:after{top:7px;left:5px;width:13px;height:6px;border-bottom:2px solid transparent;border-left:2px solid transparent;-ms-transform:rotate(-45deg);transform:rotate(-45deg)}input[type=checkbox]:checked+.form-ui .form-ui-txt:before{border:1px solid #36ba53;background:#36ba53}input[type=checkbox]:checked+.form-ui .form-ui-txt:after{border-bottom-color:#fff;border-left-color:#fff}input[type=checkbox]:disabled+.form-ui .form-ui-txt:before{opacity:.6}input[type=checkbox]:disabled+.form-ui .form-ui-txt:after{opacity:.6}.btn{display:inline-block;margin-bottom:0;padding:10px 20px;font-size:13px;line-height:18px;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:hover{color:#000;text-decoration:none}.btn.active,.btn:active{outline:0}.btn:focus{outline:0;box-shadow:inset 0 0 0 1px #fff}.btn.disabled,.btn[disabled]{cursor:default;box-shadow:none;opacity:.5;pointer-events:none}.btn-default{border-color:#58595b;background:#58595b;color:#fff}.btn-default:hover{border-color:#717275;background:#717275;color:#fff}.btn-default.active,.btn-default:active{border-color:#717275;background:#717275}.btn-default.disabled,.btn-default[disabled]{border-color:#58595b;background:#58595b}.btn-primary{border-color:#36ba53;background:#36ba53;color:#fff}.btn-primary:hover{border-color:#30a64a;background:#30a64a;color:#fff}.btn-primary.active,.btn-primary:active{border-color:#30a64a;background:#30a64a}.btn-primary.disabled,.btn-primary[disabled]{border-color:#36ba53;background:#36ba53}@media (max-width:320px){.btn-another-el{font-size:9px;padding-left:0;padding-right:0;background-color:transparent;border:0;color:#000}.btn-another-el:hover{border-color:transparent;background:0 0;color:#000}}.btn-cancel{border-color:#f3523d;background:#f3523d;color:#fff}.btn-cancel:hover{border-color:#ee290f;background:#ee290f;color:#fff}.btn-cancel.active,.btn-cancel:active{border-color:#ee290f;background:#ee290f}.btn-cancel.disabled,.btn-cancel[disabled]{border-color:#f3523d;background:#f3523d}.btn-lg{font-size:20px;padding:14px 24px 12px}.btn-sm{font-size:16px;padding-top:14px;padding-bottom:14px}.btn-xs{font-size:14px;padding-top:12px;padding-bottom:12px}.btn-block{display:block;width:100%;padding-left:0;padding-right:0}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.btn-upload{position:relative;overflow:hidden}.btn-upload input[type=file]{position:absolute;top:0;right:0;margin:0;font-size:600%;line-height:600%;width:auto;height:auto;opacity:0;cursor:pointer}:host{display:block!important;position:relative!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important;z-index:9999999999!important}body{padding:1px;background:0 0}.main{position:relative;padding:30px 10px;background:#fff}.main .footer{letter-spacing:5px}.main-version{position:absolute;bottom:0;right:7px;color:#eee;font-size:12px}.main-popup{text-align:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin:20px;box-shadow:0 0 20px 0 rgba(0,0,0,.2)}.main-popup__logo{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20viewBox%3D%220%200%2035%2036%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard-Copy-5%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-164.000000%2C%20-219.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-3%22%20transform%3D%22translate(40.000000%2C%20190.000000)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate(124.500000%2C%2029.414062)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-9%22%20transform%3D%22translate(0.453656%2C%200.226828)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-8%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-7%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.7157492%2C0%20C11.4909195%2C0%205.18846877%2C1.26558351%205.12620114e-06%2C4.05122239%20C5.12620114e-06%2C10.0674495%20-0.0716136324%2C25.0556925%2016.7157492%2C35.2966798%20C33.503483%2C25.0556925%2033.4322354%2C10.0674495%2033.4322354%2C4.05122239%20C28.2434006%2C1.26558351%2021.9409499%2C0%2016.7157492%2C0%20L16.7157492%2C0%20Z%22%20id%3D%22Path%22%20fill%3D%22%2368BC71%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.6986743%2C35.2862582%20C-0.0715650605%2C25.0455268%205.12620113e-06%2C10.0654091%205.12620113e-06%2C4.05122239%20C5.18281802%2C1.26861734%2011.4771929%2C0.00275849124%2016.6986743%2C4.50378311e-06%20L16.6986743%2C35.2862617%20Z%22%20id%3D%22Combined-Shape%22%20fill%3D%22%2367B279%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16.1060247%2C23.551094%20L26.2143155%2C9.51801869%20C25.4736005%2C8.90647249%2024.8238876%2C9.33808916%2024.4662281%2C9.672244%20L24.4531774%2C9.67331501%20L16.0248987%2C18.7044208%20L12.8493477%2C14.7681053%20C11.3344091%2C12.96524%209.27486866%2C14.3404157%208.79375662%2C14.7038448%20L16.1060247%2C23.551094%22%20id%3D%22Fill-11%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\");width:35px;height:37px;background-repeat:no-repeat}.main-popup__title{font-size:16px}.main-popup__content{font-size:13px;padding:0 25px;margin-bottom:25px}.main-popup__btn{font-size:14px;padding:10px;width:110px;border:1px solid #dedede;border-radius:3px;background:#fff}.main-popup__btn:hover{background-color:#f6f6f6}.main-popup__btn--green{color:#fff;border:1px solid #66b574;background-color:#66b574;box-shadow:none}.main-popup__btn--green:hover{background-color:#5ea76b;color:#fff}.main-popup__btn:focus{box-shadow:none}.main-menu{margin:20px;padding:15px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:2px;box-shadow:0 0 20px -2px rgba(0,0,0,.3)}.main-menu__btn{font-size:0;width:40px;height:40px;border:1px solid #dedede;border-radius:3px;background-repeat:no-repeat;background-position:50%;position:relative;background-color:#fff}.main-menu__btn:hover{background-color:#d0f0d6}.main-menu__btn.active,.main-menu__btn:active{background-color:#66b574;box-shadow:inset 2px 2px 3px 0 rgba(92,92,92,.5)}.main-menu__btn--accept{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2215px%22%20height%3D%2213px%22%20viewBox%3D%220%200%2015%2013%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cg%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-68.000000%2C%20-570.000000)%22%20stroke-linecap%3D%22round%22%3E%0A%20%20%20%20%20%20%20%20%3Cpolyline%20id%3D%22Line-2%22%20stroke%3D%22%23000%22%20stroke-width%3D%221.8%22%20points%3D%2269.202002%20576.814758%2072.8587101%20581.202808%2081.4776855%20571.551098%22%3E%3C%2Fpolyline%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A\")}.main-menu__btn--preview{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2220px%22%20height%3D%2217px%22%20viewBox%3D%220%200%2020%2017%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard-Copy-2%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-117.000000%2C%20-568.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate(119.000000%2C%20570.000000)%22%20stroke%3D%22%23555555%22%20stroke-width%3D%221.8%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M-0.423860131%2C6.17779517%20C0.450400003%2C2.324936%203.88851808%2C-0.454193941%207.890625%2C-0.454193941%20C11.8927319%2C-0.454193941%2015.33085%2C2.324936%2016.2051101%2C6.17779517%20L16.2503015%2C6.37695313%20L16.2051101%2C6.57611108%20C15.33085%2C10.4289703%2011.8927319%2C13.2081002%207.890625%2C13.2081002%20C3.88851808%2C13.2081002%200.450400003%2C10.4289703%20-0.423860131%2C6.57611108%20L-0.46905147%2C6.37695313%20L-0.423860131%2C6.17779517%20Z%22%20id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22Oval-5%22%20cx%3D%227.890625%22%20cy%3D%226.37695312%22%20r%3D%222.54192017%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E\")}.main-menu__btn--preview.active,.main-menu__btn--preview:active{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2220px%22%20height%3D%2217px%22%20viewBox%3D%220%200%2020%2017%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%203%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard-Copy-4%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-117.000000%2C%20-568.000000)%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-3%22%20transform%3D%22translate(119.000000%2C%20570.000000)%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%221.8%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M-0.423860131%2C6.17779517%20C0.450400003%2C2.324936%203.88851808%2C-0.454193941%207.890625%2C-0.454193941%20C11.8927319%2C-0.454193941%2015.33085%2C2.324936%2016.2051101%2C6.17779517%20L16.2503015%2C6.37695313%20L16.2051101%2C6.57611108%20C15.33085%2C10.4289703%2011.8927319%2C13.2081002%207.890625%2C13.2081002%20C3.88851808%2C13.2081002%200.450400003%2C10.4289703%20-0.423860131%2C6.57611108%20L-0.46905147%2C6.37695313%20L-0.423860131%2C6.17779517%20Z%22%20id%3D%22Combined-Shape%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22Oval-5%22%20cx%3D%227.890625%22%20cy%3D%226.37695312%22%20r%3D%222.54192017%22%3E%3C%2Fcircle%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E\")}.main-menu__btn--plus:after{content:\'\';position:absolute;height:2px;width:16px;top:18px;left:11px;background-color:#555}.main-menu__btn--plus:before{content:\'\';position:absolute;width:2px;height:16px;left:18px;top:11px;background-color:#555}.main-menu__btn--plus:active:after{background-color:#fff}.main-menu__btn--plus:active:before{background-color:#fff}.main-menu__btn--minus:after{content:\'\';position:absolute;height:2px;width:16px;top:18px;left:11px;background-color:#555}.main-menu__btn--minus:active:after{background-color:#fff}.main-menu__btn--minus:active:before{background-color:#fff}.main-menu__btn--close{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2213px%22%20height%3D%2213px%22%20viewBox%3D%220%200%2013%2013%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%207%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard-Copy-2%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-276.000000%2C%20-570.000000)%22%20stroke-linecap%3D%22round%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-7%22%20transform%3D%22translate(281.890625%2C%20576.376953)%20rotate(-315.000000)%20translate(-281.890625%2C%20-576.376953)%20translate(274.264864%2C%20568.327539)%22%20stroke%3D%22%23555555%22%20stroke-width%3D%221.8%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M7.86654787%2C0.599072332%20L7.86654787%2C15.0032866%22%20id%3D%22Line-3%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M15.068655%2C7.80117948%20L0.664440722%2C7.80117948%22%20id%3D%22Line-3%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E\")}.main-menu__btn--close:active{background-image:url(\"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2213px%22%20height%3D%2213px%22%20viewBox%3D%220%200%2013%2013%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2048.2%20(47327)%20-%20http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch%20--%3E%0A%20%20%20%20%3Ctitle%3EGroup%202%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Artboard-Copy-4%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22translate(-276.000000%2C%20-570.000000)%22%20stroke-linecap%3D%22round%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group-2%22%20transform%3D%22translate(275.000000%2C%20570.000000)%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%221.8%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M7.2364156%2C-0.830419873%20L7.2364156%2C13.5737944%22%20id%3D%22Line-3%22%20transform%3D%22translate(7.236416%2C%206.371687)%20rotate(-315.000000)%20translate(-7.236416%2C%20-6.371687)%20%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14.1389546%2C6.24760208%20L-0.26525972%2C6.24760208%22%20id%3D%22Line-3%22%20transform%3D%22translate(6.936847%2C%206.671255)%20rotate(-315.000000)%20translate(-6.936847%2C%20-6.671255)%20%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E\")}.main-menu__btn:disabled{background-color:#efefef}.main-menu__btn:disabled:after,.main-menu__btn:disabled:before{opacity:.7}" + '</style></head></html>');
            doc.close();
        } catch (ex) {
            log.error(ex);
        }
    };

    var showMenuItem = function (viewName, controller, options, styles, attrs) {
        if (currentItem === viewName) {
            return;
        }

        var onIframeLoad = function () {
            var frameElement = iframe;
            var view = CommonUtils.createElement(views[viewName]);
            appendContent(view);
            localize();

            if (!options) {
                options = {};
            }

            if (controller) {
                controller.init(frameElement, options);
            }
            updateIframeAttrs(attrs);
            updateIframeStyles(styles);

            currentItem = viewName;
            onShowMenuItem.notify();
            showIframe();
        };

        if (!iframe) {
            createIframe(onIframeLoad, styles, attrs);
            return;
        }

        onIframeLoad();
    };

    var hideIframe = function() {
        if (iframe && iframe) {
            iframe.style.display = 'none';
        }
    };

    var showIframe = function() {
        if (iframe && iframe) {
            iframe.style.display = 'block';
        }
    };

    var showSelectorMenu = function () {
        hideIframe();
        selector.close();
        var styles = {
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            'border-radius': '2px',
            'background': 'transparent'
        };

        showMenuItem('mobilePopup.html', null, null, styles);

        var startSelectMode = iframe.contentDocument.querySelector('.start-select-mode');
        var cancelSelectMode = iframe.contentDocument.querySelector('.cancel-select-mode');

        startSelectMode.addEventListener('click', startSelect);
        cancelSelectMode.addEventListener('click', removeIframe);
    };

    var startSelect = function() {
        hideIframe();
        var controller = Ioc.get(SelectorMenuController);
        controller.startSelector();
    };

    var showSliderMenu = function(element) {
        var controller = Ioc.get(SliderMenuControllerMobile);
        var options = {
            element: element
        };
        var styles = {
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)'
        };

        showMenuItem('mobileMenu.html', controller, options, styles);
    };

    var localize = function () {
        var elements = iframe.contentDocument.querySelectorAll('[i18n]');
        for (var i = 0; i < elements.length; i++) {
            var message = localization.getMessage(elements[i].getAttribute('i18n'));
            localization.translateElement(elements[i], message);
        }

        var elementsWithTitle = iframe.contentDocument.querySelectorAll('[i18n-title]');
        for (var j = 0; j < elementsWithTitle.length; j++) {
            var title = localization.getMessage(elementsWithTitle[j].getAttribute('i18n-title'));
            elementsWithTitle[j].setAttribute('title', title);
        }
    };

    var appendContent = function (view) {
        var body = iframe.contentDocument.body;
        for (var i = 0; i < body.children.length; i++) {
            body.removeChild(body.children[i]);
        }
        body.appendChild(view);
    };

    // e.isTrusted checking for prevent programmatically events
    // see: https://github.com/AdguardTeam/AdguardAssistant/issues/134
    var removeIframe = function (e) {
        if (e && e.isTrusted === false) return false;
        if (!iframe) return false;
        document.removeEventListener('click', removeIframe);
        window.removeEventListener('orientationchange', showSelectorMenu);
        document.documentElement.removeChild(iframeElement);
        currentItem = null;
        selector.close();
        onCloseMenu.notify();
    };

    appendSelectorStyles();

    return {
        showSelectorMenu: showSelectorMenu,
        showSliderMenu: showSliderMenu,
        onCloseMenu: onCloseMenu,
        onShowMenuItem: onShowMenuItem,
        removeIframe: removeIframe,
        startSelect: startSelect
    };
};

/* global Ioc, Log, GM, Wot, Settings, AdguardSettings, UIValidationUtils, balalaika, UIUtils, Localization, IframeController, SliderWidget, AdguardRulesConstructorLib, AdguardSelectorLib, UIButton */

/* global ADG_addRule, ADG_temporaryDontBlock, ADG_sendAbuse, ADG_isFiltered, ADG_changeFilteringState */

/*
 * adguardAssistantExtended main function is for desktop browsers, running by onload event
 */
var adguardAssistantExtended = function () {
    Ioc.register('log', new Log());

    Ioc.register('addRule', function() {
        return false;
    });

    var addRule = typeof (ADG_addRule) === 'undefined' ? null : ADG_addRule;
    var dontBlock = typeof (ADG_temporaryDontBlock) === 'undefined' ? null : ADG_temporaryDontBlock;
    var sendAbuse = typeof (ADG_sendAbuse) === 'undefined' ? null : ADG_sendAbuse;
    var checkRule = typeof (ADG_isFiltered) === 'undefined' ? null : ADG_isFiltered;
    var changeFilteringState = typeof (ADG_changeFilteringState) === 'undefined' ? null : ADG_changeFilteringState;
    var adguardSettings = typeof (AdguardSettings) === 'undefined' ? null : AdguardSettings;

    Ioc.register('gmApi', new GM(addRule, dontBlock, sendAbuse, checkRule, changeFilteringState));
    var wot = new Wot();
    wot.registerWotEventHandler();
    Ioc.register('wot', wot);
    var settings = Ioc.get(Settings);
    settings.setAdguardSettings(adguardSettings);
    Ioc.register('settings', settings);
    Ioc.register('uiValidationUtils', Ioc.get(UIValidationUtils));
    Ioc.register('$', balalaika);
    Ioc.register('selector', new AdguardSelectorLib({}, balalaika));
    Ioc.register('uiUtils', Ioc.get(UIUtils));
    Ioc.register('localization', Ioc.get(Localization));
    Ioc.register('iframeController', Ioc.get(IframeController));
    Ioc.register('sliderWidget', new SliderWidget({}, balalaika));
    Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));
    settings.loadSettings();
    var button = Ioc.get(UIButton);
    Ioc.register('button', button);
    button.show();
};

/*
 * adguardAssistantMini function is for mobile browsers and stored in global variable `adguardAssistant`
 * execute with callback:
 *
 * adguardAssistant.start(function(rules){
        // apply rules
    });
 */
var adguardAssistantMini = (function() {
    return {
        start: function(callback) {
            Ioc.register('log', new Log());
            Ioc.register('addRule', callback.bind(this));
            Ioc.register('$', balalaika);
            Ioc.register('selector', new AdguardSelectorLib({}, balalaika));
            Ioc.register('uiUtils', Ioc.get(UIUtils));
            Ioc.register('localization', Ioc.get(Localization));
            var iframeController = Ioc.get(IframeControllerMobile);
            Ioc.register('iframeController', iframeController);
            Ioc.register('adguardRulesConstructor', new AdguardRulesConstructorLib({}));

            iframeController.showSelectorMenu();
        }
    };
})();

var mobileReg = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

if (mobileReg.test(navigator.userAgent)) {
    this.adguardAssistant = adguardAssistantMini;
} else {
    adguardAssistantExtended();
}

})();