import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    // el KeyboardAvoidingView nos sirve para que el teclado no nos tape los inputs finales en iphone por ejemplo
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={isIOS ? 'height' : undefined}
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              // keyboardType='numeric' // tipo de teclado
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder='Correo electronico'
              autoCapitalize={'words'}
              autoCorrect={false}
              keyboardType='email-address' // tipo de teclado
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder='Telefono'
              autoCapitalize={'words'}
              autoCorrect={false}
              keyboardType='phone-pad' // tipo de teclado
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard className='mb-5'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='mb-5'>
            <ThemedText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur iusto ea officiis assumenda quos sequi magnam inventore impedit adipisci voluptate provident facere eveniet iste, excepturi sapiente nobis possimus ducimus id nostrum alias laboriosam incidunt dolore ratione? Quisquam suscipit eum sunt id repellendus expedita distinctio sapiente, tempora voluptate provident commodi culpa modi dolores sed eligendi nisi, officiis hic deserunt, placeat delectus accusantium! Corporis, provident officiis eum ullam dolores rerum iste architecto officia nulla impedit, vel nobis repellat culpa porro quae? Ipsum id eos modi blanditiis vitae incidunt ipsam deleniti officia sunt voluptate, veniam, accusantium ad possimus. Quaerat cum neque quasi, quam explicabo ut, expedita totam aspernatur porro temporibus dolor possimus nisi modi repudiandae ducimus accusantium suscipit. Quos mollitia iure, tempore perferendis alias facere sit, recusandae impedit est architecto necessitatibus sapiente repudiandae voluptatum fuga unde modi accusantium amet consectetur obcaecati quibusdam sequi maiores exercitationem? Quibusdam amet beatae, et eligendi numquam facilis sed debitis quisquam, eius minima autem ut, ducimus magni dignissimos accusantium a. Atque nobis commodi voluptate ipsum reiciendis pariatur mollitia iusto quisquam reprehenderit quo dolore distinctio veniam itaque doloremque totam natus aliquid velit tempora eaque tenetur quos, sint sit deserunt sequi? At dicta architecto nostrum animi nesciunt, exercitationem molestias impedit numquam explicabo ullam! Iste dolor quae reprehenderit repellendus ipsam eum nisi, at vitae quasi impedit, reiciendis amet incidunt repellat accusamus, aut voluptatum magnam inventore. Quae reprehenderit voluptas at velit quos numquam ipsa neque iure, consectetur iste. Porro ducimus voluptate voluptates amet cumque consequatur necessitatibus. Magni eius cumque, praesentium accusantium hic nobis dolorum quam velit nulla dolorem libero, ipsum eos? Natus temporibus quo ipsam eum corporis earum harum quisquam pariatur magnam, laudantium mollitia ullam architecto perferendis ea blanditiis laborum minus, voluptatibus distinctio, dolore maiores quod quidem iusto. Labore praesentium iure nobis incidunt cumque deserunt est explicabo a magnam nemo! Molestias maxime harum magnam officia, dicta nostrum? Iusto dolorem cupiditate harum nisi fugiat, doloribus nobis amet voluptas ipsa dicta blanditiis. Laboriosam ut veritatis neque vero explicabo natus id debitis ullam sunt reprehenderit nulla, minus quod praesentium rem, recusandae ab consectetur, molestias corrupti. Aliquam tenetur recusandae culpa ducimus! Nisi nostrum provident a quasi laudantium fugiat quam eligendi fuga error eaque, qui cupiditate, sint vero ipsam quo itaque repellendus! Odio facere soluta et iste perferendis incidunt velit inventore laboriosam. Rerum nobis ipsum laborum omnis veritatis sapiente? Maxime, fugit soluta repellendus ad blanditiis vitae eos. Corporis doloribus ipsam numquam quas quibusdam autem, ab veniam quam velit unde nostrum earum fuga consequuntur neque at non tempora, ut similique voluptate suscipit amet odit voluptatem? Minima molestiae veniam soluta laboriosam alias tempore perspiciatis repellat amet dignissimos, ducimus quasi magni eos autem sit corporis aspernatur, architecto fugiat atque veritatis officiis necessitatibus laborum labore inventore cum? Accusantium itaque sit fugiat at quidem ut earum quasi aperiam? Corporis labore ex dignissimos aut dolores neque laborum ut distinctio commodi quia nemo, consequuntur architecto iste ad maxime voluptates dolor numquam! Necessitatibus tempora, molestiae reiciendis cumque eos vero saepe numquam praesentium labore nulla corrupti nobis mollitia repudiandae culpa dolorum nemo modi alias repellendus. Maxime eligendi magni animi maiores? Sit iusto natus rerum, quaerat voluptatem ex excepturi voluptates! Provident sunt assumenda, saepe consectetur eum expedita voluptas tempora unde eius maiores facilis aspernatur cupiditate atque iste, aperiam molestias commodi nihil quia inventore? Eos, odit ea ullam exercitationem sit quibusdam porro asperiores odio atque! Dolore ut totam laudantium magni facilis ullam voluptates, dolores assumenda quia adipisci veritatis cumque, illo est minima, voluptas quidem numquam omnis quisquam autem? Quae deleniti dolores, soluta adipisci harum ab tenetur voluptatibus eaque, molestiae aut delectus ipsum accusantium possimus. Culpa odio earum deleniti delectus facilis nesciunt optio. Ex natus omnis inventore repellendus itaque vitae, beatae quos placeat minima exercitationem dicta quis dolores expedita illum voluptas qui eos, quod reprehenderit dolorum odio laborum. Voluptatibus, commodi. Sint, reiciendis? Magnam odit sequi nisi vitae nam adipisci beatae saepe, dignissimos eligendi similique? Laudantium pariatur voluptatem voluptatibus! Ab reiciendis voluptatibus asperiores mollitia, iure ipsa repudiandae eum odio accusantium illum? Ratione corrupti porro, quidem incidunt aperiam fuga perferendis quas aliquam possimus temporibus facilis ipsum doloribus error dolores nemo illo! Aperiam, sapiente! Quasi voluptate, quidem, alias dolor quis ex necessitatibus obcaecati suscipit, odit numquam atque omnis facere! Vel cumque repellat voluptatibus ipsa consequuntur animi voluptatum quis ipsam assumenda, deleniti quia obcaecati similique, mollitia explicabo suscipit quibusdam quae inventore alias architecto fugiat! Sit quasi excepturi ullam officia aliquid consequatur, ducimus laudantium doloribus minima ad vero perspiciatis eaque deserunt sed dignissimos aspernatur distinctio veniam facilis minus voluptatibus neque consectetur nam! Numquam, nobis ut. Molestias, quos explicabo temporibus ex eveniet minima unde rerum nihil ratione corporis a enim dolorem tempora itaque, sint, quam perferendis aperiam sequi adipisci consequatur. Recusandae illo nam laborum voluptates commodi esse dolorem accusamus quasi odio fugit magni quia dignissimos laboriosam, tempore sequi quidem alias. Ratione incidunt hic alias culpa debitis pariatur illum aperiam eligendi corporis. Autem id excepturi ipsa rerum, eius esse doloribus, cupiditate porro, rem laboriosam corporis itaque! Est numquam ex similique sequi fugiat praesentium ullam autem ad perspiciatis vel eius ipsa eaque distinctio deleniti a consectetur incidunt earum reprehenderit, voluptatem sed nisi quidem blanditiis! Ipsum excepturi voluptatibus commodi vero libero tenetur, qui odio vel eaque cumque officiis natus voluptate temporibus impedit quod maiores quos consequatur! Est voluptatum quod culpa ullam aut iste placeat laudantium iure in aliquid exercitationem ex sunt ea amet delectus, vitae beatae, accusantium maxime pariatur doloribus? Ea illum corporis doloribus quos soluta cumque dignissimos consequuntur omnis facere cupiditate eum, ipsa possimus adipisci sed molestias id rem, maxime mollitia hic ratione ducimus magnam! Illo commodi doloribus vel eos exercitationem. Minus porro minima culpa perspiciatis nihil aspernatur, laudantium voluptates error asperiores voluptatum dolorem beatae, temporibus, soluta odit quibusdam obcaecati enim. Maiores ea consectetur aspernatur, incidunt asperiores, debitis illum doloribus consequuntur natus tempore veniam omnis dolores sint nam rerum ut autem iusto consequatur accusantium aliquam libero quae, unde enim laborum! Numquam modi earum sed repudiandae excepturi tempora eaque maxime molestiae ratione sint minima accusamus reprehenderit tempore cumque explicabo suscipit eum dolores laudantium, nostrum ipsam ab architecto id incidunt hic? Suscipit laudantium explicabo velit accusamus qui amet! Optio!</ThemedText>
          </ThemedCard>



          <ThemedCard
            className='mb-5'
            style={{
              marginBottom: isIOS ? 100 : 10
            }}
          >
            <ThemedTextInput
              placeholder='Nombre completo'
              autoCapitalize={'words'}
              autoCorrect={false}
              // keyboardType='numeric' // tipo de teclado
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder='Correo electronico'
              autoCapitalize={'words'}
              autoCorrect={false}
              keyboardType='email-address' // tipo de teclado
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder='Telefono'
              autoCapitalize={'words'}
              autoCorrect={false}
              keyboardType='phone-pad' // tipo de teclado
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>


      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
