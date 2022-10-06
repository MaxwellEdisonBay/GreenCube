import shortuuid

class DataBaseRepo:
    def __init__(self):
        self.links = [
                {'id': '0',
                'name': "Presentation 1",
                'url' : "https://docs.google.com/presentation/d/16FFk793LGJgYTYJ_BjIqjF_8kP9n_Dn8Rmj39Pkgj1Q/edit?usp=sharing"},
                {'id': '1',
                'name': "Presentation 2",
                'url' : "https://docs.google.com/presentation/d/1nNxYM7A3SToTbjgYhfKgIwU5UlcD6L7wvuLx7Tj-ol8/edit?usp=sharing"},
                {'id': '2',
                'name': "Presentation 3",
                'url' : "https://docs.google.com/presentation/d/1S32ycc0BcGJZZybPPbpouJVfj-eu9triciucKxhVIT0/edit?usp=sharing"},
                # {'id': '3',
                # 'name': "Presentation 4",
                # 'url' : "http://localhost:3000/4"},
            ]

    def getLinks(self):
        return self.links

    def addPres (self, newPres):
        pres = newPres
        pres["id"] = shortuuid.uuid()
        self.links.append(pres)
        return pres

    def deletePres (self, id):
        self.links = [x for x in self.links if x["id"]!=id]

    def updatePres(self, updatedPres):
        for pres in self.links:
            if pres["id"]==updatedPres["id"]:
                pres["name"] = updatedPres["name"]
                pres["url"] = updatedPres["url"]
                break