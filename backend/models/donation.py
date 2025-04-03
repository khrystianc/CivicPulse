from mongoengine import Document, StringField, FloatField, DateTimeField

class Donation(Document):
    amount = FloatField(required=True)
    donor = StringField(required=True)
    date = DateTimeField(required=True)

    def to_json(self):
        return {
            "amount": self.amount,
            "donor": self.donor,
            "date": self.date.isoformat()
        }
