# 🔧 Troubleshooting Guide

## Fixed Issues (Latest)

### ✅ **FIXED: Flashcard & Quiz Buttons Not Working**
**Problem**: Clicking the Flashcard or Quiz buttons did nothing.

**Root Cause**: There were TWO `init()` functions in script.js. The second one was overwriting the first one, and it didn't include the `setupStudyModes()` call.

**Solution**: 
1. Removed the duplicate `init()` function at line 626
2. Fixed script loading order (study-data.js loads before script.js)
3. Now only ONE init() function exists with all proper setup calls

**Status**: ✅ COMPLETELY FIXED

---

## Fixed Issues

### ✅ Flashcards & Quiz Not Working
**Problem**: The mode buttons weren't switching properly.

**Solution**: Fixed the script loading order - `study-data.js` now loads before `script.js`.

---

## How to Verify It's Working

### Test Flashcard Mode:
1. Open `index.html`
2. Click the **"Flashcards"** button at the top center
3. You should see a card with a question
4. Click on the card - it should flip to show the answer
5. Click "Next" - it should show the next card

### Test Quiz Mode:
1. Click the **"Quiz"** button at the top center
2. You should see a multiple choice question
3. Click an answer (A, B, C, or D)
4. You should get instant feedback (correct/incorrect)
5. You should see an explanation
6. Click "Next Question" to continue

---

## Common Issues & Solutions

### Issue: Mode buttons don't do anything
**Solution**: 
- Hard refresh your browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Clear your browser cache
- Close and reopen the browser

### Issue: Flashcards show but won't flip
**Solution**:
- Make sure JavaScript is enabled in your browser
- Try clicking directly on the card content
- Refresh the page

### Issue: Quiz questions don't show
**Solution**:
- Check that `study-data.js` exists in the folder
- Hard refresh the browser
- Check browser console for errors (F12 > Console)

### Issue: "Data not loaded" error message
**Solution**:
- Verify `study-data.js` is in the same folder as `index.html`
- Check that the file isn't corrupted
- Try opening in a different browser

### Issue: House points don't update
**Solution**:
- This is expected - points update when you answer quiz questions correctly
- If still not working, check browser console for errors

---

## Browser Compatibility

**Recommended Browsers:**
- ✅ Chrome (latest)
- ✅ Safari (latest)
- ✅ Firefox (latest)
- ✅ Edge (latest)

**Not Recommended:**
- ❌ Internet Explorer (not supported)
- ❌ Very old browser versions

---

## File Checklist

Make sure these files exist in your folder:
- [ ] `index.html`
- [ ] `script.js`
- [ ] `study-data.js` ⭐ (NEW - required for flashcards/quiz)
- [ ] `styles.css`

---

## Testing Each Mode

### ✅ Read Mode (Should work):
- Shows 10 slides with questions and answers
- Arrow buttons navigate between slides
- Progress bar updates

### ✅ Flashcard Mode (Should work):
- Shows flashcard with question on front
- Click to flip and reveal answer
- "Previous" and "Next" buttons work
- Shows "Card X of 18"

### ✅ Quiz Mode (Should work):
- Shows multiple choice question
- Four answer options (A, B, C, D)
- Clicking an option shows feedback
- "Next Question" button appears after answering
- Final score screen appears after all questions

---

## Quick Fix Checklist

If something doesn't work:

1. **Hard Refresh**
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + Shift + R`

2. **Check Files**
   - Verify `study-data.js` exists
   - Check it's in the same folder as `index.html`

3. **Try Different Browser**
   - If Chrome doesn't work, try Safari
   - If Safari doesn't work, try Firefox

4. **Check Console**
   - Press F12 to open Developer Tools
   - Click "Console" tab
   - Look for red error messages
   - Share them if you need help

5. **Re-download**
   - If files are corrupted, re-download them
   - Make sure all files are in the same folder

---

## Expected Behavior

### Mode Switching:
- Clicking a mode button should immediately switch the view
- The active button should be highlighted in gold
- The mode indicator (top-left) should update

### Flashcards:
- Should flip smoothly when clicked
- Should show difficulty level (Easy/Medium/Hard)
- Should show category badge
- Should navigate between 18 cards

### Quiz:
- Should show 15 questions total
- Should give instant feedback
- Should track score
- Should award 10 points per correct answer
- Should show final results screen

---

## Still Not Working?

### Check Browser Console:
1. Press `F12` or right-click → Inspect
2. Click "Console" tab
3. Look for error messages
4. Common errors:
   - "flashcards is not defined" → `study-data.js` not loading
   - "Cannot read property" → Script order issue
   - 404 errors → Missing files

### Nuclear Option - Clean Reload:
1. Close ALL browser windows
2. Clear browser cache completely
3. Restart your computer
4. Open `index.html` fresh

---

## Verification Script

To verify everything is loaded correctly, open the browser console (F12) and type:

```javascript
// Check if data is loaded
console.log('Flashcards loaded:', typeof flashcards !== 'undefined');
console.log('Quiz questions loaded:', typeof quizQuestions !== 'undefined');
console.log('Number of flashcards:', flashcards ? flashcards.length : 0);
console.log('Number of quiz questions:', quizQuestions ? quizQuestions.length : 0);
```

**Expected Output:**
```
Flashcards loaded: true
Quiz questions loaded: true
Number of flashcards: 18
Number of quiz questions: 15
```

---

## Contact Information

If you're still having issues:
1. Take a screenshot of the error
2. Note which browser you're using
3. Note which mode isn't working
4. Check the browser console for errors

---

## Success Indicators

You'll know it's working when:
- ✅ Mode buttons switch views
- ✅ Flashcards flip when clicked
- ✅ Quiz shows questions and feedback
- ✅ Progress bars update
- ✅ House points increase on correct answers
- ✅ All navigation works smoothly

---

## Last Resort

If absolutely nothing works:
1. Download fresh copies of all files
2. Create a new folder
3. Put all files in that folder
4. Open `index.html` from the new folder
5. Use a different browser

---

**The app should now be fully functional! Enjoy studying!** 🎓✨

*Mischief Managed!* 🗺️
