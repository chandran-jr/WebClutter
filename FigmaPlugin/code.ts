figma.showUI(__html__)

figma.ui.resize(500, 500)

figma.ui.onmessage = pluginMessage => {


  figma.closePlugin()
}