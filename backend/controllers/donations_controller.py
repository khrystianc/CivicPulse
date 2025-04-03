from models.donation import Donation

def get_donations():
    donations = Donation.objects()
    return [donation.to_json() for donation in donations]
