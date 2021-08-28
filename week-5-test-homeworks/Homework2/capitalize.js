export default function capitalizeAllWords(title) {
  if(typeof title != 'string') {
    throw new Error('Argument is not string!');
  }
  const newTitle = title.split(' ').map((word => {
    const newTitle = word.charAt(0).toUpperCase() + word.slice(1);
    return newTitle;
  })).join(' ');

  return newTitle;
}