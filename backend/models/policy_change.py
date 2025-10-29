from mongoengine import Document, StringField, DateTimeField

class PolicyChange(Document):
    title = StringField(required=True)
    description = StringField(required=True)
    status = StringField(required=True, choices=['Proposed', 'Under Review', 'Approved', 'Rejected', 'Implemented'])
    date = DateTimeField(required=True)

    def to_json(self):
        return {
            "id": str(self.id),
            "title": self.title,
            "description": self.description,
            "status": self.status,
            "date": self.date.isoformat()
        }
