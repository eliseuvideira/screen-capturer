import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import url from 'url';

let window: BrowserWindow | null = null;

const createWindow = () => {
  window = new BrowserWindow({ show: false });
  window.loadURL(
    url.format({
      pathname: join(__dirname, '..', '..', 'renderer', 'index.html'),
      protocol: 'file',
      slashes: true,
    }),
  );
  window.on('ready-to-show', () => {
    if (window) {
      window.show();
    }
  });
  window.on('closed', () => {
    window = null;
  });
  return window;
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window === null) {
    window = createWindow();
  }
});
