





const form = document.querySelector("#name-form");
const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");
const postscript = document.querySelector("#message-ps");
const TYPEWRITER_SPEED_MS = 40;
let typewriterTimeout;
let funnyReplyIndex = 0;
let nonsenseReplyIndex = 0;

function showMessage(text, showPostscript = false) {
  clearTimeout(typewriterTimeout);
  message.textContent = "";
  postscript.hidden = true;

  const characters = Array.from(text);
  let index = 0;

  function typeNextCharacter() {
    message.textContent += characters[index];
    index += 1;

    if (index < characters.length) {
      typewriterTimeout = setTimeout(typeNextCharacter, TYPEWRITER_SPEED_MS);
    } else {
      postscript.hidden = !showPostscript;
    }
  }

  if (characters.length > 0) {
    typeNextCharacter();
  } else {
    postscript.hidden = !showPostscript;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim().replace(/\s+/g, " ");
  if (!name) {
    showMessage("Your name first ˃ᴗ˂");
    return;
  }

  const normalizedName = name.toLowerCase();
  const isRoselaName = /^rosela{1,21}$/.test(normalizedName);

  if (normalizedName === "jhaymin q rosela") {
    showMessage("Sheesh full name pa nga PFTHAWHHAHAWHA ");
    return;
  }

  if (/^jhayminn*$/.test(normalizedName) && normalizedName.length > 20) {
    showMessage("HOY sobra sobra na yan HWAHAHHHA");
    return;
  }

  if (/^rosela+$/.test(normalizedName) && normalizedName.length > 26) {
    showMessage("HOY sobra sobra na yan HWAHAHHHA");
    return;
  }

  const containsNonNameCharacters = /[^\p{L}\s'-]/u.test(name);
  const isKeyboardMash = /^(?:[asdfghjkl]+|[qwertyuiop]+|[zxcvbnm]+)$/i.test(name);
  const isRepeatedCharacter = /^(.)\1+$/iu.test(name);
  const hasNoVowels = !/[aeiou]/i.test(name);

  if (
    name.length === 1 ||
    containsNonNameCharacters ||
    isKeyboardMash ||
    isRepeatedCharacter ||
    hasNoVowels
  ) {
    const nonsenseReplies = [
      "Pangalan ba yannnn o bagong salita?",
      "Hoyyy, anooo baaa",
      "I dunot anderstanding it",
      "Anong klaseng kabisayaan toh",
      "Bisaya ka ata ehhhh, AHAHAHHAHA"
    ];
    showMessage(nonsenseReplies[nonsenseReplyIndex]);
    nonsenseReplyIndex = (nonsenseReplyIndex + 1) % nonsenseReplies.length;
    return;
  }

  if (!/^jhayminn*$/.test(normalizedName) && !isRoselaName) {
    const funnyReplies = [
      `${name}? pangalan mo ba yannnn?`,
      `Name mo ba talaga yan? Hmmmmmm "${name}"? Ngek Access Denied.`,
      `Ano baaaaaaaaaaa :(`,
      `${name}? Di kita kilalaaaa, shoo shoo`,
      `Eme mo nemen`,
      `Tama na ssobbbbbb`,
      `Aba kumukulit ka talaga ahhh`,
      `Luh, kulit talaga oh, jowk <33333`,
      `HMMMMMMM? ${name}, yan ba pangalan ng future wife kooo?`,
      `Makukuha mo talaga apelyido ko sige kaaaaaaa`



    ];
    showMessage(funnyReplies[funnyReplyIndex]);
    funnyReplyIndex = (funnyReplyIndex + 1) % funnyReplies.length;
    return;
  }

  const confession =
    `Hi, hellowwww, so umm, I just wanted to say that these past few days or weeks, I've been thinking about you alot
    and umm, I really don't know how to say this but, I LIKE YOU, CRUSH KITA OKAY?ok so ummm, yeah well...I've been meaning
    to tell you this since grade 10 pero naunahan ems yk yk, honestly I didn't noticed you pa non nung first day pero you were on the window seat sa group 5 with your hair tied with a white facemask?
    from what I recall or idk hehe...so ayun uncrush ulit HAHAHAH, cause ykk. So naisip ko na I should tell you how I feel mgayon instead of losing the chance ulit tulad nung grd 7 and 10 hehe. Tbh, I noticed alot lang talga
    lately ever since you changed your ign sa ml, then his MD, na maybe he removed sa fb, then I noticed parang di na kayo sabay umuwi, maglaro, then YK nagulat lang talaga ems when you accepted invite ko in ml
    cause palagi mo decline noon, pero yk I had a feeling that you had a reason for declining it that time hehe bat ko nga ko nagkwekwento AHHAAHHA. Alam mo, actually I was planning on confessing in person, pero di na tutuloy kase maheyaen then minsan lang you
    lumalabas sa kweba mo(joke) call me weird but, I kept waiting for you to come out from a distance sa room nyo, para yk di mahalata me na may hinihintay ems AHHA, mensan nga punta ako kila Luma para kunwari may kausap lang while waiting for you at the same time WHAHA hayy.
    Idrk if you noticed pero I've been spending more time sa 4th floor alot tuwing recess and miski sa uwian, pa simple lang ems pero I keep on looking for you everywhere, I guess I just really wanted to see you more oftennn (>_<). OK SHATAP NA MUNA EMS, the thing is, I really like you, alot, I just find the things in you na sobrang cute like whenever
    every time you smile your eyes smile too, your long long hair, your cute laugh, your vibes(nonchalant ka ksii HAHAHHA) basically pretty much just the things that I know about you yet(sige sabhin mong corny) and umm, It's okay lang naman din if reject moko, I mean maybe Second time's a charm? HAHAHHA, no but, really oks lang if you don't feel the same way, no pressure, no force, just really needed to get this off my chest for a while, I just thought I should
    let you know how I feel towards you and to know your thoughts about it :3 We can still talk and be friends in the mean time though, if u wanttt :DDDDDDD yun lang HEHE
     `;
  showMessage(confession, true);
});
