from api import db
from sqlalchemy.sql import func

class Presentation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    url = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())

    def __repr__(self):
        return f'<Presentation {self.name}>'

def initDB():
    db.create_all()

if __name__ == "__main__":
    initDB()