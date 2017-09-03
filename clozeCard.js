var clozeCard = function(text, cloze){
    this.cloze = cloze;
    this.partial = text.replace(cloze, ' .........');
    this.fullText = text;
    if (!this.cloze) {
        console.log('No cloze inputed');
    };
};

module.exports = clozeCard;