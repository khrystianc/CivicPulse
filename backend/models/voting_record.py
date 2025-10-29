from mongoengine import Document, StringField, DateTimeField

class VotingRecord(Document):
    politician = StringField(required=True)
    bill = StringField(required=True)
    vote = StringField(required=True, choices=['Yes', 'No', 'Abstain'])
    date = DateTimeField(required=True)

    def to_json(self):
        return {
            "id": str(self.id),
            "politician": self.politician,
            "bill": self.bill,
            "vote": self.vote,
            "date": self.date.isoformat()
        }
