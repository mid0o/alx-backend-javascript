process.stdout.write('Welcome to ALX, what is your name?\n')



.if (process.stdin.isTTY) {



  process.stdin.on('data', (data) => {

    process.stdout.write(`Your name is: ${data.toString()}`);

    process.exit();

  });

} else {



  let input = '';

  process.stdin.on('data', (chunk) => {

    input += chunk.toString();

  });

  process.stdin.on('end', () => {

    process.stdout.write(`Your name is: ${input}`);

  });

}

process.on('exit', () => {

  process.stdout.write('This important software is now closing\n');

});
