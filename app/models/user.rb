class User < ApplicationRecord

  validates_uniqueness_of :username

  def self.generate
    adjectives = ['Сочное', 'Заводное', 'Скучающее','Нервное',
   'Обаятельное', 'Подозрительное', 'Крэзи', 'Подавленное']
    nouns = ['Манго', 'Чудовище', 'Тако',
    'Повидло', 'Щупальце', 'Ебобо']
    number = rand.to_s[2..4]
    username = "#{adjectives.sample}-#{nouns.sample}-#{number}"
    create(username:username)
  end

end
