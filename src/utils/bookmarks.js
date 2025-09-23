const BOOKMARKS_KEY = 'techalliance_bookmarks';

export const getBookmarks = () => {
  try {
    const bookmarks = localStorage.getItem(BOOKMARKS_KEY);
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    return [];
  }
};

export const addBookmark = (item) => {
  try {
    const bookmarks = getBookmarks();
    const isAlreadyBookmarked = bookmarks.some(bookmark => 
      bookmark.id === item.id && bookmark.type === item.type
    );
    
    if (!isAlreadyBookmarked) {
      const newBookmarks = [...bookmarks, { ...item, bookmarkedAt: new Date().toISOString() }];
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error adding bookmark:', error);
    return false;
  }
};

export const removeBookmark = (id, type) => {
  try {
    const bookmarks = getBookmarks();
    const filteredBookmarks = bookmarks.filter(bookmark => 
      !(bookmark.id === id && bookmark.type === type)
    );
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filteredBookmarks));
    return true;
  } catch (error) {
    console.error('Error removing bookmark:', error);
    return false;
  }
};

export const isBookmarked = (id, type) => {
  const bookmarks = getBookmarks();
  return bookmarks.some(bookmark => bookmark.id === id && bookmark.type === type);
};