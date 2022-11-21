function generateHashtag(str) {
  const test = str.replace(/\s+/gi, '').length;
  
  if(test === 0 || test >= 140) return false;
  
  else {
    const words = str.match(/\w+/gi);
    const hash = ['#'];
    
    words.map(word => {
      hash.push(word.replace(word[0], word[0].toUpperCase()));
    })
    
    return hash.join('');
  }
}