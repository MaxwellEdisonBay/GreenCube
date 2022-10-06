from api import db
from dbModels import Presentation


def getPresentations():
    pres = Presentation.query.all()
    print(pres)
    return pres


def addPresentation(pres):
    newPres = Presentation(name=pres["name"], url=pres["url"])
    db.session.add(newPres)
    db.session.commit()
    return {"code": 0, "obj": {"name": newPres.name, "url": newPres.url, "id": newPres.id}}


def deletePresentation(id):
    pres = Presentation.query.get(id)
    # TODO: Add no matching records handling
    db.session.delete(pres)
    db.commit()
    return {"code": 0}


def editPresentation(newName, newUrl, id):
    pres = Presentation.query.get(id)
    pres.name = newName
    pres.url = newUrl
    db.session.add(pres)
    db.session.commit()
    return {"code": 0}
